include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-mihomo
PKG_VERSION:=1.8.4
LUCI_TITLE:=LuCI Support for mihomo
LUCI_DEPENDS:=+luci-base +mihomo

include $(TOPDIR)/feeds/luci/luci.mk

define Package/$(PKG_NAME)
  SECTION:=luci
  CATEGORY:=LuCI
  TITLE:=$(LUCI_TITLE)
  DEPENDS:=$(LUCI_DEPENDS)
endef

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/htdocs/luci-static/resources
	$(INSTALL_DIR) $(1)/usr/libexec
	$(INSTALL_DIR) $(1)/usr/share/luci/menu.d
	$(INSTALL_DIR) $(1)/usr/share/rpcd/acl.d

	$(CP) ./htdocs/* $(1)/htdocs/
	$(INSTALL_BIN) ./tools/mihomo.js $(1)/usr/libexec/mihomo-call
	$(INSTALL_DATA) ./view/mihomo/*.js $(1)/usr/share/luci/menu.d/
	$(INSTALL_DATA) ./po/zh_Hans/mihomo.po $(1)/usr/share/rpcd/acl.d/
	
	$(INSTALL_DATA) ./root/usr/share/luci/menu.d/luci-app-mihomo-fm.json $(1)/usr/share/luci/menu.d/
	$(INSTALL_DATA) ./root/usr/share/luci/menu.d/luci-app-mihomo.json $(1)/usr/share/luci/menu.d/
	$(INSTALL_DATA) ./root/usr/share/rpcd/acl.d/luci-app-mihomo.json $(1)/usr/share/rpcd/acl.d/

	@if [ -d "/www/tinyfilemanager" ] || [ -d "/www/tinyfm" ]; then \
		echo "TinyFileManager Detected"; \
		rm -rf $(1)/usr/share/luci/menu.d/luci-app-mihomo.json; \
		mv $(1)/usr/share/luci/menu.d/luci-app-mihomo-fm.json $(1)/usr/share/luci/menu.d/luci-app-mihomo.json; \
	else \
		echo "TinyFileManager Not Detected"; \
	fi
endef

$(eval $(call BuildPackage,$(PKG_NAME)))