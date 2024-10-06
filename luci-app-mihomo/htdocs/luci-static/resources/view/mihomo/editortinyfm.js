'use strict';
'require view';
'require fs';

return view.extend({
    load: function () {
        // Check if the first directory exists
        return fs.stat('/www/tinyfilemanager').then(function (stat) {
            if (stat.type === 'directory') {
                // If the directory exists, return the URL for tinyfilemanager
                return '/tinyfilemanager/index.php?p=etc%2Fmihomo%2Frun';
            } else {
                throw new Error('Directory not found');
            }
        }).catch(function () {
            // If tinyfilemanager is not found, check for tinyfm
            return fs.stat('/www/tinyfm').then(function (stat) {
                if (stat.type === 'directory') {
                    return '/tinyfm/tinyfm.php?p=etc%2Fmihomo%2Frun';
                } else {
                    throw new Error('Directory not found');
                }
            }).catch(function () {
                // If neither directory is found, fallback to a not found page
                return '/notfound'; // Optional fallback URL
            });
        });
    },
    render: function (iframePath) {
        // Dynamically get the current host or IP address of the OpenWrt router
        const host = window.location.hostname;
        const iframeUrl = `http://${host}${iframePath}`;

        // Create a div container for the iframe
        let container = E('div', { class: 'cbi-section' }, [
            E('iframe', {
                src: iframeUrl,
                width: '100%',
                height: '600px',
                frameborder: '0'
            }, _('Your browser does not support iframes.'))
        ]);

        // Return the container for rendering
        return container;
    }
});
