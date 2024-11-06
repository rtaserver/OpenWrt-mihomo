![GitHub License](https://img.shields.io/github/license/morytyann/OpenWrt-mihomo?style=for-the-badge&logo=github) ![GitHub Tag](https://img.shields.io/github/v/release/morytyann/OpenWrt-mihomo?style=for-the-badge&logo=github) ![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/rtaserver/OpenWrt-mihomo-Mod/total?style=for-the-badge&logo=github) ![GitHub Repo stars](https://img.shields.io/github/stars/rtaserver/OpenWrt-mihomo-Mod?style=for-the-badge&logo=github) [![Telegram](https://img.shields.io/badge/Contact-Telegram-26A5E4?style=for-the-badge&logo=telegram)](https://t.me/mihomotproxy)

# MihomoTProxy By [morytyann](https://github.com/morytyann/OpenWrt-mihomo) 

Transparent Proxy with Mihomo on OpenWrt.


## Prerequisites

**This Is A Modified Version Of Morytyann Official Version**
- OpenWrt >= 23.05
- Linux Kernel >= 5.10
- firewall4

## Feature

- Transparent Proxy (TPROXY/TUN, IPv4 and/or IPv6)
- Access Control
- Profile Mixin
- Profile Editor
- Scheduled Restart

## Install & Update

### B. Install From Release

```shell
curl -s -L https://mirror.ghproxy.com/https://github.com/rtaserver/OpenWrt-mihomo-Mod/raw/refs/heads/mod/install.sh | ash
```

## Uninstall & Reset

```shell
curl -s -L https://mirror.ghproxy.com/https://github.com/rtaserver/OpenWrt-mihomo-Mod/raw/refs/heads/mod/uninstall.sh | ash
```

## How To Use

See [Wiki](https://github.com/morytyann/OpenWrt-mihomo/wiki)

## How does it work

1. Mixin and Update profile.
2. Run mihomo.
3. Run hijack prepare script.
4. Set router hijack.
5. Set lan hijack with access control.
6. Set scheduled restart.

Note that the steps above may change base on config.

## Dependencies

- ca-bundle
- curl
- yq
- firewall4
- ip-full
- kmod-inet-diag
- kmod-nft-tproxy
- kmod-tun
