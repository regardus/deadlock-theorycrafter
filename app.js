const heroSelect = document.querySelector("#hero");
const itemsBox = document.querySelector("#items");
const itemSelects = []
const STAT_DISPLAY = {
  // Vitality
  hp:           { label: "Health" },
  hpRegen:      { label: "Health Regen", unit: "/s" },
  bulletResist: { label: "Bullet Resist", pct: true },
  spiritResist: { label: "Spirit Resist", pct: true },
  // Weapon
  bulletDmg:    { label: "Bullet Damage" },
  bulletPerSec: { label: "Bullets / sec" },
  ammo:         { label: "Ammo" },
  weaponPct:    { label: "Weapon Damage Bonus", pct: true },
  lightMelee:   { label: "Light Melee" },
  heavyMelee:   { label: "Heavy Melee" },
  // Spirit
  spirit:       { label: "Spirit Power" },
  // Movement
  moveSpeed:    { label: "Move Speed", unit: " m/s" },
  sprintSpeed:  { label: "Sprint Speed", unit: " m/s" },
  dashSpeed:    { label: "Dash Speed", unit: " m/s" },
  // Progress
  boons:        { label: "Boons" },
  souls:        { label: "Souls" },
};
const INVEST_SHOPS = [
  { cat: "Weapon",   table: WEAPON_SHOP_INVEST_BONUS,   pct: true,  label: "Weapon Damage" },
  { cat: "Spirit",   table: SPIRIT_SHOP_INVEST_BONUS,   pct: false, label: "Spirit Power" },
  { cat: "Vitality", table: VITALITY_SHOP_INVEST_BONUS, pct: true,  label: "Base Health" },
];

for (const key in roster) {
  heroSelect.add(new Option(roster[key].name, key));
}
const sortedItemKeys = Object.keys(SHOP_ITEMS).sort((a, b) => SHOP_ITEMS[a].name.localeCompare(SHOP_ITEMS[b].name));
for (let i = 0; i < 12; i++) {
    const sel = document.createElement("select");
    sel.add(new Option("- Select item -", ""));
    sel.addEventListener("change", update);
    for (const cat of ITEM_CATEGORIES) {
        for (const tier of ITEM_TIERS) {
            const group = document.createElement("optgroup");
            group.label = cat + "-" + tier;
            const colors = ITEM_COLORS[cat][tier];
            for (const key of sortedItemKeys.filter(k => SHOP_ITEMS[k].category === cat && SHOP_ITEMS[k].cost === tier)) {
                const opt = new Option(SHOP_ITEMS[key].name, key);
                opt.title = SHOP_ITEMS[key].passiveEffect ?? "";
                opt.style.backgroundColor = colors.bg;
                opt.style.color = colors.text;
                group.appendChild(opt);
            }
            sel.appendChild(group);
        }
    }
    itemsBox.appendChild(sel);          
    itemSelects.push(sel);
}                                        

const shopBox = document.querySelector("#shop");   

for (const cat of ITEM_CATEGORIES) {
    for (const tier of ITEM_TIERS) {
        const heading = document.createElement("h3");
        heading.textContent = cat + " - " + tier;
        shopBox.appendChild(heading);

        const row = document.createElement("div");
        row.className = "shop-row";
        const colors = ITEM_COLORS[cat][tier];

        for (const key of sortedItemKeys.filter(k => SHOP_ITEMS[k].category === cat && SHOP_ITEMS[k].cost === tier)) {
            const img = document.createElement("img");
            img.src = ITEM_IMAGE_ROOT + ITEM_IMAGES[key];
            img.title = SHOP_ITEMS[key].name;
            img.className = "shop-tile";
            img.style.backgroundColor = colors.bg;
            img.addEventListener("click", () => addItem(key));
            row.appendChild(img);
        }
        shopBox.appendChild(row);
    }
}
const abilitiesBox = document.querySelector("#abilities");
const abilityUI = [];

