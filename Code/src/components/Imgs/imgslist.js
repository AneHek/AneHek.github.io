let basepath = ""
const imgslist = {
    "Apprentice": basepath + "Heroico/app.png",
    "Squire": basepath + "Heroico/squ.png",
    "Huntress": basepath + "Heroico/hun.png",
    "Monk": basepath + "Heroico/mon.png",
    "Abyss Lord": basepath + "Heroico/aby.png",
    "Series EV2": basepath + "Heroico/ev2.png",
    "Gunwitch": basepath + "Heroico/gun.png",
    "Lavamancer": basepath + "Heroico/lav.png",
    "Mystic": basepath + "Heroico/mys.png",
    "Dryad": basepath + "Heroico/dry.png",
    "Initiate": basepath + "Heroico/ini.png",
    "Adept": basepath + "Heroico/ade.png",
    "Barbarian": basepath + "Heroico/bar.png",
    "Mercenary": basepath + "Heroico/mer.png",
    "Countess": basepath + "Heroico/cou.png",
    "GreenShard": "Shard/GreenShard.png",
    "Totem": "Mod/TotemIcon.png",
    "Medal": "Mod/medallion.png",
    "MOD1": "Mod/MOD1.png",
    "MOD2": "Mod/MOD2.png",
    "MOD3": "Mod/MOD3.png",
    "MOD4": "Mod/MOD4.png",
    "MOD5": "Mod/MOD5.png",
    "MOD6": "Mod/MOD6.png",
    "MOD7": "Mod/MOD7.png",
    "MOD8": "Mod/MOD8.png",
    "MOD9": "Mod/MOD9.png",
    "MOD10": "Mod/MOD10.png",
    "C0": "Shard/C0.png",
    "C1": "Shard/C1.png",
    "C2": "Shard/C2.png",
    "C3": "Shard/C3.png",
    "C4": "Shard/C4.png",
    "C5": "Shard/C5.png",
    "C6": "Shard/C6.png",
    "C7": "Shard/C7.png",
    "C8": "Shard/C8.png",
    "C9": "Shard/C9.png",
    "C10": "Shard/C10.png",
    "大师": "Shard/Mastery.png",
    "1":"https://i.postimg.cc/QCsqgMT6/1.png",
"2":"https://i.postimg.cc/15vK6s5H/2.png",
"3":"https://i.postimg.cc/ZYFHb6GX/3.png",
"4":"https://i.postimg.cc/x8R36SG9/4.png",
"5":"https://i.postimg.cc/2S377M1f/5.png",
"6":"https://i.postimg.cc/Qx8bHHsC/6.png",
"7":"https://i.postimg.cc/W4kmQZmW/7.png",
"8":"https://i.postimg.cc/13TcCBFV/8.png",
"9":"https://i.postimg.cc/B6f5svMq/9.png",
"10":"https://i.postimg.cc/y6Ph4s9H/10.png",
"11":"https://i.postimg.cc/4Nx6Xqbh/11.png",
"12":"https://i.postimg.cc/mgc7H9nL/12.png",
"13":"https://i.postimg.cc/KvpnjfJp/13.png",
"14":"https://i.postimg.cc/YSYgXHkT/14.png",
"15":"https://i.postimg.cc/XYTdcJMw/15.png",
"16":"https://i.postimg.cc/sxVpQ0kq/16.jpg",
"17":"https://i.postimg.cc/bJPnWBwr/17.png",
"18":"https://i.postimg.cc/ZRLNSxWc/18.png",
"19":"https://i.postimg.cc/L5616gfM/19.png",
"20":"https://i.postimg.cc/BbY18ZcP/20.png",
"21":"https://i.postimg.cc/RCXtpG5C/21.png",
"22":"https://i.postimg.cc/Hsnyq5dw/22.png",
"23":"https://i.postimg.cc/Ghfyd2mZ/23.png",
"24":"https://i.postimg.cc/W1JJ3vDt/24.png",
"25":"https://i.postimg.cc/QMGKKy5m/25.png",
"26":"https://i.postimg.cc/pdfhfJJH/26.png",
"27":"https://i.postimg.cc/V6zSD0Kb/27.png",
"28":"https://i.postimg.cc/3R9k6rqf/28.png",
"29":"https://i.postimg.cc/x8CXSDDf/29.png",
"30":"https://i.postimg.cc/1RCgrtwf/30.png",
"31":"https://i.postimg.cc/gjTnzSmv/31.png",
"32":"https://i.postimg.cc/02zzWs0Z/32.png",
"33":"https://i.postimg.cc/Gh6H65MR/33.png",
"34":"https://i.postimg.cc/SKhjxzFt/34.png",
"35":"https://i.postimg.cc/q7xqhMpB/35.png",
"36":"https://i.postimg.cc/vB8BWFmr/36.png",
"37":"https://i.postimg.cc/76BL9sCp/37.png",
"38":"https://i.postimg.cc/L5n8btLh/38.png",
"39":"https://i.postimg.cc/hv6tWX1s/39.png",
"40":"https://i.postimg.cc/zDcBRQYh/40.png",
"41":"https://i.postimg.cc/7YJL1NqW/41.png",
"42":"https://i.postimg.cc/t404BVTC/42.png",
"43":"https://i.postimg.cc/2S377M1f/5.png",
"44":"https://i.postimg.cc/P5mr9rpb/44.png",
"45":"https://i.postimg.cc/yNsYH4cM/45.png",
"46":"https://i.postimg.cc/GpK337jH/46.png",
"47":"https://i.postimg.cc/zBfzyCdp/47.png",
"48":"https://i.postimg.cc/k4hnK2zC/48.png",
"49":"https://i.postimg.cc/WzFsn2ck/49.png",
"50":"https://i.postimg.cc/2ysr9PCX/50.png",
"51":"https://i.postimg.cc/1R2mzNDc/51.png",
"52":"https://i.postimg.cc/8zVTRQK7/52.png",
"53":"https://i.postimg.cc/7YzxJYVv/53.png",
"54":"https://i.postimg.cc/Nj7BbJSp/54.png",
}
export default imgslist;
/**
 *     // "1": "Tower/1.png",
    // "2": "Tower/2.png",
    // "3": "Tower/3.png",
    // "4": "Tower/4.png",
    // "5": "Tower/5.png",
    // "6": "Tower/6.png",
    // "7": "Tower/7.png",
    // "8": "Tower/8.png",
    // "9": "Tower/9.png",
    // "10": "Tower/10.png",
    // "11": "Tower/11.png",
    // "12": "Tower/12.png",
    // "13": "Tower/13.png",
    // "14": "Tower/14.png",
    // "15": "Tower/15.png",
    // "16": "Tower/16.png",
    // "17": "Tower/17.png",
    // "18": "Tower/18.png",
    // "19": "Tower/19.png",
    // "20": "Tower/20.png",
    // "21": "Tower/21.png",
    // "22": "Tower/22.png",
    // "23": "Tower/23.png",
    // "24": "Tower/24.png",
    // "25": "Tower/25.png",
    // "26": "Tower/26.png",
    // "27": "Tower/27.png",
    // "28": "Tower/28.png",
    // "29": "Tower/29.png",
    // "30": "Tower/30.png",
    // "31": "Tower/31.png",
    // "32": "Tower/32.png",
    // "33": "Tower/33.png",
    // "34": "Tower/34.png",
    // "35": "Tower/35.png",
    // "36": "Tower/36.png",
    // "37": "Tower/37.png",
    // "38": "Tower/38.png",
    // "39": "Tower/39.png",
    // "40": "Tower/40.png",
    // "41": "Tower/41.png",
    // "42": "Tower/42.png",
    // "43": "Tower/43.png",
    // "44": "Tower/44.png",
    // "45": "Tower/45.png",
    // "46": "Tower/46.png",
    // "47": "Tower/47.png",
    // "48": "Tower/48.png",
    // "49": "Tower/49.png",
    // "50": "Tower/50.png",
    // "51": "Tower/51.png",
    // "52": "Tower/52.png",
    // "53": "Tower/53.png",
    // "54": "Tower/54.png",
 */