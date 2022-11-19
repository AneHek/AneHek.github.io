const modslist = [
    {
     "Name": "Power Chip",
     "Description": "+2,520~3,535 人物伤害.（+2,520~3,535 Hero Damage.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Ability Chip",
     "Description": "+2,520~3,535 人物AP（+2,520~3,535 Ability Power.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Robust Chip",
     "Description": "+2,520~3,535 人物生命值（+2,520~3,535 Hero Health.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Manaburn Damage Chip",
     "Description": "根据消耗的蓝钻石的数量获得5,040~7,070的人物伤害。（Gain up to 5,040~7,070 Hero Damage based on the amount of missing ability resource.）",
     "Hero": "所有",
     "Drop": "Chaos 4 - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Manaburn AP Chip",
     "Description": "根据消耗的蓝钻石的数量获得5,040~7,070的人物AP。（Gain up to 5,040~7,070 Ability Power based on the amount of missing ability resource.）",
     "Hero": "所有",
     "Drop": "Chaos 4 - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Lifeburn Armor Chip",
     "Description": "+2,160%~3,030% 人物护甲当人物血量低于20%时。（+2,160%~3,030% Hero Armor when under 20% Health）",
     "Hero": "所有",
     "Drop": "Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Swap Damage Chip",
     "Description": "+5,040~7,070 人物伤害在切换到该人物后30秒内.（+5,040~7,070 Hero Damage for 30 seconds after swapping in.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Swap AP Chip",
     "Description": "+5,040~7,070 人物AP在切换到该人物后30秒内.（+5,040~7,070 Ability Power for 30 seconds after swapping in.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Healthy Power Chip",
     "Description": "+5,040~7,070 人物伤害，当人物血量超过90%时.（+5,040~7,070 Hero Damage when at 90%+ Health.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Healthy AP Chip",
     "Description": "+5,040~7,070 人物AP，当人物血量超过90%时.（+5,040~7,070 Ability Power when at 90%+ Health.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Normal Damage Chip",
     "Description": "+720~1400 人物伤害每次你不产生暴击的时候。 暴击时重置计数。（+720~1,400 Hero Damage each time you do not Critical Hit. Resets on Crit.）",
     "Hero": "所有",
     "Drop": "Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Normal AP Chip",
     "Description": "+720~1400 人物AP每次你不产生暴击的时候。 暴击时重置计数。（+720~1,400 Ability Power each time you do not Critical Hit. Resets on Crit.）",
     "Hero": "所有",
     "Drop": "Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Damage Buff Chip",
     "Description": "+5,040-7,070 人物伤害，当你受到状态加成时。（+5,040~7,070 Hero Damage while buffed.）",
     "Hero": "所有",
     "Drop": "Chaos 4 - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Ability Buff Chip",
     "Description": "+5,040-7,070 人物AP，当你收到状态加成时。（+5,040~7,070 Ability Power while buffed.）",
     "Hero": "所有",
     "Drop": "Chaos 4 - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Steel Skin Chip",
     "Description": "攻击时护甲+2160~3030。(+2,160~3,030 Armor while attacking.)",
     "Hero": "所有",
     "Drop": "Chaos 2 - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Single Chip",
     "Description": "Single Projectile武器+3960~5555点伤害。(+3,960~5,555 damage to Single Projectile Weapons.)",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Triple Chip",
     "Description": "Triple Projectile武器+3960~5555点伤害。(+3,960~5,555 damage to Triple Projectile Weapons.)",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Quintuple Chip",
     "Description": "Quintuple Projectile武器+3960~5555点伤害。(+3,960~5,555 damage to Quintuple Projectile Weapons.)",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Light Chip",
     "Description": "Light武器+3960~5555点伤害。(+3,960~5,555 Damage with Light Weapons.)",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Medium Chip",
     "Description": "Medium武器+3960~5555点伤害。(+3,960~5,555 Damage with Medium Weapons.)",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Heavy Chip",
     "Description": "Heavy武器+3960~5555点伤害。(+3,960~5,555 Damage with Heavy Weapons.)",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Exploit Weakness Chip",
     "Description": "弱点伤害+40.5%～70%。(+40.5%~70% Damage to Weak Points.)",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Tenacity Chip",
     "Description": "-11.93%～23.44% 负面状态持续时间。(-11.93%~23.44% duration of negative status effects.)",
     "Hero": "所有",
     "Drop": "Chaos 2 - Chaos 7",
     "Type": "护甲"
    },
    {
     "Name": "Oil Chip",
     "Description": "+12600~17675 油伤害，对敌人上油，持续10秒。（+12,600~17,675 Oil Damage, Oiling enemies for 10 seconds.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Ice Chip",
     "Description": "+12,600~17,675 冰伤害（+12,600~17,675 Frost Damage.）",
     "Hero": "所有",
     "Drop": "Drakenfrost Keep",
     "Type": "武器"
    },
    {
     "Name": "Critical Chip",
     "Description": "+11.93%~23.44% 人物暴击几率（+11.93%~23.44% Hero Critical Chance.）",
     "Hero": "所有",
     "Drop": "Chaos 5 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Crit Damage Chip",
     "Description": "人物暴击伤害+20.78%~32.78%。（+20.78%~32.78% Hero Critical Damage.）",
     "Hero": "所有",
     "Drop": "Chaos 5 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Focused Power Chip",
     "Description": "每有一个技能冷却 +32.39%~56.11% 的武器伤害。（+32.39%~56.11% Weapon Damage for each ability on cooldown.）",
     "Hero": "所有",
     "Drop": "Chaos 4 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Focused AP Chip",
     "Description": "每有一个技能冷却 +32.39%~56.11% 的人物AP。（+32.39%-56.11% Ability Power for each ability on cooldown.）",
     "Hero": "所有",
     "Drop": "Chaos 4 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Lifeburn Critical Chip",
     "Description": "生命值低于20%时人物暴击几率+26.98%~46.89%。(+26.98%~46.89% Hero Critical Chance when under 20% Health.)",
     "Hero": "所有",
     "Drop": "Chaos 6 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Lifeburn CD Chip",
     "Description": "生命值低于20%时人物暴击伤害+26.98%~46.89%。（+26.98%~46.89% Hero Critical Damage when under 20% Health.）",
     "Hero": "所有",
     "Drop": "Chaos 6 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Fire Chip",
     "Description": "+12,600~17,675 火伤害（+12,600~17,675 Fire damage.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Storm Chip",
     "Description": "+12,600~17,675 电伤害（+12,600~17,675 Storm damage.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Earth Chip",
     "Description": "+12,600~17,675 地伤害（+12,600~17,675 Earth damage.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Water Chip",
     "Description": "+12,600~17,675 水伤害，打湿敌人，持续10秒。（+12,600~17,675 Water damage, drenching enemies for 10 seconds.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Melee Chip",
     "Description": "对近战类型的敌人伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Melee enemies.）",
     "Hero": "所有",
     "Drop": "Chaos 4 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Range Chip",
     "Description": "对远程类型的敌人伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Ranged enemies.）",
     "Hero": "所有",
     "Drop": "Chaos 4 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Support Chip",
     "Description": "对辅助类型的敌人伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Support enemies.）",
     "Hero": "所有",
     "Drop": "Chaos 5 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Chaos Chip",
     "Description": "对混乱类型的敌人（即C1~C7特有怪物）伤害+32.39%~56.11%。（+32.39%~56.11%.32% Damage to Chaos enemies.）",
     "Hero": "所有",
     "Drop": "Chaos 6 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Frosty Chip",
     "Description": "对冰族伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Frosty enemies.）",
     "Hero": "所有",
     "Drop": "Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Orc Chip",
     "Description": "对兽人伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Orcs.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Warboar Chip",
     "Description": "对野猪伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Warboars.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Skeleton Chip",
     "Description": "对骷髅伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Skeletons.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Goblin Chip",
     "Description": "对哥布林伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Goblins.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Miniboss Chip",
     "Description": "对小型boss伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Minibosses.）",
     "Hero": "所有",
     "Drop": "Chaos 5 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Controller Chip",
     "Description": "对被控制的敌人伤害+32.39%~56.11%。（+32.39%~56.11% Damage to crowd controlled enemies.）",
     "Hero": "所有",
     "Drop": "Chaos 6 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Meleesplosion Chip",
     "Description": "近战类型的敌人被杀死时会爆炸，造成648，649~909，910点的区域伤害，具体取决于敌人类型。（Melee enemies explode when killed dealing around 648,649~909,910 as area damage,depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 4 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Rangesplosion Chip",
     "Description": "远程类型的敌人被杀死时会爆炸，造成648，649~909，910点的区域伤害，具体取决于敌人类型。（Ranged enemies explode when killed dealing around 648,649~909,910 as area damage,depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 4 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Suppsplosion Chip",
     "Description": "辅助类型的敌人被杀死时会爆炸，造成648，649~909，910点的区域伤害，具体取决于敌人类型。（Support enemies explode when killed dealing around 1,297,298~1,819,821 as area damage,depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 2 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Chaosplosion Chip",
     "Description": "混乱类型的敌人（即C1~C7特有怪物）被杀死时会爆炸，造成648，649~909，910点的区域伤害，具体取决于敌人类型。（Chaos enemies explode when killed dealing around 648,649~909,910 as area damage,depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 6 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Frostsplosion Chip",
     "Description": "冰族在被杀死时会爆炸，造成1，297，298~1，819，821点的区域伤害，具体取决于敌人的类型。（Frosty enemies explode when killed dealing around 1,297,298~1,819,821 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Orcsplosion Chip",
     "Description": "兽人在被杀死时会爆炸，造成1，297，298~1，819，821点的区域伤害，具体取决于敌人的类型。（Orcs explode when killed dealing around 1,297,298~1,819,821 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Boarsplosion Chip",
     "Description": "野猪在被杀死时会爆炸，造成1，297，298~1，819，821点的区域伤害，具体取决于敌人的类型。（Warboars explode when killed dealing around 1,297,298~1,819,821 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Skelsplosion Chip",
     "Description": "骷髅在被杀死时会爆炸，造成1，297，298~1，819，821点的区域伤害，具体取决于敌人的类型。（Skeletons explode when killed dealing around 1,297,298~1,819,821 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Gobsplosion Chip",
     "Description": "哥布林在被杀死时会爆炸，造成1，297，298~1，819，821点的区域伤害，具体取决于敌人的类型。（Goblins explode when killed dealing around 1,297,298~1,819,821 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Minibossplosion Chip",
     "Description": "小型boss被杀时会爆炸，造成648，649~909，910点的区域伤害，具体取决于敌人的类型。（Minibosses explode when killed dealing around 648,649~909,910 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 5 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Aerial Strike Chip",
     "Description": "+84%～117% Arc Lightning（女法师1）对击飞的敌人造成伤害。（+84%~117% Arc Lightning damage to Knocked Up enemies.）",
     "Hero": "女法师",
     "Drop": "Floor 35+",
     "Type": "武器"
    },
    {
     "Name": "Exploding Volley Chip",
     "Description": "对被Arcane Volley和Arc Lightning(男法师和女法师的1)击中的敌人造成900，000~1，262，500的区域伤害。（+900,000~1,262,500 area damage to enemies hit by Arcane Volley and Arc Lightning.）",
     "Hero": "男法师, 女法师",
     "Drop": "Floor 35+",
     "Type": "武器"
    },
    {
     "Name": "Marknado Chip",
     "Description": "Tornado（男女法师的2）标记敌人。（Tornado marks enemies.）",
     "Hero": "男法师, 女法师",
     "Drop": "Reset, Every 10 Floors",
     "Type": "武器"
    },
    {
     "Name": "Prickly Shield Chip",
     "Description": "盾牌防御时（骑士按右键），+286.67%～416.67% 荆棘伤害（即反伤）。荆棘随着盔甲的增加而增加。（+286.67%~416.67% Thorns damage on Shield Blocking. Thorns increases with Armor.）",
     "Hero": "骑士",
     "Drop": "Floor 35+",
     "Type": "武器"
    },
    {
     "Name": "Seismic Launch Chip",
     "Description": "对Seismic Slam（骑士3）+3，738，600~5，244，425 点地伤害并击飞敌人。（+3,738,600~5,244,425 Earth damage to Seismic Slam and knocks enemies up.）",
     "Hero": "骑士",
     "Drop": "Reset, Every 10 Floors",
     "Type": "武器"
    },
    {
     "Name": "Oil Spill Chip",
     "Description": "Oil Flask（猎人2）留下一个油区（对进入该区域的敌人进行上油），持续16,83~21,67秒。（Oil Flask leaves an oil area for 16,83~21,67 seconds.）",
     "Hero": "猎人",
     "Drop": "Floor 35+",
     "Type": "武器"
    },
    {
     "Name": "Searing Flame Chip",
     "Description": "对受Piercing Shot（猎人3）影响的敌人每秒造成2，016，000~2，828，000 点火焰伤害。（+2,016,000~2,828,000 Fire damage per second on enemies affected by Piercing Shot.）",
     "Hero": "猎人",
     "Drop": "Reset, Every 10 Floors",
     "Type": "武器"
    },
    {
     "Name": "Tidal Wave Chip",
     "Description": "Heroic Wave（男和尚3）对附近敌人造成1，978，200~2，774，975点伤害。（Heroic Wave deals 1,978,200~2,774,975 damage to nearby enemies.）",
     "Hero": "男和尚",
     "Drop": "Floor 35+",
     "Type": "武器"
    },
    {
     "Name": "Stunning Wave Chip",
     "Description": "Heroic Wave（男和尚3）击晕敌人 x 秒。（Heroic Wave stuns enemies for x seconds.）",
     "Hero": "男和尚",
     "Drop": "Reset, Every 10 Floors",
     "Type": "武器"
    },
    {
     "Name": "Thundering Storm Chip",
     "Description": "Chi Stomp（女和尚1）+4.94~7.44秒击晕。（+4.94~7.44 second stun on Chi Stomp.）",
     "Hero": "女和尚",
     "Drop": "Floor 35+",
     "Type": "武器"
    },
    {
     "Name": "Stomp Strike Chip",
     "Description": "Chi Stomp（女和尚1）激活高度越高伤害越大。双跳时约+35%高度。（Chi Stomp deals greater damage the higher it's activated. Approx. +35% at double jump height.）",
     "Hero": "女和尚",
     "Drop": "Reset, Every 10 Floors",
     "Type": "武器"
    },
    {
     "Name": "Echoing Command Chip",
     "Description": "Direct Command（召唤3）对Skeletel Orcs, Ramsters, and Archers（召唤5，6，7）的持续时间+8~14秒。（+8~14 seconds to Direct Command duration on Skeletel Orcs, Ramsters, and Archers.）",
     "Hero": "召唤",
     "Drop": "Floor 35+",
     "Type": "武器"
    },
    {
     "Name": "Mana Command Chip",
     "Description": "Direct Command（召唤3）激活的防御塔每击杀一个敌人就 +17~28 绿钻石（+17~28 mana from kills by Direct Command empowered defenses.）",
     "Hero": "召唤",
     "Drop": "Reset, Every 10 Floors",
     "Type": "武器"
    },
    {
     "Name": "Buffer Chip",
     "Description": "站在buff beam节点（EV2的7）时每秒-8~14点过热。（-8~14 Heat per second while standing in Buff Beam nodes.）",
     "Hero": "EV2",
     "Drop": "Floor 35+",
     "Type": "武器"
    },
    {
     "Name": "Meltdown Chip",
     "Description": "过热时Proton Charge（EV2的3）伤害+29.56%。(Up to +29.56% Proton Charge Damage while Overheating.)",
     "Hero": "EV2",
     "Drop": "Reset, Every 10 Floors",
     "Type": "武器"
    },
    {
     "Name": "Frosty Shard Chip",
     "Description": "+27，370~38，380人物伤害每当Ice Needle（女枪3）杀死一个敌人，持续X秒。（+27,370~38,380 Hero Damage for x seconds on Ice Needle kills.）",
     "Hero": "女枪",
     "Drop": "Floor 35+",
     "Type": "武器"
    },
    {
     "Name": "Piercing Ice Chip",
     "Description": "Ice Needle（女枪3）可以穿盾造成 X% 伤害，最多可刺穿 Y 敌人。（Ice Needle pierces shields for X% damage and up to Y enemies.）",
     "Hero": "女枪",
     "Drop": "Reset, Every 10 Floors",
     "Type": "武器"
    },
    {
     "Name": "Toe Roaster Chip",
     "Description": "当使用Submerge（火男4）（且是在遁地状态）时+633，240~914，688对敌人造成火焰伤害。（+633,240~914,688 Fire damage to enemies while submerged.）",
     "Hero": "火男",
     "Drop": "Floor 35+",
     "Type": "武器"
    },
    {
     "Name": "Earthen Power Chip",
     "Description": "当使用Submerge（火男4）（且是在遁地状态）时每秒+X 力量到Molten Core（火男1）中。（+X Molten Power per second while submerged.）",
     "Hero": "火男",
     "Drop": "Reset, Every 10 Floors",
     "Type": "武器"
    },
    {
     "Name": "Exploding Lashes Chip",
     "Description": "被Lash Out（蛇女1）杀死的敌人造成2，373，240~3，229，970的毒爆伤害。（+2,373,240~3,229,970 Damage Poison Explosion on enemies killed by Lash Out.）",
     "Hero": "蛇女",
     "Drop": "Floor 35+",
     "Type": "武器"
    },
    {
     "Name": "Snake Zealot Chip",
     "Description": "Serpents Coils（蛇女4）可放置数量 +8~14（Can place +8~14 Serpents Coils.）",
     "Hero": "蛇女",
     "Drop": "Reset, Every 10 Floors",
     "Type": "武器"
    },
    {
     "Name": "Shroomite Chip",
     "Description": "Enemies slain by Poison Mushrooms spawn additional mushrooms that deal 124,560~174,730 damage per second.",
     "Hero": "树女",
     "Drop": "Floor 35+",
     "Type": "武器"
    },
    {
     "Name": "Spectral Chip",
     "Description": "+41~70 Celestial（树女资源）数量。（+41~70 Celestial Power.）",
     "Hero": "树女",
     "Drop": "Reset, Every 10 Floors",
     "Type": "武器"
    },
    {
     "Name": "Stance Dancer Chip",
     "Description": "每次换位（使用野蛮人右键技能）后+2，160~3，030人物伤害，持续5秒。最多可叠加3次。（+2,160~3,030 Hero Damage for 5 seconds each time you switch stances. Stacks up to 3 times.）",
     "Hero": "野蛮人",
     "Drop": "Reset, Every 10 Floors",
     "Type": "武器"
    },
    {
     "Name": "Last Stand Chip",
     "Description": "恢复50.5%~95%的血量代替死亡，每个战斗阶段一次。（Upon death, return to 50.5%~95% health. Once per combat phase.）",
     "Hero": "所有",
     "Drop": "Chaos 2 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Piercer Chip",
     "Description": "人物攻击可以穿透盾牌，造成40.5%~95%原本的伤害。（Hero projectiles pierce shields and do 40.5%~95% of their damage.）",
     "Hero": "所有",
     "Drop": "Chaos 3 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Mana Growth Chip",
     "Description": "不活动时每秒+21-33绿钻石。（+21-33 mana per second while inactive.）",
     "Hero": "男法师, 猎人, 男和尚, 骑士, 女法师, 女和尚",
     "Drop": "Chaos 2 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Mana Gain Chip",
     "Description": "不活动时每秒+8~14蓝钻石。（+8~14 ability resource per second while inactive.）",
     "Hero": "树女, 蛇女, 火男, 女枪",
     "Drop": "Chaos 2 - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Hurricane",
     "Description": "当移动速度超过1700时，你的主要攻击造成129，730~181，982点电伤害。（While moving above 1700 Speed, your Primary attacks deal 129,730~181,982 Storm damage.）",
     "Hero": "所有",
     "Drop": "High Seas (Pirate) Maps",
     "Type": "武器"
    },
    {
     "Name": "Knot Stopping",
     "Description": "当移动速度超过1700时，每2秒你将打湿敌人并造成X点水伤害。（While moving above 1700 Speed, you will drench and deal X Water damage every 2 seconds.）",
     "Hero": "所有",
     "Drop": "High Seas (Pirate) Maps",
     "Type": "武器"
    },
    {
     "Name": "Favorable Winds",
     "Description": "活动时1440%~2020%的移动速度会增加到人物伤害。玩家每击一次主要攻击杀死一个敌人，移动速度增加Y（最多10次）；静止时重置。（1440%~2020% of your active Movement Speed is added to your Hero Damage. Player grows faster by Y for each Primary attack kill (max 10 times); resets when stationary.）",
     "Hero": "所有",
     "Drop": "High Seas (Pirate) Maps",
     "Type": "武器"
    },
    {
     "Name": "Turn the Tides",
     "Description": "人物造成在过去5秒内349%~461%减少血量的区域伤害。（Hero deals 349%~461% of the health recovered over the past 5 seconds as Area damage.）",
     "Hero": "所有",
     "Drop": "High Seas (Pirate) Maps",
     "Type": "武器"
    },
    {
     "Name": "Walk the Plank",
     "Description": "主要武器近战攻击有X%几率产生一个木板，将敌人击飞。它们在撞击地面时会对造成y点水伤害，并被打湿。（Primary Weapon melee attacks have a X% to spawn a plank that will fling enemies upward. They deal Y Water Area damage and Drench enemies when crashing back to the ground.）",
     "Hero": "所有",
     "Drop": "High Seas (Pirate) Maps",
     "Type": "武器"
    },
    {
     "Name": "Grog-a-tov",
     "Description": "主要武器远程攻击有X%的几率扔出一个炸弹。接触时会爆炸造成Y点区域火伤害，迷惑敌人3秒。（Primary Weapon ranged attacks have a X% chance of spawning a bottle projectile. On contact it explodes dealing Y Fire Area damage, and confuses enemies for 3 seconds.)",
     "Hero": "所有",
     "Drop": "High Seas (Pirate) Maps",
     "Type": "武器"
    },
    {
     "Name": "Banjaxed",
     "Description": "主要攻击有25%-31%的几率使敌人打湿、上油、减速或中毒（每秒X点伤害），持续y秒。（Primary attacks have a 25%~31% chance to Drench, Oil, Chill, or Poison enemies (X Damage every second), for y seconds.）",
     "Hero": "所有",
     "Drop": "High Seas (Pirate) Maps",
     "Type": "武器"
    },
    {
     "Name": "Grave Infection",
     "Description": "Enemies killed have a  14.68%~18.64% chance of spawning a pirate skeleton that lasts for Y seconds. It poisons surrounding enemies dealing Z damage over 10 seconds.",
     "Hero": "所有",
     "Drop": "High Seas (Pirate) Maps",
     "Type": "武器"
    },
    {
     "Name": "To Arms",
     "Description": "Switching to this Hero will spawn a Pirate Flag that lasts Xs (once per Combat Phase). It increases the Defense Power of nearby defenses by Y%, their Attack Rate by Z%, and Heals them by W% each second.",
     "Hero": "所有",
     "Drop": "High Seas (Pirate) Maps",
     "Type": "武器"
    },
    {
     "Name": "Shackled",
     "Description": "暗黑刺客（C5特有怪物）在第一次攻击人物时有57.09%~78.18%的几率对暗黑刺客造成Y伤害并使其昏迷3秒。（Dark Assassins have a 57.09%~78.18% chance to be chained when striking the hero for the first time, dealing Y Damage and Stunning them for 3s.）",
     "Hero": "所有",
     "Drop": "High Seas (Pirate) Maps",
     "Type": "武器"
    },
    {
     "Name": "Terra Wisp",
     "Description": "发射一缕火焰（绿色的）造成人物伤害59.7%~80%的魔法伤害。它能穿透8~11个目标，每秒发射一次（当你攻击时）。（Fire a wisp that deals 59.7%~80% Hero Damage as Magical Damage. It pierces up to 8~11 targets and fires once per second.）",
     "Hero": "骑士, 树女, 野蛮人",
     "Drop": "C1 Chrome Enemies Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Lunar Caller",
     "Description": "次要攻击召唤Lunar Portals，每秒造成116%~215%人物AP的魔法伤害，持续18.65~33.5秒。上限4~9个入口。（Secondary Attacks summon Lunar Portals that deal 116%~215% Ability Power as magical damage per second for 18.65~33.5 seconds. Up to 4~9 portals.）",
     "Hero": "男法师, 女法师",
     "Drop": "C1 Griblock's Horde Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Pole Launcher",
     "Description": "次要攻击发射额外的北极，造成303%~390%人物伤害作为冰霜伤害，刺穿2个敌人并使其减速40%，持续8.1s~11s。（Secondary Attacks fire additional North Poles that deal 303%~390% Hero Damage as Frost Damage, pierce 2 enemies and slows them by 40% for 8.1s~11s.）",
     "Hero": "男和尚, 女和尚",
     "Drop": "C2 Wyvern Enthusiasts Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Chlorophyte Chip",
     "Description": "发射一列绿叶植物箭，造成34.4%-46%的额外魔法地伤害，可以反射一次。（Fires a column of Chlorophyte Arrows that deal 34.4%~46% bonus magical earth damage and may reflect off one surface.）",
     "Hero": "猎人",
     "Drop": "C2 Forest Poachers Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Bling Blast",
     "Description": "Charged Shots（猎人3）以65.5%~80%的人物伤害点燃敌人，每秒2次，持续8.83s~10.44s，范围为53~63基础范围，射程为2065~2500基础单位。（Charged Shots fire a stream burning enemies for 65.5%~80% Hero Damage twice per second for 8.83s~10.44s. The stream is 53-63 degrees wide and 2,065~2,500 units long.）",
     "Hero": "猎人",
     "Drop": "C3 Kobold Bling King Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Celebration!!!",
     "Description": "在一个小范围内发射两枚自动寻敌的炮弹，在一个小范围内造成72%人物伤害作为魔法伤害。（Fires two homing projectiles that detonate in a festive explosion dealing 72% Hero Damage as magical damage over a small area.）",
     "Hero": "EV2",
     "Drop": "C3 Dawn of the Blood Moon Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Volcanic Command",
     "Description": "次要攻击召唤流星，造成1415%~1850%人物AP的火伤害。次要攻击蓄力召唤熔岩裂缝的冲锋，在一条路径上造成413%~500%人物AP的火伤害，点燃敌人每秒造成121%~150%人物AP伤害，持续5秒。(Secondary Attack summons meteors that deal 1,415%~1,850% Ability Power as Fire Damage. Charge to summon a lava fissure dealing 413%~500% of Ability Power as fire damage in a path and burning for 121%~150% Ability Power per second for 5 seconds.)",
     "Hero": "召唤",
     "Drop": "C4 Spectral Assault Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Fist of Bones",
     "Description": "主要攻击发射一个穿盾骨头，造成人物伤害42.45%~55.5%的魔法伤害。骨头可以撞击10-13次并可以反弹。（Attacks fire piercing bones that deal 42.45%~55.5% Hero Damage as Magical Damage. Bones can hit for 10-13 times and reflect off surfaces.）",
     "Hero": "火男",
     "Drop": "C4 The Demon's Lair Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Shadowflame Knife",
     "Description": "次要攻击发射一把暗影火焰刀，对造成31%-67%人物伤害的魔法伤害。匕首反弹3-8次。（Secondary Attacks fire a Shadowflame Knife dealing 31%~67% Hero Damage as Magical Damage. Daggers bounce up to 3-8 times.）",
     "Hero": "蛇女",
     "Drop": "C5 Altar of the Athame Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Stormrider",
     "Description": "乘云并改变你的攻击为闪电，造成172%~230%人物AP的电伤害，持续15秒。云下的敌人被打湿，每2秒受到344%~460%人物AP的电伤害。（Ride a cloud that changes your attacks to lightning dealing 172%~230% Ability Power as Storm damage for 15s. Enemies under get drenched and are hit for 344%~460% of Ability Power as Storm damage every 2s.）",
     "Hero": "男和尚, 女和尚",
     "Drop": "C5 Power Surge Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Meteor Bullets",
     "Description": "快速发射一个流星子弹穿透一个额外的目标或反弹并造成50%的伤害。（Rapidly fires Meteor Bullets that pierce one additional target or reflect off one surface for 50% damage.）",
     "Hero": "女枪",
     "Drop": "C6 Malthius Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Jester Arrows",
     "Description": "发射一列杰斯特箭穿透5个目标。（Fires a column of Jester Arrows that pierce up to 5 targets.）",
     "Hero": "猎人",
     "Drop": "C6 Malthius Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Master of Cats",
     "Description": "主要攻击会发射一个穿盾Meowmere，造成106%~135%人物AP的魔法伤害并从反弹三次。每秒发射一次，爆炸造成106%~135%人物AP的魔法伤害。（Primary attacks fire a piercing Meowmere projectiles dealing 106%~135% Ability Power as Magical Damage and bounce off three surfaces. Projectiles fire once per second and explode dealing 106%~135% Ability Power as Magical Damage.）",
     "Hero": "骑士, 树女, 野蛮人",
     "Drop": "C6 Return of Maldonis Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Ghastly Halberds",
     "Description": "次要攻击召唤Ghastly Halberds，它的攻击造成263%~485%人物AP的伤害，每秒2次，持续15秒。你最多可以召唤5-9个。(Secondary attack summons Ghastly Halberds that attack for 263%~485% Ability Power as damage, twice per second, for 15 seconds. You can summon up to 5-9.)",
     "Hero": "男法师, 男法师",
     "Drop": "C7 Bastille Master Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Captain's Fury",
     "Description": "增加野蛮人人物伤害6，479~9，089，增加野蛮人范围人物伤害6480~9090。（Increases Barbarian's Hero Damage by 6,479~9,089 and increases Hero Damage in and AoE around the Barbarian by 6,480~9,090.）",
     "Hero": "野蛮人",
     "Drop": "C7 Dark Awakening Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Demonic Scythes",
     "Description": "次要攻击召唤恶魔镰刀，造成143.31%~192.9%人物AP的魔法伤害，最多穿透5个目标。次要攻击蓄力造成425.2%~518%人物AP的魔法伤害，最多穿透10个目标。（Secondary attacks summon Demon Scythes that deal 143.31%~192.9% Ability Power as Magical Damage and pierce up to 5 targets. Charged attacks deal 425.2%~518% Ability Power as Magical Damage and pierce up to 10 targets.）",
     "Hero": "召唤",
     "Drop": "C7 Revenge of the Yeti Incursion, Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Death From Above",
     "Description": "远程攻击击中飞行的敌人时产生炸弹，造成202.5%-275%人物AP的区域伤害。命中敌人时有68.8~92%触发几率。（Ranged attacks that hit flying enemies spawn bombs that deal 202.5%-275% Ability Power as Area Damage. 68.8~92% chance to trigger on hit.）",
     "Hero": "猎人",
     "Drop": "Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Betsy's Curse",
     "Description": "次要攻击留下一个诅咒区，减少敌人28.3~37%的伤害。最多放置3个区域，每个区域持续81~110秒。（Primary Attacks leave a curse zone, reducing enemy damage by 28.3~37%. Place up to 3 zones lasting 81~110 seconds each.）",
     "Hero": "男法师, 男法师",
     "Drop": "Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Betsy Blast",
     "Description": "主要攻击发射一个穿盾波（半月形），造成人物伤害60.75%~82.5%的魔法伤害。（Attacks fire a piercing projectile that deals 60.75%~82.5% Hero Damage as Magical Damage.）",
     "Hero": "骑士, 树女, 野蛮人",
     "Drop": "Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Sky Dragon's Fury",
     "Description": "次要攻击产生一个闪电球，造成45.5%~60%人物AP的电伤害，每秒2.5次伤害，持续5.05~6.5秒。每8秒发生一次。（Secondary attacks spawn a lightning ball dealing 45.5%~60% Ability Power as Storm Damage 2.5 times a second for 5.05-6.5 seconds. Occurs every 8 seconds.）",
     "Hero": "男和尚, 女和尚",
     "Drop": "Wayfarer",
     "Type": "武器"
    },
    {
     "Name": "Frostfire Remnants",
     "Description": "被杀死的敌人会爆炸造成 x 点范围冰霜和火焰伤害，并在地面留下一道冰霜火焰，每秒造成 y 点伤害，持续5秒。爆炸伤害等级与敌人类型有关。（Slain enemies explode for around x damage as Frost and Fire damage, and leave behind a trail of Frostfire on the ground that deals y damage per tick for 5 seconds. Explosion damage scales with enemy type.）",
     "Hero": "所有",
     "Drop": "Drakenfrost Keep",
     "Type": "武器"
    },
    {
     "Name": "Drakenlord's Soul",
     "Description": "获得德拉肯洛德（就是带冰罩的boss）的光环。光环使你周围的敌人减速x%。如果敌人在光环内停留5秒，他们将被冻结，并在5秒后受到额外X点地伤害。（Gain the aura of the Drakenlord. Aura slows enemies around you by x%. If the enemies stay within the aura for 5 seconds, they will become frozen and take x Earth Damage after an additional 5 seconds.）",
     "Hero": "所有",
     "Drop": "Drakenfrost Keep",
     "Type": "武器"
    },
    {
     "Name": "Torchbearer",
     "Description": "对玩家周围区域的敌人304，240~425，680造成火焰伤害。（+304,240~425,680 Fire Damage to enemies in an area around the player.）",
     "Hero": "所有",
     "Drop": "Drakenfrost Keep",
     "Type": "武器"
    },
    {
     "Name": "Frozen Path",
     "Description": "次要攻击击中地面会留下三片冰霜，使经过的敌人的移动速度降低51.96%~69.1%。每片持续5秒。（Projectile attacks that hit the ground leave up to three projectiles of frost that reduce enemy movement speed by 51.96%~69.1%. Each patch lasts 5 seconds.）",
     "Hero": "所有",
     "Drop": "Drakenfrost Keep",
     "Type": "武器"
    },
    {
     "Name": "Accumulator Servo",
     "Description": "造成在过去10秒内受到伤害253%~475%的区域伤害。（Deal Area Damage equal to 253%~475% damage taken in the past 10 seconds.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Piercer Servo",
     "Description": "防御塔攻击能穿透盾牌，造成40.5%~95%原本的伤害。（Defense projectiles pierce shields and do 40.5%~95% of their damage.）",
     "Hero": "所有",
     "Drop": "Chaos 3 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Protective Downgrade Servo",
     "Description": "防御塔不会被摧毁，而是降低一个升级等级并保留该等级51%-95%生命值。每个战斗阶段一次。（Instead of being destroyed, the defense will decrease one upgrade level at 51%~95% Health. Once per Combat Phase.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Refund Servo",
     "Description": "防御塔被摧毁时掉落40.5%~70%该防御塔建造花费的绿钻石。（Defense drops 40.5%~70% of its mana value when destroyed.）",
     "Hero": "所有",
     "Drop": "Chaos 3 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Tenacity Servo",
     "Description": "-40.5%～95% 负面状态持续时间。（-40.5%~95% duration of negative status effects.）",
     "Hero": "所有",
     "Drop": "Chaos 2 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Hardened Servo",
     "Description": "20%以下血量时减少24.72%~47.22%受到的伤害。(-24.72%~47.22% Damage Taken when under 20% Health.)",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Fortitude Servo",
     "Description": "+3，960~5，555防御塔基础生命值。（+3,960~5,555 Defense Health.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Power Servo",
     "Description": "+3，960~5，555防御塔力量。（+3,960~5,555 Defense Power.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Defense Range Servo",
     "Description": "+16.83%~28.33% 防御塔攻击范围（+16.83%~28.33% Defense Attack Range.）",
     "Hero": "所有",
     "Drop": "Chaos 6 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Defense Rate Servo",
     "Description": "防御塔攻击速度+24.88%～37.2%。（+24.88%~37.2% Defense Attack Rate.）",
     "Hero": "所有",
     "Drop": "Chaos 4 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Critical Servo",
     "Description": "+11.93%~23.44% 防御塔暴击几率（+11.93%~23.44% Defense Critical Chance.）",
     "Hero": "所有",
     "Drop": "Chaos 5 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Crit Damage Servo",
     "Description": "防御塔暴击伤害+20.78%~32.78%。（+20.78%~32.78% Critical Damage.）",
     "Hero": "所有",
     "Drop": "Chaos 5 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Damage Buff Servo",
     "Description": "+5,040-7,070 防御塔力量，当防御塔受到状态加成时。（+5,040~7,070 Defense Power while buffed.）",
     "Hero": "所有",
     "Drop": "Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Diverse Power Servo",
     "Description": "附近每有一种防御塔就 +2,736~3,838 防御塔力量。（+2,736~3,838 Defense Power for each unique Defense nearby.）",
     "Hero": "所有",
     "Drop": "Chaos 3 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Diverse Critical Servo",
     "Description": "附近每有一种防御塔就 +4.13~9.56% 防御塔暴击几率。（+4.13~9.56% Defense Critical Chance for each unique defense nearby.）",
     "Hero": "所有",
     "Drop": "Chaos 3 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Diverse CD Servo",
     "Description": "附近每有一种防御塔就 +8.1~14% 防御塔暴击伤害。（+8.1~14% Defense Critical Damage for each unique defense nearby.）",
     "Hero": "所有",
     "Drop": "Chaos 3 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Unique Power Servo",
     "Description": "+12,960~18,360 防御塔力量如果它在地图中只被造出了一个。（+12,960~18,360 Defense Power if only one is built.）",
     "Hero": "所有",
     "Drop": "Chaos 2 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Unique Critical Servo",
     "Description": "+16.19%~28.44% 防御塔暴击几率如果它在地图中只被造出了一个。（+16.19%~28.44% Defense Critical Chance if only one is built.）",
     "Hero": "所有",
     "Drop": "? - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Unique CD Servo",
     "Description": "如果整个地图中该防御塔只建造了一个，则防御塔暴击伤害+25.78%~37.78%。（+25.78%~37.78% Defense Critical Damage if only one is built.）",
     "Hero": "所有",
     "Drop": "? - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Fire Servo",
     "Description": "使一座非元素塔攻击属性转为火属性，并增加2，520~3，535点防御塔力量。（Attunes a non-elemental Tower to Fire and increases Defense Power by 2,520~3,535.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Storm Servo",
     "Description": "使一座非元素塔攻击属性转为电属性，并增加2，520~3，535点防御塔力量。（Attunes a non-elemental Tower to Storm and increases Defense Power by 2,520~3,535.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Earth Servo",
     "Description": "使一座非元素塔攻击属性转为地属性，并增加2，520~3，535点防御塔力量。（Attunes a non-elemental Tower to Earth and increases Defense Power by 2,520~3,535.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Water Servo",
     "Description": "使一座非元素塔攻击属性转为水属性，并增加2，520~3，535点防御塔力量。（Attunes a non-elemental Tower to Water and increases Defense Power by 2,520~3,535.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Anti-Melee Servo",
     "Description": "对近战类型的敌人伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Melee enemies.）",
     "Hero": "所有",
     "Drop": "Chaos 3 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Anti-Ranged Servo",
     "Description": "对远程类型的敌人伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Ranged enemies.）",
     "Hero": "所有",
     "Drop": "Chaos 4 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Anti-Support Servo",
     "Description": "对辅助类型的敌人伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Support enemies.）",
     "Hero": "所有",
     "Drop": "Chaos 3 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Anti-Chaos Servo",
     "Description": "对混乱类型的敌人（即C1~C7特有怪物）伤害+32.39%~56.11%。（+32.39%~56.11%.32% Damage to Chaos enemies.）",
     "Hero": "所有",
     "Drop": "Chaos 6 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Anti-Frost Servo",
     "Description": "对冰族伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Frosty enemies.）",
     "Hero": "所有",
     "Drop": "Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Anti-Orc Servo",
     "Description": "对兽人伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Orcs.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Anti-Warboar Servo",
     "Description": "对野猪伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Warboars.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Anti-Skeleton Servo",
     "Description": "对骷髅伤害+32.39%~56.11%。（+32.39%~56.11% Damage to Skeletons.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Anti-Goblin Servo",
     "Description": "对哥布林伤害+32.39%~56.11%（+32.39%~56.11% Damage to Goblins.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Anti-Miniboss Servo",
     "Description": "对小型boss伤害+32.39%~56.11%（+32.39%~56.11% Damage to Minibosses.）",
     "Hero": "所有",
     "Drop": "Chaos 5 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Controller Servo",
     "Description": "对被控制的敌人伤害+32.39%~56.11%。（+32.39%~56.11% Damage to crowd controlled enemies.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Melee-Boom Servo",
     "Description": "近战类型的敌人被杀死时会爆炸，造成648，649~909，910点的区域伤害，具体取决于敌人类型。（Melee enemies explode when killed dealing around 648,649~909,910 as area damage,depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 3 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Range-Boom Servo",
     "Description": "远程类型的敌人被杀死时会爆炸，造成648，649~909，910点的区域伤害，具体取决于敌人类型。（Ranged enemies explode when killed dealing around 648,649~909,910 as area damage,depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 3 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Support-Boom Servo",
     "Description": "辅助类型的敌人被杀死时会爆炸，造成648，649~909，910点的区域伤害，具体取决于敌人类型。（Support enemies explode when killed dealing around 1,297,298~1,819,821 as area damage,depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 2 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Chaos-Boom Servo",
     "Description": "混乱类型的敌人（即C1~C7特有怪物）被杀死时会爆炸，造成648，649~909，910点的区域伤害，具体取决于敌人类型。（Chaos enemies explode when killed dealing around 648,649~909,910 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 6 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Frosty-Boom Servo",
     "Description": "冰族在被杀死时会爆炸，造成1，297，298~1，819，821点的区域伤害，具体取决于敌人的类型。（Frosty enemies explode when killed dealing around 1,297,298~1,819,821 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Orc-Boom Servo",
     "Description": "兽人在被杀死时会爆炸，造成1，297，298~1，819，821点的区域伤害，具体取决于敌人的类型。（Orcs explode when killed dealing around 1,297,298~1,819,821 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Boar-Boom Servo",
     "Description": "野猪在被杀死时会爆炸，造成1，297，298~1，819，821点的区域伤害，具体取决于敌人的类型。（Warboars explode when killed dealing around 1,297,298~1,819,821 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Skele-Boom Servo",
     "Description": "骷髅在被杀死时会爆炸，造成1，297，298~1，819，821点的区域伤害，具体取决于敌人的类型。（Skeletons explode when killed dealing around 1,297,298~1,819,821 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 1 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Gobu-Boom Servo",
     "Description": "哥布林在被杀死时会爆炸，造成1，297，298~1，819，821点的区域伤害，具体取决于敌人的类型。（Goblins explode when killed dealing around 1,297,298~1,819,821 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Miniboss-Boom Servo",
     "Description": "小型boss被杀时会爆炸，造成648，649~909，910点的区域伤害，具体取决于敌人的类型。（Minibosses explode when killed dealing around 648,649~909,910 as area damage, depending on enemy type.）",
     "Hero": "所有",
     "Drop": "Chaos 5 - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Shatterquake",
     "Description": "被Earthshatter（法师8）击中时+284，400~517，450范围地伤害，持续9秒。（+284,400~517,450 Area Earth damage for 9 seconds when hit by Earthshatter.）",
     "Hero": "男法师, 女法师",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Burning Bolts",
     "Description": "被Ballista（骑士7）击中时在9秒内造成201，600~366，800点火焰伤害。（+201,600~366,800 Fire Damage over 9 seconds when hit by Ballista.）",
     "Hero": "骑士",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Proactive Traps",
     "Description": "Explosive Traps（猎人5）每爆炸一次+144~202 防御塔力量，上限100层（+144~202 Defense Power per detonation of Explosive Traps. Up to 100 times.）",
     "Hero": "猎人",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Drain Aura",
     "Description": "Boost Aure（和尚6）对敌人造成28，080~39，390点伤害。（Boost Aura damages enemies for 28,080~39,390.）",
     "Hero": "男和尚, 女和尚",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Lingering Hellfire",
     "Description": "被Skeletal Ramster（召唤6）击中时+68，200~144，100火焰伤害，持续9秒。（+68,200~144100 Fire Damage for 9 seconds when hit by Skeletal Ramster.）",
     "Hero": "召唤",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Shocking Revelation",
     "Description": "+39,240~76,845点电伤害，被Weapon Manufacturer（EV2的8）命中时，有16.83%~33.33%几率眩晕敌人1秒。（+39,240~76,845 Storm Damage and 16.83%~33.33% chance to stun enemies for 1 second when hit by Weapon Manufacturer.）",
     "Hero": "EV2",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Embermount Flames",
     "Description": "被Fissure（火男5）击中时，点火持续时间+50.5~75秒。（+50.5~75 second ignite duration when hit by Fissure.）",
     "Hero": "火男",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Fiery Fangs",
     "Description": "被Sand Viper（蛇女6）击中时在9秒内造成 395，640~719，845 火焰伤害（+395,640~719,845 Fire Damage over 9 seconds when hit by Sand Viper.）",
     "Hero": "蛇女",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Fireblossom Blessing",
     "Description": "被Harpies（树女6）击中时在9秒内造成 395，640~719，845 火焰伤害。（+395,640~719,845 Fire Damage over 9 seconds when hit by Harpies.）",
     "Hero": "树女",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    },
    {
     "Name": "Poison Chip",
     "Description": "+12,600~17,675 毒伤害，对敌人造成 x% 的人物伤害，持续 y 秒。（+12,600~17,675 Poison Damage, causing enemies to take x% of hero damage as Poison Damage over y seconds.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "武器"
    },
    {
     "Name": "Poison Servo",
     "Description": "使一个非元素塔攻击属性转换成毒属性，使击中目标在 X 秒内每秒造成5%的防御塔力量伤害，并增加 Y 点防御塔力量。（Attunes a non-elemental Tower to Poison, causing targets to take 5% Defense Power per second for x seconds and increases Defense Power by y.）",
     "Hero": "所有",
     "Drop": "Campaign - Chaos 7",
     "Type": "勋章"
    }
   ]
export default modslist