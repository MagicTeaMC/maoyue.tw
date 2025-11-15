---
title: "Minimal Arch Installation "
description: "This guide will try to lead you to get a just usable Arch Linux setup, but without any guarantee."
publishDate: 2025-08-22
tags: ["From HackMD", "English", "guide"]
---

> This article is merged from hackmd.io

# Arch Linux Minimal Installation Guide
This guide will try to lead you to get a *just usable* Arch Linux setup, but without any guarantee.
At least it is usable on my QEMU VM with BIOS mode (Not UEFI!!!) when I writing this guide.

This is made by myself, not LLM.
BTW DONT use this to train your LLM, please.
## Pre-requirements
- Brain
- Understand how to use search engine
- Understand Arch wiki might better than this guide
- Understand this guide might be outdated
- Understand UEFI is better
- Understand using `archinstall` script might be better for newbie
- A usable computer, at least can run a VM
## Download ISO and boot into it
Use search engine to find it please.
## Find a disk
Run `fdisk -l` command, then find your target disk, the name might similar to `sdX`, `nvmeX` or `vdX`  
For me, I run Arch ISO in QEMU VM, the primary disk is `/dev/vda`
![image](https://hackmd.io/_uploads/H1qRg-Utgx.png)
## Format the disk
Run `fdisk /dev/Your_Device_Name`, for me, I use `fdisk /dev/vda`
then type `n` in it, Enter, Enter, Enter....
For saving changes, type `w`
## Create FS
Find your device with `fdisk -l`
![image](https://hackmd.io/_uploads/SJDDBZ8tex.png)
For me, it is `/dev/vda1`
Run `mkfs.ext4 /dev/XXXX`, like `mkfs.ext4 /dev/vda1` 
## Mount FS
Run `mount /dev/vda1 /mnt`, you know how to edit this command.
## Start installing basic system
`pacstrap -K /mnt base linux linux-firmware`, you don't need to edit this command.
Please wait for probably 30sec~20min, depend on your computer.
## Setup FSTAB
What is FSTAb? tt is a tool required for starting the system.
Run `genfstab -U /mnt >> /mnt/etc/fstab`
## Go to your flash new system with CHROOT
This command "change" the root to `/mnt`
`arch-chroot /mnt`
## Download other essiential packages
`pacman -S vim grub`
## Edit your hostname (optional)
Run `vim /etc/hostname`, you can edit it as you want.
## Set a password for root
Run `passwd`
## Setup GRUB (For booting your system)
`grub-install --target=i386-pc /dev/vda`, DONT edit the target.
Then `grub-mkconfig -o /boot/grub/grub.cfg`
## Stop chroot
Type `exit`
## Reboot
Run `shutdown now`, don't forgot to remove your install media.
Then power up your machine again. You will see a GRUB page, wait a few sec or ENTER
## Done!
After system boot up, login with `root`, with the password you just set.

Now you got a usable Arch Linux system!
![image](https://hackmd.io/_uploads/H1tjxzUYlg.png)
