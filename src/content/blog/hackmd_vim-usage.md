---
title: "Vim 常見的快速鍵紀錄"
description: "紀錄 Vim 的常用快速鍵方便查閱"
publishDate: 2025-01-02
tags: ["From HackMD", "Chinese (Taiwan)", "guide"]
---

> This article is merged from hackmd.io

# Vim 常見快速鍵使用
## 一般設定
`:set nu` 顯示列數
`:set nonu` 不顯示列數
## 一般模式下
### 移動游標
打數字(可選)用來移動多列 + 上下左右鍵  
`H` = home  
`G` = end  
`$` 到一列的最後面  
`0` 到一列的最前面  
### 搜尋與取代
`/查詢字符` 游標以下找檔案中的文字  
`?查詢字符` 游標以上找檔案中的文字  
`n` 下一個  
`N` 上一個  
### 刪除、複製與貼上
`dd` 刪除游標在的這列
`yy` 複製(vim裡面的複製)游標所在的那一列
`p` 貼上
`u` 復原一個動作
`Ctrl + r` 復原 `u`
### 進入插入模式
就 `i`
`Esc` 回到一般模式
## 指令模式
後面加 `!` 就是強制
`:w` 儲存
`:wq` 儲存退出
`:q` 退出
`:q!` 強制退出(我習慣用 `:qa!`，雖然不確定差在哪)
`:w test.txt` 另存新檔
`:! [Command]` 執行指令顯示在下面