for (let slot = 0; slot < 4; slot++) {
  const box = document.createElement("div");
  box.className = "ability";
  box.innerHTML = `
    <h3 class="ab-name"></h3>
    <select class="ab-tier"></select>
    <p class="ab-desc"></p>
    <div class="ab-stats"></div>
    <ul class="ab-upgrades"></ul>`;

  const tier = box.querySelector(".ab-tier");
  AP_TIER_OPTIONS.forEach((label, i) => tier.add(new Option(label, i)));
  tier.addEventListener("change", update);

  abilitiesBox.appendChild(box);
  abilityUI.push({
    name:     box.querySelector(".ab-name"),
    tier:     tier,
    desc:     box.querySelector(".ab-desc"),
    stats:    box.querySelector(".ab-stats"),
    upgrades: box.querySelector(".ab-upgrades"),
  });
}
function addItem(key) {
  const slot = itemSelects.find(sel => sel.value === "");    
  if (!slot) return;                             
  slot.value = key;                              
  update();                                      
}
function formatStat(key, value) {
  const d = STAT_DISPLAY[key];
  const n = d.pct ? round2(value * 100) + "%" : round2(value);
  return n + (d.unit ?? "");
}
function colorSelect(sel){
    const key = sel.value;
    const item = SHOP_ITEMS[key];
    const stats = item ? Object.keys(item)
    .filter(k => k.startsWith("bonus") && item[k] !== 0)
    .map(k => {
      const label = STAT_LABELS[k] ?? " " + k;
      const v = label.startsWith("%") ? round2(item[k] * 100) : item[k]                             
      return "+" + v + label;
    })
    .join("\n") : "";

  sel.title = [item?.passiveEffect, stats].filter(Boolean).join("\n\n");
    const colors = item ? ITEM_COLORS[item.category]?.[item.cost] : null;
    if (colors) {
        sel.style.backgroundColor = colors.bg;
        sel.style.color = colors.text;
    } else {
        sel.style.backgroundColor = "";
        sel.style.color = "";
    }    
}
function update() {
    const hero = roster[heroSelect.value];  
    if (!hero) return;     
    const build = itemSelects
        .map(sel => sel.value) 
        .filter(v => v !== "")  
    itemSelects.forEach(colorSelect);                    
    const base = buildStats(hero, []);
    const cur  = buildStats(hero, build);
    const rows = Object.keys(STAT_DISPLAY).map(k =>
        `<tr><td>${STAT_DISPLAY[k].label}</td><td>${formatStat(k, base[k])}</td><td>${formatStat(k, cur[k])}</td><td>${formatStat(k, cur[k] - base[k])}</td></tr>`
    );
    const b = buildBonuses(build);
    const investRows = INVEST_SHOPS.map(shop => {
    const souls = b.categorySouls[shop.cat];
    const bonus =  findShopInvestmentBonus(souls,shop.table);
    const fmt = v => shop.pct ? round2(v * 100) + "%" : "+" + v;
    const shown = fmt(bonus);

    const i = SOUL_SHOP_INVEST_THRESHOLD.findIndex(t => t > souls);
    const next = i === -1 ? "Maxed" : `${SOUL_SHOP_INVEST_THRESHOLD[i] - souls} more → ${fmt(shop.table[i])}`;
        return `<tr><td>${shop.cat}</td><td>${souls}</td><td>${shown} ${shop.label}</td><td>${next}</td></tr>`;
    });
        document.querySelector("#stats").innerHTML =
        "<tr><th>Stat</th><th>Base</th><th>Build</th><th>Change</th></tr>" + rows.join("");
        document.querySelector("#invest").innerHTML = 
        "<tr><th>Shop</th><th>Souls</th><th>Bonus</th><th>Next</th></tr>" + investRows.join("") +
        `<tr><th>Total</th><th>${b.cost}</th><th></th><th></th></tr>`;
    const heroKey = heroSelect.value;
    const kit = HERO_ABILITIES[heroKey] ?? {};
    const abilityKeys = Object.keys(kit);

    abilityUI.forEach((ui, slot) => {
        const abilityKey = abilityKeys[slot];
        if (!abilityKey) {                       
            ui.name.textContent = "No ability data";
            ui.desc.textContent = "";
            ui.stats.innerHTML = "";
            return;
        }

        const ability = kit[abilityKey];
        const tiers = Number(ui.tier.value);
        const r = abilityResult(ability, tiers, cur.spirit, b, cur.weaponPct);

        ui.name.textContent = ability.name
        ui.desc.textContent = HERO_ABILITY_DESCRIPTIONS[heroKey]?.[abilityKey] ?? "";

        const all = { ...abilityAt(ability, tiers), ...r };
        ui.stats.innerHTML =  Object.keys(all)
            .filter(k => typeof all[k] === "number" && all[k] !== 0)
            .map(k => k + ": " + round2(all[k]))
            .join("<br>");
    });
}
//---- Tabs ----
const tabs = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tabPanels.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    document.querySelector("#" + tab.dataset.target).classList.add("active");

}));
heroSelect.addEventListener("change", update);
update();


