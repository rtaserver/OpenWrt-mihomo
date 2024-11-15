'use strict';
'require form';
'require view';
'require fs';

return view.extend({
    load: function () {
        return fs.stat('/www/tinyfilemanager').then(function (stat) {
            if (stat.type === 'directory') {
                return '/tinyfilemanager/index.php?p=etc%2Fmihomo';
            } else {
                throw new Error('Directory TinyFile Manager not found');
            }
        }).catch(function () {
            return fs.stat('/www/tinyfm').then(function (stat) {
                if (stat.type === 'directory') {
                    return '/tinyfm/tinyfm.php?p=etc%2Fmihomo';
                } else {
                    throw new Error('Directory TinyFile Manager not found');
                }
            }).catch(function () {
                return null;
            });
        });
    },
    render: function (iframePath) {
        const host = window.location.hostname;
        const iframeUrl = `http://${host}${iframePath}`;
            
        m = new form.Map('mihomo', _('MiHomo Advanced Config Editor'));

        let container = E('div', { class: 'cbi-section' }, [
            E('iframe', {
                src: iframeUrl,
                width: '100%',
                height: '800px',
                frameborder: '0'
            }, _('Your browser does not support iframes.'))
        ]);

        return container;
    },
});
