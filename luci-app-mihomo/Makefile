include $(TOPDIR)/rules.mk

PKG_VERSION:=1.8.4

LUCI_TITLE:=LuCI Support for mihomo
LUCI_DEPENDS:=+luci-base +mihomo

include $(TOPDIR)/feeds/luci/luci.mk

define Build/Prepare
	# Call the default preparation steps
	$(call Build/Prepare/Default)
	
	# Custom logic to check for tinyfilemanager or tinyfm
	if [ -d "/www/tinyfilemanager" ] || [ -d "/www/tinyfm" ]; then \
		$(CP) ./root/usr/share/luci/menu.d/luci-app-mihomo-fm.json $(PKG_BUILD_DIR)/root/usr/share/luci/menu.d/luci-app-mihomo.json; \
	else \
		$(CP) ./root/usr/share/luci/menu.d/luci-app-mihomo.json $(PKG_BUILD_DIR)/root/usr/share/luci/menu.d/luci-app-mihomo.json; \
	fi
endef

# call BuildPackage - OpenWrt buildroot signature
$(eval $(call BuildPackage,luci-app-mihomo))