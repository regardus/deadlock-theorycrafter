//---Constants---
const SOUL_SHOP_INVEST_THRESHOLD = [800, 1600, 2400, 3200, 4800, 6400, 8000, 11200, 16000, 22400, 28800];
const WEAPON_SHOP_INVEST_BONUS = [0.09, 0.12, 0.15, 0.18, 0.46, 0.54, 0.62, 0.74, 0.86, 1, 1.15]; //Percent based
const VITALITY_SHOP_INVEST_BONUS = [0.09, 0.12, 0.15, 0.20, 0.38, 0.42, 0.46, 0.50, 0.54, 0.60, 0.66]; //Percent based
const SPIRIT_SHOP_INVEST_BONUS = [7, 11, 15, 19, 38, 45, 52, 59, 66, 75, 100]; //Flat Amount
const ITEM_TIERS = [800, 1600, 3200, 6400];
const ITEM_CATEGORIES = ["Weapon", "Spirit", "Vitality"];
const ITEM_TYPES = ["Basic", "Imbue", "Active"];
const PERCENT_BASED_BONUSES = [
	"bonusAmmoPercent", 
	"bonusWeaponDamage", 
	"bonusVelocity", 
	"bonusFalloffRange", 
	"bonusFireRate", 
	"bonusMeleeDamage", 
	"bonusMeleeDistance",
	"bonusSlideDistance",
	"bonusSpiritPowerPercent", 
	"bonusDamageAmp", 
	"bonusStaminaRecovery", 
	"bonusChargeRecharge",
	"bonusBaseHealth"
];
const FLAT_BONUSES = [
	"bonusAmmo", 
	"bonusDamageBarrier", 
	"bonusMaxHealth", 
	"bonusHealthRegen", 
	"bonusMovementSpeed", 
	"bonusSprintSpeed", 
	"bonusStamina", 
	"bonusSpiritPower", 
	"bonusOutOfCombatRegen", 
	"bonusAbilityCharges", 
	"bonusSpiritPowerForCharges"
];
const MULTIPLIED_BONUSES = [
	"bonusWeaponResistance", 
	"bonusSpiritResistance", 
	"bonusMeleeResist", 
	"bonusDebuffResistance", 
	"bonusWeaponLifeSteal", // Tested in sandbox
	"bonusSpiritLifeSteal", // Tested in sandbox
	"bonusGravityScale", 
	"bonusAbilityCooldown", 
	"damageReduction", 
	"bonusItemCooldown", // Tested in sandbox
	"bonusChargedCooldown", // Tested in sandbox
	"bonusReloadSpeed",
	"bonusAbilityRange", // Tested in sandbox
	"bonusAbilityDuration"// Tested in sandbox
];
const BOON_THRESHOLD = [
	800, 1100, 1500, 2000, 2600, 3200, 3800, 4500, 5200, 5900, 
	6600, 7400, 8200, 9000, 9800, 10700, 11600, 12500, 13400, 14400, 
	15500, 16700, 18000, 19500, 21200, 23100, 25200, 27500, 30000, 32700, 
	35600, 38700, 42000, 45500, 49200
];
const AP_THRESHOLD = [800, 1500, 2600, 3200, 4500, 5200, 5900, 
	6600, 7400, 8200, 9000, 9800, 10700, 11600, 12500, 13400, 14400, 
	15500, 16700, 18000, 19500, 21200, 23100, 25200, 27500, 30000, 32700, 
	35600, 38700, 42000, 45500, 49200];
const ABILITY_UNLOCK_THRESHOLD = [600, 1100, 2000, 3800];
const AP_TIER_OPTIONS = ["Base", "L1", "L2", "L3"];
const STAT_LABELS = {
  // flat
  bonusAmmo: " Ammo",
  bonusMaxHealth: " Health",
  bonusHealthRegen: " Health Regen",
  bonusOutOfCombatRegen: " Out of Combat Regen",
  bonusDamageBarrier: " Barrier",
  bonusSpiritPower: " Spirit Power",
  bonusSpiritPowerForCharges: " Spirit Power (charged abilities)",
  bonusAbilityCharges: " Ability Charge",
  bonusStamina: " Stamina",
  bonusMovementSpeed: " m/s Move Speed",
  bonusSprintSpeed: " m/s Sprint Speed",
  bonusSpiritDamage: " Spirit Damage",
  // percent
  bonusWeaponDamage: "% Weapon Damage",
  bonusFireRate: "% Fire Rate",
  bonusAmmoPercent: "% Ammo",
  bonusVelocity: "% Bullet Velocity",
  bonusFalloffRange: "% Falloff Range",
  bonusReloadSpeed: "% Reload Speed",
  bonusMeleeDamage: "% Melee Damage",
  bonusMeleeDistance: "% Melee Distance",
  bonusMeleeResist: "% Melee Resist",
  bonusWeaponResistance: "% Bullet Resist",
  bonusSpiritResistance: "% Spirit Resist",
  bonusDebuffResistance: "% Debuff Resist",
  bonusWeaponLifeSteal: "% Bullet Lifesteal",
  bonusSpiritLifeSteal: "% Spirit Lifesteal",
  bonusBaseHealth: "% Base Health",
  bonusHealing: "% Healing",
  bonusSlideDistance: "% Slide Distance",
  bonusStaminaRecovery: "% Stamina Recovery",
  bonusAbilityCooldown: "% Cooldown Reduction",
  bonusAbilityDuration: "% Ability Duration",
  bonusAbilityRange: "% Ability Range",
  bonusSpiritPowerPercent: "% Spirit Power",
  bonusItemCooldown: "% Item Cooldown Reduction",
  bonusChargeRecharge: "% Charge Recharge",
  bonusChargedCooldown: "% Charged Cooldown Reduction",

  bonusDamageAmp: "% Damage Amp",
};
const ITEM_COLORS = {
Spirit: {
  800:  { text: "#11140E", bg: "#DECDEB" },  
  1600: { text: "#11140E", bg: "#9E96BE" },  
  3200: { text: "#11140E", bg: "#807BA6" },  
  6400: { text: "#E3D4F2", bg: "#413A3B" },  
},
  Weapon: {
  800:  { text: "#11140E", bg: "#DFC38B" },  
  1600: { text: "#11140E", bg: "#B89560" },  
  3200: { text: "#000000", bg: "#A07142" },  
  6400: { text: "#E4C6A2", bg: "#3A332C" },  
},
Vitality: {
  800:  { text: "#11140E", bg: "#D7DD99" },  
  1600: { text: "#11140E", bg: "#A5B07A" },  
  3200: { text: "#11140E", bg: "#899464" },  
  6400: { text: "#C3E7CD", bg: "#3B3A2D" },  
},

};
// ===== HELPERS =====
function countPassed(value, thresholds) {
  return thresholds.filter(t => value >= t).length;
}
function soulsToBoons(souls) {
	return countPassed(souls, BOON_THRESHOLD);
}
function soulsToAP(souls) {
	return countPassed(souls, AP_THRESHOLD);
}
function round2(num) {
	return Math.round(num * 100) / 100;
}
function findShopInvestmentBonus(souls, bonusTable) {
	const passed = countPassed(souls, SOUL_SHOP_INVEST_THRESHOLD);
	if (passed === 0) return 0;
	return bonusTable[passed - 1];
}
function stackPercents(a, b){
	const result = 1 - (1 - a) * (1 - b);
	return result;
}
function halfWpnBonusForMelee(weaponBonus){
	return weaponBonus / 2;
	
}
function boostMultiplier(percent) {
	return 1 + percent
}
function itemKeyFromName(name) {
  return Object.keys(SHOP_ITEMS).find(key => SHOP_ITEMS[key].name === name);
}
function heroKeyFromName(name) {
  return Object.keys(roster).find(key => roster[key].name === name);
}
// ===== ABILITY MATH =====
function abilityAt(ability, tiers) {
  const a = { ...ability };
  for (let i = 0; i < tiers; i++) {
    const upgrade = ability.upgrades[i];
    for (const field in upgrade) {
      if (field === "weaponScaling") {
        a.weaponScaling = { ...a.weaponScaling };                 
        for (const f in upgrade.weaponScaling) {
          a.weaponScaling[f] = (a.weaponScaling[f] ?? 0) + upgrade.weaponScaling[f];
        }
      } else {
        a[field] += upgrade[field];
      }
    }
  }
  return a;
}

function abilityResult(ability, tiers, spirit, b, weaponPct) {
  const a = abilityAt(ability, tiers);
  const result = { name: a.name };

  // 1. spirit scaling
  if (a.spiritScaling !== undefined){
	result.damage = a.damage + spirit * a.spiritScaling;
  }
  for (const field in a) { 
    if (field.endsWith("Scale")) {
      const baseField = field.slice(0, -5);
      result[baseField] = a[baseField] + spirit * a[field];
    }
  }
  // 1b. weapon scaling
  for (const field in a.weaponScaling ?? {}) {
    result[field] = (result[field] ?? a[field]) + a.weaponScaling[field] * weaponPct * 100; // game defines weapon scaling per percentage point
  }
  // 2. effectiveness, applied to the already-scaled values
  const effectiveness = (a.effectiveness ?? 1);
  for (const field of a.effectivenessApplies ?? []) {
    result[field] = (result[field] ?? a[field]) * effectiveness;
  }

  // 3. cooldown
  result.cooldown = a.cooldown * (1 - b.bonusAbilityCooldown);
  return result;
}
//---Classes---
class Hero {
    constructor(stats={}){
        Object.assign(this, Hero.DEFAULTS, stats);

    }
statsAt(boons, bonusSpirit = 0) {
  const spirit = this.spiritPower + boons * this.boonSpiritScaling + bonusSpirit;
  const bulletDmg = this.baseBulletDamage + (boons * this.boonWpnScaling) + (spirit * this.spiritBulletDamageScaling);
  const ammo = this.ammo + (spirit * this.spiritAmmoScaling);
  const moveSpeed = this.moveSpeed + (spirit * this.spiritMoveSpeedScaling);
  const sprintSpeed = this.sprintSpeed + (spirit * this.spiritSprintSpeedScaling);
  const dashSpeed = this.dashSpeed;
  const heavyMelee = this.meleeDamageHeavy + (boons * this.boonHeavyMeleeScaling) + (spirit * this.spiritHeavyMeleeScaling);
  const lightMelee = this.meleeDamageLight + (boons * this.boonLightMeleeScaling);
  const bulletResist = this.bulletResistance + (boons * this.boonBulletResistScaling) + (spirit * this.spiritBulletResistScaling);
  const spiritResist = this.spiritResistance + (boons * this.boonSpiritResistScaling) + (spirit * this.spiritSpiritResistScaling);
  const hp = this.HP + (boons * this.boonHPScaling);
  const hpRegen = this.hpRegen + (spirit * this.spiritHPRegenScaling);
  const bulletPerSec = this.bulletsPerSecond + (spirit * this.spiritBulletsPerSecScaling);

  return { boons, bulletDmg, ammo, moveSpeed, sprintSpeed, dashSpeed, heavyMelee, lightMelee,
           bulletResist, spiritResist, spirit, hp, hpRegen, bulletPerSec };
	}
};

Hero.DEFAULTS = {
    name: "", 
//---Weapon Stats---
    baseBulletDamage: 0, //Base damage of a single bullet fired by the hero's weapon without any items
    bulletsPerSecond:0, //Number of bullets fired per second by the hero's weapon
    pelletCount:1, //Number of pellets fired by the hero's weapon
    ammo:0, //Number of bullets in the hero's magazine
    bulletVelocity:0, //Travel speed of the hero's bullets
    bulletRadius:0, //Radius of hero's weapon bullet
    falloffRange:0, //Distance at which the hero's weapon damage starts to fall off
    fireRate:0, //Number of bullets fired per second by the hero's weapon
    meleeDamageLight:0, //Damage dealt by the hero's light melee attack
    meleeDamageHeavy:0, //Damage dealt by the hero's heavy melee attack
    reloadTime:0, //number of seconds it takes for the hero's weapon to reload
    weaponDamage:0, //Effects the damage of the hero's bullets, melee attacks, and weapon based abilities
    critReduction:0, //Reduces the amount of damage critical damage does (Rem)
//---Vitality Stats---
    HP:0, //The hero's health points
    hpRegen:0, //The hero's health regeneration rate
    healingBoost:0, //The hero's healing output multiplier
    lifestealEffectiveness:1, //The effectiveness of lifesteal. Default is 1 (Ratking 0.75 less effective)
    bulletLifesteal:0, //How much the hero heals from bullet damage
    spiritLifesteal:0, //How much the hero heals from spirit damage
    meleeLifesteal:0, //How much the hero heals from melee damage
    hpLifesteal:0, // How much direct life is stolen (siphon bullets)
    bulletResistance:0, //The hero's resistance to bullet damage
    meleeResistance:0, //The hero's resistance to melee damage
    spiritResistance:0, //The hero's resistance to spirit damage
    debuffResistance:0, //The hero's resistance to debuffs
    bulletEvasion:0, //The hero's chance to evade bullet damage
    bulletReflection:0, //The hero's chance to reflect bullet damage back at the attacker
    moveSpeed:0, //The hero's movement speed
    sprintSpeed:0, //The hero's sprint speed, added to the hero's base movement speed when sprinting
    slideDistance:0, //The multiplier to the hero's slide distance
    stamina:0, //How many dashes a hero can perform before needing to recharge
    staminaCooldown:0, //How long it takes for the hero's stamina to recharge after being used
    dashSpeed:0, //The hero's dash speed, added to the hero's base movement speed when dashing
//---Spirit Stats---
    spiritPower:0, //The multiplier to the hero's spirit damage
    abilityCooldown:0, //How long an ability takes to recharge before it can be used again
    abilityDuration:0, //How long an ability lasts before it ends
    abilityRange:0, //How far an ability can reach before it ends
    abilityCastRange:0, //How far away an ability can reach while cast
    abilityCastTime:0, //How long it takes to cast an ability before it is activated
    abilityCharge:0, //Charges that allow a hero to use an ability multiple times before it needs to recharge
    pctSpiritPower:0, //An additional percent of base spirit power added
//---Scaling---
    boons:0, //The number of boons the hero has unlocked
    boonWpnScaling:0, //The multiplier to the hero's base bullet damage from boons
    boonLightMeleeScaling:0, //The multiplier to the hero's light melee damage from boons
    boonHeavyMeleeScaling:0, //The multiplier to the hero's heavy melee damage from boons
    boonSpiritScaling:0, //The flat amount added to the hero's base spirit power from boons
    boonHPScaling:0, //The multiplier to the hero's base HP from boons
    boonItemScaling:0, //The multiplier used for items that scale with the hero's boons
    wpnScaling:0, //The multiplier to the hero's bullet damage, melee damage, and weapon based abilities or items
    spiritScaling:0, //The multiplier to the hero's spirit damage and spirit based abilities or items
//---Misc Scaling --- 
    spiritSpiritResistScaling:0, //The multiplier to the hero's spirit resistance from spirit power (Baba, Venator)
    spiritBulletResistScaling:0, //The multiplier to the hero's bullet resistance from spirit power (Venator)
    spiritBulletDamageScaling:0, //The multiplier to the hero's bullet damage from spirit power (Grey Talon)
    spiritMoveSpeedScaling:0, //The multiplier to the hero's move speed from spirit power (Grey Talon)
    spiritSprintSpeedScaling:0, //The multiplier to the hero's sprint speed from spirit power (Wraith)
    spiritAmmoScaling:0, //The multiplier to the hero's ammo count from spirit power (Haze, Yamato)
    spiritHeavyMeleeScaling:0, //The multiplier to the hero's heavy melee damage from spirit power (Paige)
    spiritHPRegenScaling:0, //The multiplier to the hero's HP regen from spirit power (Victor)
    spiritBulletsPerSecScaling:0, //The multiplier to the hero's bullets per seconds from spirit power (Warden)
    boonBulletResistScaling:0, //The multiplier to the hero's bullet resistance from boons (Bebop, Dynamo)
    boonSpiritResistScaling:0, //The multiplier to the hero's spirit resistance from boons (Kelvin)
    critBonusScaling:0 //The reduction to the scaling of bonus critical damage (Rem, Violet, Vyper)
};
class Item {
  constructor(stats = {}){
		Object.assign(this, Item.DEFAULTS, stats);
	}
}
Item.DEFAULTS = {
	name: "",
	cost: 0,
	category: "",
	type: "Basic",
	// Weapon bonuses
	bonusAmmo: 0, 					// flat
	bonusVelocity: 0, 				// decimal (0.25 = 25%)
	bonusFalloffRange: 0, 			// decimal (0.25 = 25%)
	bonusFireRate: 0, 				// decimal (0.25 = 25%)
	bonusMeleeDamage: 0, 			// decimal (0.25 = 25%)
	bonusMeleeDistance: 0, 			// decimal (0.25 = 25%)
	bonusReloadSpeed: 0, 			// NOT APPLICABLE
	bonusWeaponDamage: 0, 			
	// Vitatlity Bonuses
	bonusDamageBarrier: 0, 			// whole number
	bonusWeaponResistance: 0, 		// decimal (0.25 = 25%)
	bonusSpiritResistance: 0, 		// decimal (0.25 = 25%)
	bonusDebuffResistance: 0, 		// decimal (0.25 = 25%)
	bonusGravityScale: 0, 			// negative decimal (-0.25 = -25%)
	bonusHealing: 0, 				// decimal (0.25 = 25%)
	bonusMaxHealth: 0, 				// flat amount 
	bonusBaseHealth: 0, 			// decimal (0.25 = 25%)
	bonusHealthRegen: 0, 			// flat amount
	bonusWeaponLifeSteal: 0, 		// decimal (0.25 = 25%)
	bonusSpiritLifeSteal: 0, 		// decimal (0.25 = 25%)
	bonusMovementSpeed: 0, 			// flat amount
	bonusSlideDistance: 0, 			// decimal (0.25 = 25%)
	bonusSprintSpeed: 0, 			// flat amount
	bonusStamina: 0, 				// flat amount
	itemHealthRegen: 0, 			// flat amount
	// Spirit Bonuses
	bonusAbilityCooldown: 0, 		// decimal (0.25 = 25%)
	bonusAbilityDuration: 0, 		// decimal (0.25 = 25%)
	bonusAbilityRange: 0, 			// decimal (0.25 = 25%)
	bonusAbilityCharges: 0, 		// flat amount
	bonusSpiritPower: 0, 			// flat amount
	bonusSpiritPowerPercent: 0, 	// decimal (0.25 = 25%)
	bonusSpiritPowerForCharges: 0, 	// flat amount
	bonusSpiritDamage: 0, 			// flat amount
	// Misc.
	bonusDamageAmp: 0, 				// decimal (0.25 = 25%)
	damageReduction: 0, 			// decimal (0.25 = 25%)
	chargeUpTime: 0, 				// seconds
	passiveEffect: "",
	itemDuration: 0, 				// seconds
	itemActiveCooldown: 0, 			// seconds
	itemActiveCastRange: 0,			// meters
	debuffEffect: "",
	itemSpiritScale: 0, 			// decimal (0.25 = 25%)
	itemWeaponScale: 0, 			// decimal (0.25 = 25%)
	itemBoonScale: 0, 				// flat amount

	// Added for the full spirit list
	buildsFrom: "",                 // key of the component item this upgrades from, e.g. "extraSpirit"
	bonusOutOfCombatRegen: 0, 		// flat amount
	bonusItemCooldown: 0, 			// decimal (0.25 = 25%)           
	bonusMeleeResist: 0, 			// decimal (0.25 = 25%)
	bonusStaminaRecovery: 0,        // decimal (0.25 = 25%)
	bonusAmmoPercent: 0,            // % max ammo (bonusAmmo is flat)
	bonusChargeRecharge: 0,         // % faster time between charges
	bonusChargedCooldown: 0,        // % cooldown reduction for charged abilities
	itemPassiveCooldown: 0          // cooldown on a passive proc, in seconds
};
//---Data---
const roster = {
	abrams: new Hero({
		name: "Abrams",
		//Weapon Stats
		baseBulletDamage: 3.6, pelletCount: 9, ammo: 9, bulletsPerSecond: 1.59, reloadTime: 0.353, bulletVelocity: 610,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 800, hpRegen: 1.5,
		moveSpeed: 6.4, sprintSpeed: 1.6, dashSpeed: 13.9,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.1, boonLightMeleeScaling: 1.74, boonHeavyMeleeScaling: 4.03,
		boonHPScaling: 49, boonSpiritScaling: 1.1
	}),

	apollo: new Hero({
		name: "Apollo",
		//Weapon Stats
		baseBulletDamage: 48.7, ammo: 15, bulletsPerSecond: 2.63, reloadTime: 2.5, bulletVelocity: 127,
		meleeDamageLight: 63, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 770, hpRegen: 1,
		moveSpeed: 7.2, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.825, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 2.91,
		boonHPScaling: 45, boonSpiritScaling: 1.1
	}),

	baba: new Hero({
		// pellets always deal damage once per shot, so DPS = baseBulletDamage x bulletsPerSecond (do NOT multiply by pelletCount)
		name: "Baba",
		//Weapon Stats
		baseBulletDamage: 8.8, pelletCount: 3, ammo: 15, bulletsPerSecond: 3.2258, reloadTime: 2.5, bulletVelocity: 177.8,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 780, hpRegen: 2.5,
		moveSpeed: 6.5, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 2, staminaCooldown: 4.5,
		bulletResistance: -0.07, spiritResistance: 0.08,
		//Scaling Stats
		boonWpnScaling: 0.41, boonLightMeleeScaling: 0.7, boonHeavyMeleeScaling: 1.624,
		boonHPScaling: 45, boonSpiritScaling: 1.1,
		spiritSpiritResistScaling: 0.001
	}),

	bebop: new Hero({
		name: "Bebop",
		//Weapon Stats
		baseBulletDamage: 4.98, ammo: 66, bulletsPerSecond: 11.905, reloadTime: 2.35, bulletVelocity: 508,
		meleeDamageLight: 63, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 880, hpRegen: 2.5,
		moveSpeed: 6.45, sprintSpeed: 4, dashSpeed: 13.9,
		stamina: 3, staminaCooldown: 5.5,
		//Scaling Stats
		boonWpnScaling: 0.115, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 2.9092,
		boonHPScaling: 52, boonSpiritScaling: 1.1,
		boonBulletResistScaling: 0.003
	}),

	billy: new Hero({
		name: "Billy",
		//Weapon Stats
		baseBulletDamage: 6.3, ammo: 30, bulletsPerSecond: 11.77, reloadTime: 2.9, bulletVelocity: 513.1,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 820, hpRegen: 2,
		moveSpeed: 7, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.127, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 53, boonSpiritScaling: 1.1
	}),

	calico: new Hero({
		name: "Calico",
		//Weapon Stats
		baseBulletDamage: 1.84, pelletCount: 9, ammo: 12, bulletsPerSecond: 4.762, reloadTime: 2.6, bulletVelocity: 317.5,
		meleeDamageLight: 63, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 730, hpRegen: 2,
		moveSpeed: 6.8, sprintSpeed: 1.6, dashSpeed: 16.1,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.043, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 2.91,
		boonHPScaling: 37, boonSpiritScaling: 1.1
	}),

	celeste: new Hero({
		name: "Celeste",
		//Weapon Stats
		baseBulletDamage: 18, ammo: 8, bulletsPerSecond: 1.724, reloadTime: 2, bulletVelocity: 50,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 690, hpRegen: 1,
		moveSpeed: 6.2, sprintSpeed: 1.6, dashSpeed: 16.1,
		stamina: 4, staminaCooldown: 5.3,
		//Scaling Stats
		boonWpnScaling: 0.82, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 33, boonSpiritScaling: 1.1
	}),

	deadmanDanny: new Hero({
		// need to add a charged weapon damage
		name: "Deadman Danny",
		//Weapon Stats
		baseBulletDamage: 5.5, ammo: 27, bulletsPerSecond: 9.5238, reloadTime: 2.25, bulletVelocity: 660.4,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 730, hpRegen: 3.25,
		moveSpeed: 7.2, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.42, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.6656,
		boonHPScaling: 39, boonSpiritScaling: 1.1
	}),

	doorman: new Hero({
		name: "The Doorman",
		//Weapon Stats
		baseBulletDamage: 24, ammo: 8, bulletsPerSecond: 1.5873, reloadTime: 2.4, bulletVelocity: 203.2,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 755, hpRegen: 1,
		moveSpeed: 7.9, sprintSpeed: 1.6, dashSpeed: 16.1,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 1.25, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.6656,
		boonHPScaling: 42, boonSpiritScaling: 1.1
	}),

	drifter: new Hero({
		// pellets always deal damage once per shot, so DPS = baseBulletDamage x bulletsPerSecond (do NOT multiply by pelletCount)
		name: "Drifter",
		//Weapon Stats
		baseBulletDamage: 19.5, pelletCount: 3, ammo: 12, bulletsPerSecond: 2.2676, reloadTime: 2.444, bulletVelocity: 508,
		meleeDamageLight: 51.5, meleeDamageHeavy: 120,
		//Vitality Stats
		HP: 755, hpRegen: 3.5,
		moveSpeed: 6.9, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.49, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.6816,
		boonHPScaling: 41, boonSpiritScaling: 1.1
	}),

	dynamo: new Hero({
		name: "Dynamo",
		//Weapon Stats
		baseBulletDamage: 12.6, ammo: 20, bulletsPerSecond: 3.8095, reloadTime: 2.35, bulletVelocity: 320,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 880, hpRegen: 1.75,
		moveSpeed: 6.7, sprintSpeed: 1.6, dashSpeed: 13.9,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.5, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.6656,
		boonHPScaling: 61, boonSpiritScaling: 1.1,
		boonBulletResistScaling: 0.00625
	}),

	graves: new Hero({
		name: "Graves",
		//Weapon Stats
		baseBulletDamage: 3.6, ammo: 40, bulletsPerSecond: 9.804, reloadTime: 2.8, bulletVelocity: 635,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 730, hpRegen: 1, bulletLifesteal: 0.08,
		moveSpeed: 7, sprintSpeed: 2.2, dashSpeed: 14.7,
		stamina: 2, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.054, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 35, boonSpiritScaling: 1.1
	}),

	greyTalon: new Hero({
		name: "Grey Talon",
		//Weapon Stats
		baseBulletDamage: 23.51, ammo: 17, bulletsPerSecond: 1.667, reloadTime: 2.35, bulletVelocity: 495.3,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 780, hpRegen: 1.5,
		moveSpeed: 6.3, sprintSpeed: 1.6, dashSpeed: 16.1,
		stamina: 4, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.85, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 38, boonSpiritScaling: 1.6,
		spiritBulletDamageScaling: 0.08, spiritMoveSpeedScaling: 0.0084
	}),

	haze: new Hero({
		name: "Haze",
		//Weapon Stats
		baseBulletDamage: 5.26, ammo: 25, bulletsPerSecond: 9.524, reloadTime: 2.35, bulletVelocity: 762,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 730, hpRegen: 2,
		moveSpeed: 8.2, sprintSpeed: 1.6, dashSpeed: 16.1,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.143, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 33, boonSpiritScaling: 0.5,
		spiritAmmoScaling: 0.5
	}),

	holliday: new Hero({
		name: "Holliday",
		//Weapon Stats
		baseBulletDamage: 19.7, ammo: 10, bulletsPerSecond: 2.1164, reloadTime: 2.75, bulletVelocity: 1156,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 780, hpRegen: 2,
		moveSpeed: 8.2, sprintSpeed: 1.6, dashSpeed: 16.1,
		stamina: 2, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 1.144, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.6656,
		boonHPScaling: 43, boonSpiritScaling: 1.1
	}),

	infernus: new Hero({
		name: "Infernus",
		//Weapon Stats
		baseBulletDamage: 5.5, ammo: 27, bulletsPerSecond: 9.524, reloadTime: 2.25, bulletVelocity: 660.4,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 830, hpRegen: 2,
		moveSpeed: 6.7, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.088, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 39, boonSpiritScaling: 1.1
	}),

	ivy: new Hero({
		name: "Ivy",
		//Weapon Stats
		baseBulletDamage: 4.45, ammo: 33, bulletsPerSecond: 13.61, reloadTime: 2.444, bulletVelocity: 571.5,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 755, hpRegen: 2,
		moveSpeed: 7.2, sprintSpeed: 1.6, dashSpeed: 16.1,
		stamina: 4, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.08, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 45, boonSpiritScaling: 1.2
	}),

	kelvin: new Hero({
		name: "Kelvin",
		//Weapon Stats
		baseBulletDamage: 18.6, ammo: 14, bulletsPerSecond: 3.81, reloadTime: 2.585, bulletVelocity: 160,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 880, hpRegen: 1,
		moveSpeed: 6.7, sprintSpeed: 1.1, dashSpeed: 13.9,
		stamina: 3, staminaCooldown: 5.5,
		//Scaling Stats
		boonWpnScaling: 0.418, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 60, boonSpiritScaling: 1.3,
		boonSpiritResistScaling: 0.00625
	}),

	ladyGeist: new Hero({
		name: "Lady Geist",
		//Weapon Stats
		baseBulletDamage: 20.7, ammo: 9, bulletsPerSecond: 2.1164, reloadTime: 2.585, bulletVelocity: 828,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 880, hpRegen: 1,
		moveSpeed: 6.3, sprintSpeed: 2.4, dashSpeed: 13.9,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 1, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.6656,
		boonHPScaling: 51, boonSpiritScaling: 1.1
	}),

	lash: new Hero({
		// burst fire: 3 rounds per burst
		name: "Lash",
		//Weapon Stats
		baseBulletDamage: 8.46, ammo: 29, bulletsPerSecond: 5.831, reloadTime: 2.35, bulletVelocity: 635,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 780, hpRegen: 2,
		moveSpeed: 7.2, sprintSpeed: 2.1, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		spiritResistance: 0.1,
		//Scaling Stats
		boonWpnScaling: 0.31, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 50, boonSpiritScaling: 1.1
	}),

	mcginnis: new Hero({
		// minigun spins up: 4.762 bullets/sec at start, 11.9 at max spin (bulletsPerSecond below is the start value)
		name: "McGinnis",
		//Weapon Stats
		baseBulletDamage: 6.08, ammo: 66, bulletsPerSecond: 4.7619, reloadTime: 3.29, bulletVelocity: 650,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 780, hpRegen: 2,
		moveSpeed: 6.7, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 2, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.171, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.6656,
		boonHPScaling: 52, boonSpiritScaling: 1.1,
		boonSpiritResistScaling: 0.0035
	}),

	mina: new Hero({
		name: "Mina",
		//Weapon Stats
		baseBulletDamage: 7.31, ammo: 12, bulletsPerSecond: 3.968, reloadTime: 1.7, bulletVelocity: 762,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 660, hpRegen: 2,
		moveSpeed: 6.5, sprintSpeed: 1.6, dashSpeed: 16.1,
		stamina: 2, staminaCooldown: 4.2,
		//Scaling Stats
		boonWpnScaling: 0.275, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 27, boonSpiritScaling: 1.1
	}),

	mirage: new Hero({
		name: "Mirage",
		//Weapon Stats
		baseBulletDamage: 14.8, ammo: 16, bulletsPerSecond: 2.721, reloadTime: 2.6, bulletVelocity: 828,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 730, hpRegen: 1.5,
		moveSpeed: 7, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.3, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 45, boonSpiritScaling: 1.1
	}),

	moAndKrill: new Hero({
		name: "Mo & Krill",
		//Weapon Stats
		baseBulletDamage: 2.82, pelletCount: 4, ammo: 20, bulletsPerSecond: 5.291, reloadTime: 2.82, bulletVelocity: 320,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 930, hpRegen: 1,
		moveSpeed: 8, sprintSpeed: 1.6, dashSpeed: 13.9,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.0847, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 65, boonSpiritScaling: 1.1
	}),

	nurseHarrow: new Hero({
		name: "Nurse Harrow",
		//Weapon Stats
		baseBulletDamage: 5.5, ammo: 27, bulletsPerSecond: 9.524, reloadTime: 2.25, bulletVelocity: 660.4,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 780, hpRegen: 2,
		moveSpeed: 7.2, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.425, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 31, boonSpiritScaling: 1.1
	}),

	paige: new Hero({
		name: "Paige",
		//Weapon Stats
		baseBulletDamage: 35, ammo: 14, bulletsPerSecond: 2, reloadTime: 2.5, bulletVelocity: 43.43,
		meleeDamageLight: 42, meleeDamageHeavy: 120,
		//Vitality Stats
		HP: 680, hpRegen: 2,
		moveSpeed: 6.9, sprintSpeed: 3.5, dashSpeed: 13.9,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.52, boonLightMeleeScaling: 1.2, boonHeavyMeleeScaling: 3.43,
		boonHPScaling: 31, boonSpiritScaling: 1.1,
		spiritHeavyMeleeScaling: 0.45
	}),

	paradox: new Hero({
		// burst fire: 5 rounds per burst
		name: "Paradox",
		//Weapon Stats
		baseBulletDamage: 6.8, ammo: 40, bulletsPerSecond: 7.559, reloadTime: 2.585, bulletVelocity: 525,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 730, hpRegen: 1,
		moveSpeed: 6.7, sprintSpeed: 1.6, dashSpeed: 16.1,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.26, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 46, boonSpiritScaling: 1.1
	}),

	pocket: new Hero({
		name: "Pocket",
		//Weapon Stats
		baseBulletDamage: 4.28, pelletCount: 7, ammo: 11, bulletsPerSecond: 1.905, reloadTime: 2.82, bulletVelocity: 558.8,
		meleeDamageLight: 60, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 780, hpRegen: 1,
		moveSpeed: 7.2, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		spiritResistance: -0.15,
		//Scaling Stats
		boonWpnScaling: 0.14, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.05,
		boonHPScaling: 36, boonSpiritScaling: 1.1
	}),

	ratKing: new Hero({
		name: "Rat King",
		//Weapon Stats
		baseBulletDamage: 6, pelletCount: 2, ammo: 24, bulletsPerSecond: 5, reloadTime: 2.8, bulletVelocity: 203.2,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 800, hpRegen: 2, lifestealEffectiveness:0.75,
		moveSpeed: 6.8, sprintSpeed: 1.6, dashSpeed: 13.9,
		stamina: 3, staminaCooldown: 3.802,
		//Scaling Stats
		boonWpnScaling: 0.18, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 50, boonSpiritScaling: 1.1
	}),

	rem: new Hero({
		name: "Rem",
		//Weapon Stats
		baseBulletDamage: 16, ammo: 13, bulletsPerSecond: 3.846, reloadTime: 2, bulletVelocity: 160,
		meleeDamageLight: 58, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 680, hpRegen: 2,
		moveSpeed: 7.2, sprintSpeed: 4, dashSpeed: 13.9,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.34, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.16,
		boonHPScaling: 28, boonSpiritScaling: 1.1
	}),

	seven: new Hero({
		// burst fire: 3 rounds per burst
		name: "Seven",
		//Weapon Stats
		baseBulletDamage: 10.8, ammo: 29, bulletsPerSecond: 5.831, reloadTime: 2.35, bulletVelocity: 635,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 730, hpRegen: 1,
		moveSpeed: 6.7, sprintSpeed: 1.8, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.24, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 41, boonSpiritScaling: 1.1
	}),

	shiv: new Hero({
		// alt fire: 4.53 dmg / +0.24 per boon
		name: "Shiv",
		//Weapon Stats
		baseBulletDamage: 4.8, pelletCount: 6, ammo: 10, bulletsPerSecond: 1.814, reloadTime: 2.8, bulletVelocity: 609.6,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 830, hpRegen: 2,
		moveSpeed: 6.5, sprintSpeed: 1.6, dashSpeed: 13.9,
		stamina: 3, staminaCooldown: 6,
		//Scaling Stats
		boonWpnScaling: 0.165, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 46, boonSpiritScaling: 1.1
	}),

	silver: new Hero({
		name: "Silver",
		//Weapon Stats
		baseBulletDamage: 5.1, pelletCount: 7, ammo: 7, bulletsPerSecond: 1.177, reloadTime: 0.3, bulletVelocity: 812.8,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 830, hpRegen: 2.5,
		moveSpeed: 6.7, sprintSpeed: 2.5, dashSpeed: 14.7,
		stamina: 2, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.117, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 31, boonSpiritScaling: 1.1
	}),

	silverTransformed: new Hero({
		name: "Silver (Transformed)",
		//Weapon Stats
		baseBulletDamage: 25, ammo: 12, bulletsPerSecond: 2, reloadTime: 1.5, bulletVelocity: 254,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 955, hpRegen: 2.5,
		moveSpeed: 8.2, sprintSpeed: 2.5, dashSpeed: 14.7,
		stamina: 2, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.774, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 46, boonSpiritScaling: 1.1
	}),

	sinclair: new Hero({
		// burst fire: 2 rounds per burst
		name: "Sinclair",
		//Weapon Stats
		baseBulletDamage: 16.5, ammo: 16, bulletsPerSecond: 2.721, reloadTime: 2.5, bulletVelocity: 300,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 730, hpRegen: 1,
		moveSpeed: 7.2, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.55, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 38, boonSpiritScaling: 1.3,
		spiritMoveSpeedScaling: 0.0138
	}),

	solomon: new Hero({
		name: "Solomon",
		//Weapon Stats
		baseBulletDamage: 5.5, ammo: 27, bulletsPerSecond: 9.524, reloadTime: 2.25, bulletVelocity: 660.4,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 780, hpRegen: 2,
		moveSpeed: 7.2, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.4, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 38, boonSpiritScaling: 1.1, spiritBulletDamageScaling: 0.14
	}),

	venator: new Hero({
		name: "Venator",
		//Weapon Stats
		baseBulletDamage: 8, ammo: 33, bulletsPerSecond: 7.937, reloadTime: 2.8, bulletVelocity: 1588,
		meleeDamageLight: 50, meleeDamageHeavy: 125,
		//Vitality Stats
		HP: 820, hpRegen: 2,
		moveSpeed: 6.4, sprintSpeed: 1, dashSpeed: 13.9,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.27, boonLightMeleeScaling: 1.7, boonHeavyMeleeScaling: 4.25,
		boonHPScaling: 43, boonSpiritScaling: 1.1,
		spiritBulletResistScaling: 0.00122, spiritSpiritResistScaling: 0.00122
	}),

	victor: new Hero({
		// weapon spins up: 5.051 bullets/sec at start, 5.848 at max spin (bulletsPerSecond below is the start value)
		name: "Victor",
		//Weapon Stats
		baseBulletDamage: 12, ammo: 24, bulletsPerSecond: 5.051, reloadTime: 2.4, bulletVelocity: 203.2,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 800, hpRegen: 1.5,
		moveSpeed: 6.3, sprintSpeed: 1.1, dashSpeed: 13.9,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.26, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 34, boonSpiritScaling: 1.1,
		spiritHPRegenScaling: 0.08
	}),

	vindicta: new Hero({
		name: "Vindicta",
		//Weapon Stats
		baseBulletDamage: 12.33, ammo: 19, bulletsPerSecond: 4.329, reloadTime: 2.914, bulletVelocity: 660,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 755, hpRegen: 2,
		moveSpeed: 7.9, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 2, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.495, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 28, boonSpiritScaling: 1.1,
		spiritBulletDamageScaling: 0.022
	}),

	violet: new Hero({
		name: "Violet",
		//Weapon Stats
		baseBulletDamage: 5.5, ammo: 27, bulletsPerSecond: 9.524, reloadTime: 2.25, bulletVelocity: 660.4,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 780, hpRegen: 2,
		moveSpeed: 7.2, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.55, boonLightMeleeScaling: 1.2, boonHeavyMeleeScaling: 2.78,
		boonHPScaling: 34, boonSpiritScaling: 1.1
	}),

	viscous: new Hero({
		// alt fire: 42 dmg / +1.44 per boon
		name: "Viscous",
		//Weapon Stats
		baseBulletDamage: 10.34, ammo: 20, bulletsPerSecond: 4.762, reloadTime: 2.5, bulletVelocity: 254,
		meleeDamageLight: 63, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 780, hpRegen: 2,
		moveSpeed: 7.2, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.36, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 2.91,
		boonHPScaling: 45, boonSpiritScaling: 1.3
	}),

	vyper: new Hero({
		name: "Vyper",
		//Weapon Stats
		baseBulletDamage: 6.58, ammo: 24, bulletsPerSecond: 14.29, reloadTime: 1.6, bulletVelocity: 411.5,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 780, hpRegen: 2,
		moveSpeed: 6.9, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 4, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.178, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 35, boonSpiritScaling: 1.1,
		spiritMoveSpeedScaling: 0.0138
	}),

	warden: new Hero({
		// spiritBulletsPerSecScaling is flat bullets/sec per spirit power (0.008 / 3.81 base = ~0.21% fire rate per spirit)
		name: "Warden",
		//Weapon Stats
		baseBulletDamage: 17.34, ammo: 17, bulletsPerSecond: 3.81, reloadTime: 2.914, bulletVelocity: 290,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 805, hpRegen: 2,
		moveSpeed: 6.3, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.25, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 60, boonSpiritScaling: 1.1,
		spiritBulletsPerSecScaling: 0.008
	}),

	wraith: new Hero({
		name: "Wraith",
		//Weapon Stats
		baseBulletDamage: 5.64, ammo: 52, bulletsPerSecond: 10.58, reloadTime: 2.82, bulletVelocity: 571.5,
		meleeDamageLight: 50, meleeDamageHeavy: 116,
		//Vitality Stats
		HP: 730, hpRegen: 2,
		moveSpeed: 7.2, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.14, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.67,
		boonHPScaling: 35, boonSpiritScaling: 1.1,
		spiritSprintSpeedScaling: 0.05
	}),

	yamato: new Hero({
		// alt fire: 50 dmg / +0.7 per boon
		name: "Yamato",
		//Weapon Stats
		baseBulletDamage: 5.31, pelletCount: 5, ammo: 12, bulletsPerSecond: 2.38, reloadTime: 2.44, bulletVelocity: 254,
		meleeDamageLight: 55, meleeDamageHeavy: 128,
		//Vitality Stats
		HP: 730, hpRegen: 1,
		moveSpeed: 8.2, sprintSpeed: 1.6, dashSpeed: 14.7,
		stamina: 3, staminaCooldown: 4.5,
		//Scaling Stats
		boonWpnScaling: 0.154, boonLightMeleeScaling: 1.58, boonHeavyMeleeScaling: 3.68,
		boonHPScaling: 45, boonSpiritScaling: 1.1,
		spiritAmmoScaling: 0.15
	})
};
const HERO_ABILITIES = {
	abrams: {
		siphonLife: {
			name: "Siphon Life",
			damageLabel: "DPS",
			cooldown: 42,
			duration: 4,
			radius: 8,
			damage: 22,
			spiritLifesteal: 1, // heals for 100% of the damage dealt
			spiritScaling: 0.6,
			upgrades: [
				{ cooldown: -20 },   // T1
				{ duration: 2 },   // T2
				{ damage: 18, spiritScaling: 0.12, radius: 2 }   // T3
			],
			upgradeNotes: [
				"T1: -20 Ability Cooldown",
				"T2: +2 Ability Duration",
				"T3: +18 DPS, +0.12 DPS spirit scaling, +2m Radius"
			]
		},
		shoulderCharge: {
			name: "Shoulder Charge",
			damageLabel: "Damage",
			cooldown: 33,
			duration: 1.4,
			damage: 30,
			spiritScaling: 1.4,
			weaponDamageBonus: 0,
			weaponPowerIncreaseDuration: 0,
			stunDuration: 0.3,
			slowPercent: 0,
			slowDuration: 0,
			upgrades: [
				{ slowPercent: 0.32, slowDuration: 3 },   // T1
				{ stunDuration: 0.8 },   // T2
				{ cooldown: -18, weaponDamageBonus: 1.5, weaponPowerIncreaseDuration: 6 }   // T3
			],
			upgradeNotes: [
				"T1: +32 Slow Percent, +3 Slow Duration",
				"T2: +0.8 Stun Duration",
				"T3: -18 Ability Cooldown, +1.5 Weapon Damage Bonus, +6 Weapon Power Increase Duration"
			]
		},
		infernalResilience: {
			name: "Infernal Resilience",
			cooldown: 0,
			regenIncomingDamagePercent: 0.13,
			HP: 0,
			hpRegen: 1,
			debuffResistance: 0,
			meleeLifesteal: 0,
			upgrades: [
				{ HP: 200 },   // T1
				{ meleeLifesteal: 0.18 },   // T2
				{ regenIncomingDamagePercent: 0.09, debuffResistance: 0.2 }   // T3
			],
			upgradeNotes: [
				"T1: +200 Bonus Max Health",
				"T2: +18 Melee Lifesteal",
				"T3: +9 Regen Incoming Damage Percent, +20 Debuff Resistance"
			]
		},
		seismicImpact: {
			name: "Seismic Impact",
			damageLabel: "Damage",
			cooldown: 215,
			impactRadius: 9,
			damage: 100,
			spiritScaling: 2.325,
			stunDuration: 1.6,
			immunityDuration: 0,
			upgrades: [
				{ cooldown: -30 },   // T1
				{ stunDuration: 0.8 },   // T2
				{ immunityDuration: 5, impactRadius: 6 }   // T3
			],
			upgradeNotes: [
				"T1: -30 Ability Cooldown",
				"T2: +0.8 Stun Duration",
				"T3: +5 Immunity Duration, +6m Impact Radius"
			]
		}
	},
	apollo: {
		disengagingSigil: {
			name: "Disengaging Sigil",
			damageLabel: "Damage",
			cooldown: 12,
			damage: 85,
			spiritScaling: 1.3,
			resetsAirLimit: 0,
			staminaToRestore: 0,
			bonusFireRate: 0,
			bonusBulletSpeedPercent: 0,
			buffDuration: 0,
			recastTime: 0,
			upgrades: [
				{ bonusFireRate: 0.25, bonusBulletSpeedPercent: 0.25, buffDuration: 8 },   // T1
				{ staminaToRestore: 1, resetsAirLimit: 1 },   // T2
				{ recastTime: 4 }   // T3
			],
			upgradeNotes: [
				"T1: +25 Bonus Fire Rate, +25 Bonus Bullet Speed Percent, +8 Buff Duration",
				"T2: +1 Stamina To Restore, +1 Resets Air Limit",
				"T3: +4 Recast Time"
			]
		},
		riposte: {
			name: "Riposte",
			cooldown: 22,
			stunDuration: 0.8,
			meleeResistReduction: -0.25,
			targetLifesteal: 0,
			targetLifestealDuration: 0,
			upgrades: [
				{ cooldown: -8 },   // T1
				{ meleeResistReduction: -0.25, stunDuration: 0.4 },   // T2
				{ targetLifesteal: 0.75, targetLifestealDuration: 13 }   // T3
			],
			upgradeNotes: [
				"T1: -8 Ability Cooldown",
				"T2: -25 Melee Resist Reduction, +0.4 Stun Duration",
				"T3: +75 Target Lifesteal, +13 Target Lifesteal Duration"
			]
		},
		flawlessAdvance: {
			name: "Flawless Advance",
			damageLabel: "Perfect Damage",
			cooldown: 26,
			duration: 8,
			abilityDashSpeed: 1100, // renamed from dashSpeed so it doesn't collide with the hero's dashSpeed stat
			attackDashRange: 3,
			baseDamage: 25,
			baseDamageScale: 0.55,
			maxDamageBeforePerfect: 40,
			maxDamageBeforePerfectScale: 0.9,
			damage: 65,
			spiritScaling: 1.55,
			healFixedHealth: 0,
			dashBuffDuration: 0,
			bulletResistance: 0,
			healFixedHealthScale: 0,
			upgrades: [
				{ healFixedHealth: 35, healFixedHealthScale: 1.3 },   // T1
				{ cooldown: -12, bulletResistance: 0.6, dashBuffDuration: 1.5 },   // T2
				{ baseDamage: 30, maxDamageBeforePerfect: 45, damage: 65, attackDashRange: 3, abilityDashSpeed: 550 }   // T3
			],
			upgradeNotes: [
				"T1: +35 Heal Fixed Health, +1.3 Heal Fixed Health spirit scaling",
				"T2: -12 Ability Cooldown, +60 Bullet Resist, +1.5 Dash Buff Duration",
				"T3: +30 Base Damage, Base Damage spirit scaling multiplied (game value 1.15, ETechPower; not applied by abilityAt), +45 Max Damage Before Perfect, Max Damage Before Perfect spirit scaling multiplied (game value 1.15, ETechPower; not applied by abilityAt), +65 Perfect Damage, Perfect Damage spirit scaling multiplied (game value 1.15, ETechPower; not applied by abilityAt), +3m Attack Dash Range, +550 Dash Speed"
			]
		},
		itaniLoSahn: {
			name: "Itani Lo Sahn",
			damageLabel: "Delayed Damage",
			cooldown: 145,
			dashRange: 27,
			impactDamage: 70,
			impactDamageScale: 0.77,
			damage: 200,
			spiritScaling: 2.6,
			bonusDamagePercent: 0.6,
			upgrades: [
				{ dashRange: 8 },   // T1
				{ cooldown: -35 },   // T2
				{ bonusDamagePercent: 0.5 }   // T3
			],
			upgradeNotes: ["T1: +8m Dash Range", "T2: -35 Ability Cooldown", "T3: +50 Bonus Damage Percent"]
		}
	},
	baba: {
		threadsap: {
			name: "Thread Sap",
			damageLabel: "Damage",
			cooldown: 28,
			charges: 1,
			damage: 50,
			spiritScaling: 0,
			bulletDamage: 8,
			bulletDamageScale: 0.26,
			debuffDuration: 22,
			stolenSpiritEffectiveness: 1.75,
			maxStolenSpirit: 45,
			pullDistance: 0,
			upgrades: [
				{ bulletDamage: 8 },   // T1
				{ cooldown: -12, debuffDuration: 8 },   // T2
				{ charges: 1, pullDistance: 7 }   // T3
			],
			upgradeNotes: [
				"T1: +8 Bullet Damage",
				"T2: -12 Ability Cooldown, +8 Debuff Duration",
				"T3: +1 Ability Charges, +7m Pull Distance"
			]
		},
		grannyLongLegs: {
			name: "Granny Long Legs",
			damageLabel: "Damage",
			cooldown: 32,
			duration: 10,
			castRange: 8,
			damage: 75,
			spiritScaling: 0.6,
			moveSpeed: 5,
			debuffResistance: 0.3,
			meleeResistance: 0.3,
			lightMeleeKnockback: 10,
			heavymeleeSlow: 0.5,
			debuffDuration: 4,
			meleeLifesteal: 0,
			upgrades: [
				{ moveSpeed: 2.5 },   // T1
				{ cooldown: -7 },   // T2
				{ debuffResistance: 0.15, meleeResistance: 0.15, meleeLifesteal: 0.5 }   // T3
			],
			upgradeNotes: [
				"T1: +2.5m Move Speed",
				"T2: -7 Ability Cooldown",
				"T3: +15 Debuff Resist, +15 Melee Resist, +50 Melee Lifesteal"
			]
		},
		babasBrew: {
			name: "Baba's Brew",
			damageLabel: "Damage",
			cooldown: 27,
			radius: 6,
			damage: 12,
			spiritScaling: 0.152,
			barrier: 90,
			barrierScale: 0.7,
			silenceDuration: 3,
			effectiveness: 1,
			effectivenessApplies: ["damage", "barrier", "silenceDuration"],
			upgrades: [
				{ radius: 3 },   // T1
				{ cooldown: -14 },   // T2
				{ effectiveness: 0.3333 }   // T3
			],
			upgradeNotes: [
				"T1: +3m Radius",
				"T2: -14 Ability Cooldown",
				"T3: +33.33 Effectiveness"
			]
		},
		feedTheBirds: {
			name: "Feed The Birds",
			damageLabel: "Damage",
			cooldown: 150,
			castRange: 18,
			damage: 450,
			spiritScaling: 1.6,
			maxSlow: 0.32,
			maxDuration: 2.75,
			upgrades: [
				{ castRange: 4, maxSlow: 0.32 },   // T1
				{ cooldown: -55 },   // T2
				{ damage: 125, spiritScaling: 1.5, maxDuration: 0.5 }   // T3
			],
			upgradeNotes: [
				"T1: +4m Ability Cast Range, +32 Max Slow",
				"T2: -55 Ability Cooldown",
				"T3: +125 Damage, +1.5 Damage spirit scaling, +0.5 Max Duration"
			]
		}
	},
	bebop: {
		explodingUppercut: {
			name: "Exploding Uppercut",
			damageLabel: "Landing Damage",
			cooldown: 22,
			damage: 75,
			spiritScaling: 0.6,
			restoreHookCooldown: 0,
			uppercutBuffOnHit: 0,
			buffBaseWeaponPct: 0,
			bonusFireRate: -0.14,
			bonusFireRateScale: -0.00186,
			missingHPHeal: 0,
			upgrades: [
				{ cooldown: -11 },   // T1
				{ uppercutBuffOnHit: 9, buffBaseWeaponPct: 0.3 },   // T2
				{ restoreHookCooldown: 1, missingHPHeal: 0.18 }   // T3
			],
			upgradeNotes: [
				"T1: -11 Ability Cooldown",
				"T2: +9 Uppercut Buff On Hit, +30 Buff Base Weapon Pct",
				"T3: +1 Restore Hook Cooldown, +18 Missing HPHeal"
			]
		},
		stickyBomb: {
			name: "Sticky Bomb",
			damageLabel: "Damage",
			cooldown: 18,
			duration: 3.5,
			castRange: 6,
			radius: 8,
			damage: 85,
			spiritScaling: 1.5,
			bonusDamagePctPerPlayerKilled: 0.025,
			bonusDamagePctPerPlayerKilledScale: 0.0001,
			bonusDamagePctPerPlayerHit: 0.01,
			bonusDamagePctPerPlayerHitScale: 0.00002,
			moveSpeed: 0,
			movementSpeedBonusDuration: 0,
			debuffResistance: 0,
			upgrades: [
				{ cooldown: -8 },   // T1
				{ damage: 85 },   // T2
				{ moveSpeed: 5, debuffResistance: 0.25, movementSpeedBonusDuration: 6 }   // T3
			],
			upgradeNotes: [
				"T1: -8 Ability Cooldown",
				"T2: +85 Damage",
				"T3: +5m Movement Speed Bonus, +25 Status Resistance Percent, +6 Movement Speed Bonus Duration"
			]
		},
		grappleArm: {
			name: "Grapple Arm",
			cooldown: 23,
			castRange: 30,
			bulletAmp: 0,
			bulletAmpDuration: 0,
			upgrades: [
				{ bulletAmp: 0.2, bulletAmpDuration: 6 },   // T1
				{ castRange: 30 },   // T2
				{ cooldown: -11.5 }   // T3
			],
			upgradeNotes: [
				"T1: +20 Bullet Amp, +6 Bullet Amp Duration",
				"T2: +30m Ability Cast Range",
				"T3: -11.5 Ability Cooldown"
			]
		},
		hyperBeam: {
			name: "Hyper Beam",
			damageLabel: "DPS",
			cooldown: 120,
			damage: 160,
			spiritScaling: 2.511,
			spiritLifesteal: 0,
			beamLifestealNonHeroPercent: 0,
			upgrades: [
				{ cooldown: -20 },   // T1
				{ damage: 108 },   // T2
				{ spiritLifesteal: 0.65, beamLifestealNonHeroPercent: 0.2 }   // T3
			],
			upgradeNotes: [
				"T1: -20 Ability Cooldown",
				"T2: +108 DPS",
				"T3: +65 Beam Lifesteal, +20 Beam Lifesteal Non Hero Percent"
			]
		}
	},
	billy: {
		bashdown: {
			name: "Bashdown",
			damageLabel: "Damage",
			cooldown: 35,
			castRange: 4,
			charges: 1,
			chargeCooldown: 8,
			damage: 35,
			spiritScaling: 1.1,
			meleeDamage: 0,
			heavyMeleeDamage: 0,
			countsAsLightMelee: 1,
			countsAsHeavyMelee: 0,
			heavyMeleeDamageScale: 0,
			upgrades: [
				{ cooldown: -10 },   // T1
				{ castRange: 2, charges: 1 },   // T2
				{ countsAsLightMelee: -1, countsAsHeavyMelee: 1, heavyMeleeDamageScale: 0.5, heavyMeleeDamage: 0, meleeDamage: 0, chargeCooldown: -3 }   // T3
			],
			upgradeNotes: [
				"T1: -10 Ability Cooldown",
				"T2: +2m Ability Cast Range, +1 Ability Charges",
				"T3: -1 Counts As Light Melee, +1 Counts As Heavy Melee, +0.5 Heavy Melee Damage spirit scaling, +0 Heavy Melee Damage, Melee Damage spirit scaling multiplied (game value 0; not applied by abilityAt), +0 Melee Damage, -3 Ability Cooldown Between Charge"
			],
			notes: [
				"Melee Damage also scales with LightMeleeDamage (x0.9)",
				"Heavy Melee Damage also scales with HeavyMeleeDamage (x0)"
			]
		},
		risingRam: {
			name: "Rising Ram",
			damageLabel: "Damage",
			cooldown: 32,
			duration: 0.3,
			damage: 40,
			spiritScaling: 1.9,
			weaponDamageBurst: 0,
			weaponDamageBurstDuration: 0,
			maxHealthBuffPct: 0,
			maxHealthBuffDuration: 0,
			upgrades: [
				{ weaponDamageBurst: 0.25, weaponDamageBurstDuration: 5 },   // T1
				{ duration: 0.4 },   // T2
				{ maxHealthBuffPct: 0.1, maxHealthBuffDuration: 16, cooldown: -13 }   // T3
			],
			upgradeNotes: [
				"T1: +25 Weapon Damage Burst, +5 Weapon Damage Burst Duration",
				"T2: +0.4 Ability Duration",
				"T3: +10 Max Health Buff Pct, +16 Max Health Buff Duration, -13 Ability Cooldown"
			]
		},
		blasted: {
			name: "Blasted",
			cooldown: 27,
			duration: 8,
			moveSpeed: 0,
			gainSlamOnUse: 0,
			bulletDamageAmp: 0.1,
			maxHealthMelee: 70,
			maxHealthMeleeScale: 0.6,
			upgrades: [
				{ moveSpeed: 2.25 },   // T1
				{ gainSlamOnUse: 1, bulletDamageAmp: 0.07 },   // T2
				{ maxHealthMelee: 50, maxHealthMeleeScale: 0.6 }   // T3
			],
			upgradeNotes: [
				"T1: +2.25m Bonus Move Speed",
				"T2: +1 Gain Slam On Use, +7 Bullet Damage Amp",
				"T3: +50 Max Health Melee, +0.6 Max Health Melee spirit scaling"
			]
		},
		chainGang: {
			name: "Chain Gang",
			damageLabel: "DPS",
			cooldown: 175,
			duration: 2.8,
			castRange: 12,
			damage: 45,
			spiritScaling: 0.9,
			bulletResistance: 0,
			spiritResistance: 0,
			unstoppablePerHero: 0,
			upgrades: [
				{ bulletResistance: 0.4, spiritResistance: 0.4 },   // T1
				{ cooldown: -40 },   // T2
				{ unstoppablePerHero: 1.3, castRange: 5 }   // T3
			],
			upgradeNotes: [
				"T1: +40 Bullet Resist, +40 Spirit Resist",
				"T2: -40 Ability Cooldown",
				"T3: +1.3 Unstoppable Per Hero, +5m Ability Cast Range"
			]
		}
	},
	calico: {
		gloomBombs: {
			name: "Gloom Bombs",
			damageLabel: "Damage",
			cooldown: 14,
			radius: 3,
			damage: 45,
			spiritScaling: 0.644,
			grenadeCount: 4,
			meleeResistReduction: 0,
			meleeResistReductionDuration: 0,
			upgrades: [
				{ cooldown: -3 },   // T1
				{ meleeResistReduction: -0.06, meleeResistReductionDuration: 6 },   // T2
				{ grenadeCount: 3 }   // T3
			],
			upgradeNotes: [
				"T1: -3 Ability Cooldown",
				"T2: -6 Melee Resist Reduction, +6 Melee Resist Reduction Duration",
				"T3: +3 Grenade Count"
			]
		},
		leapingSlash: {
			name: "Leaping Slash",
			damageLabel: "Impact Damage",
			cooldown: 13,
			castRange: 9,
			damage: 10,
			spiritScaling: 0,
			healAmount: 40,
			healAmountScale: 1.4,
			cooldownRefundPercent: 0,
			bountyDuration: 0,
			bonusGoldOnKill: 0,
			upgrades: [
				{ healAmount: 25 },   // T1
				{ bonusGoldOnKill: 200, bountyDuration: 3 },   // T2
				{ cooldownRefundPercent: 0.5, damage: 60 }   // T3
			],
			upgradeNotes: [
				"T1: +25 Heal Amount",
				"T2: +200 Bonus Gold On Kill, +3 Bounty Duration",
				"T3: +50 Cooldown Refund Percent, +60 Impact Damage"
			],
			notes: ["Impact Damage also scales with LightMeleeDamage (x0.8)"]
		},
		ava: {
			name: "Ava",
			cooldown: 30,
			buffDuration: 15,
			hpRegen: 0,
			maxBonusMoveSpeedPercent: 0.65,
			outgoingDamagePercent: 0,
			damageAmpDuration: 0,
			damageAmpBuildDuration: 0,
			upgrades: [
				{ buffDuration: 15 },   // T1
				{ maxBonusMoveSpeedPercent: 0.4, hpRegen: 15 },   // T2
				{ outgoingDamagePercent: 0.18, damageAmpDuration: 6, damageAmpBuildDuration: 10 }   // T3
			],
			upgradeNotes: [
				"T1: +15 Buff Duration",
				"T2: +40 Max Bonus Move Speed Percent, +15 Health Regen",
				"T3: +18 Outgoing Damage Percent, +6 Damage Amp Duration, +10 Damage Amp Build Duration"
			]
		},
		returnToShadows: {
			name: "Return to Shadows",
			damageLabel: "Damage",
			cooldown: 115,
			radius: 7.5,
			damage: 150,
			spiritScaling: 0.609,
			bonusMoveSpeedPercent: 0.2,
			refundCooldowns: 0,
			healAmount: 0,
			upgrades: [
				{ cooldown: -20 },   // T1
				{ damage: 75, bonusMoveSpeedPercent: 0.2 },   // T2
				{ refundCooldowns: 1, healAmount: 450 }   // T3
			],
			upgradeNotes: [
				"T1: -20 Ability Cooldown",
				"T2: +75 Damage, +20 Bonus Move Speed Percent",
				"T3: +1 Refund Cooldowns, +450 Heal Amount"
			]
		}
	},
	celeste: {
		lightEater: {
			name: "Light Eater",
			damageLabel: "Flare Damage",
			cooldown: 20,
			duration: 8,
			durationScale: 0.05,
			castRange: 10,
			damage: 15,
			spiritScaling: 0.34,
			spiritLifesteal: 0.18,
			upgrades: [
				{ spiritLifesteal: 0.15 },   // T1
				{ castRange: 3, cooldown: -10 },   // T2
				{ damage: 22, spiritScaling: 0.2 }   // T3
			],
			upgradeNotes: [
				"T1: +15 Ability Lifesteal Percent Hero",
				"T2: +3m Ability Cast Range, -10 Ability Cooldown",
				"T3: +22 Damage, +0.2 Damage spirit scaling"
			]
		},
		dazzlingTrick: {
			name: "Dazzling Trick",
			cooldown: 38,
			debuffDuration: 1.75,
			moveSpeed: 0,
			combatBarrier: 100,
			combatBarrierScale: 0.8,
			upgrades: [
				{ moveSpeed: 3.5 },   // T1
				{ combatBarrier: 70, combatBarrierScale: 0.76 },   // T2
				{ debuffDuration: 1.25, cooldown: -20 }   // T3
			],
			upgradeNotes: [
				"T1: +3.5m Bonus Move Speed",
				"T2: +70 Combat Barrier, +0.76 Combat Barrier spirit scaling",
				"T3: +1.25 Debuff Duration, -20 Ability Cooldown"
			]
		},
		radiantDaggers: {
			name: "Radiant Daggers",
			damageLabel: "Impact Damage",
			cooldown: 33,
			castRange: 30,
			charges: 1,
			chargeCooldown: 2,
			damage: 55,
			spiritScaling: 0.63,
			magicIncreasePerStack: 0.07,
			fireRatePerStack: 0,
			upgrades: [
				{ charges: 2 },   // T1
				{ damage: 70, cooldown: -22 },   // T2
				{ magicIncreasePerStack: 0.04, fireRatePerStack: 0.09 }   // T3
			],
			upgradeNotes: [
				"T1: +2 Ability Charges",
				"T2: +70 Impact Damage, -22 Ability Cooldown",
				"T3: +4 Magic Increase Per Stack, +9 Fire Rate Per Stack"
			]
		},
		shiningWonder: {
			name: "Shining Wonder",
			damageLabel: "Damage",
			cooldown: 160,
			damage: 140,
			spiritScaling: 0.6,
			slowPercent: 0.32,
			groundDashReductionPercent: -0.22,
			maxBounces: 8,
			upgrades: [
				{ groundDashReductionPercent: -0.14, slowPercent: 0.16 },   // T1
				{ damage: 90, spiritScaling: 0.45 },   // T2
				{ maxBounces: 6, cooldown: -30 }   // T3
			],
			upgradeNotes: [
				"T1: -14 Ground Dash Reduction Percent, +16 Slow Percent",
				"T2: +90 Damage, +0.45 Damage spirit scaling",
				"T3: +6 Max Bounces, -30 Ability Cooldown"
			]
		}
	},
	deadmanDanny: {
		strixSalvo: {
			name: "Strix Salvo",
			damageLabel: "Coated Damage",
			cooldown: 25,
			castRange: 35,
			damage: 45,
			spiritScaling: 1.1,
			marksTotal: 3,
			range: 21,
			upgrades: [
				{ cooldown: -12 },   // T1
				{ damage: 65 },   // T2
				{ marksTotal: 2, range: 14, spiritScaling: 0.35 }   // T3
			],
			upgradeNotes: [
				"T1: -12 Ability Cooldown",
				"T2: +30 Damage, +45 Coated Damage",
				"T3: +2 Marks Total, +14m Range, +0.2 Coated Damage spirit scaling, +0.225 Damage spirit scaling"
			]
		},
		chimeraMk1: {
			name: "Chimera Mk1",
			damageLabel: "Explosion Damage",
			cooldown: 21,
			radius: 8,
			damage: 70,
			spiritScaling: 1.5,
			heatDrainRate: -3,
			overheatLockoutDurationReductionOnPlayerHitPercent: 0,
			selfDamageReductionOnPlayerHitPercent: 0,
			healOnHit: 0,
			healOnHitScale: 0,
			upgrades: [
				{ heatDrainRate: -4 },   // T1
				{ healOnHit: 150, selfDamageReductionOnPlayerHitPercent: 1, healOnHitScale: 2 },   // T2
				{ damage: 120, overheatLockoutDurationReductionOnPlayerHitPercent: 0.4 }   // T3
			],
			upgradeNotes: [
				"T1: -4 Heat Drain Rate",
				"T2: +150 Heal On Hit, +100 Self Damage Reduction On Player Hit Percent, +1 Heal On Hit spirit scaling",
				"T3: +120 Explosion Damage, +40 Overheat Lockout Duration Reduction On Player Hit Percent"
			],
			notes: ["Ability Cooldown also scales with LevelUpBoons (x-0.25), Rocket Jumping - Self damage 5% max HP spirit damage"]
		},
		jettisonFuel: {
			name: "Jettison Fuel",
			damageLabel: "Scorch Damage",
			cooldown: 22,
			duration: 2,
			castRange: 22,
			damage: 35,
			spiritScaling: 0.95,
			bulletResistReduction: -0.15,
			bonusFireRate: 0,
			buffDuration: 0,
			burstMarkStacks: 0,
			upgrades: [
				{ cooldown: -8 },   // T1
				{ damage: 60, bonusFireRate: 0.18, buffDuration: 7 },   // T2
				{ bulletResistReduction: -0.1, burstMarkStacks: 1 }   // T3
			],
			upgradeNotes: [
				"T1: -8 Ability Cooldown",
				"T2: +60 Scorch Damage, +18 Bonus Fire Rate, +7 Buff Duration",
				"T3: -10 Bullet Resist Reduction, +1 Burst Mark Stacks"
			]
		},
		closeTheDeal: {
			name: "Close The Deal",
			damageLabel: "Damage",
			cooldown: 135,
			castRange: 10,
			damage: 70,
			spiritScaling: 1,
			damagePerMeter: 3,
			damagePerMeterScale: 0.09,
			stunDuration: 0.5,
			upgrades: [
				{ damage: 90 },   // T1
				{ cooldown: -35 },   // T2
				{ damagePerMeter: 8, stunDuration: 0.5 }   // T3
			],
			upgradeNotes: ["T1: +50 Damage", "T2: -35 Ability Cooldown", "T3: +8 Damage Per Meter, +0.5 Stun Duration"],
			notes: ["Stun Duration also scales with scale_function_tech_duration (x1). +75% Bonus damage to under half health targets"]
		}
	},
	doorman: {
		callBell: {
			name: "Call Bell",
			damageLabel: "Explosion Damage",
			cooldown: 18,
			duration: 4,
			radius: 5.5,
			charges: 1,
			chargeCooldown: 7,
			damage: 55,
			spiritScaling: 1.2,
			projectileFuse: 3,
			impactDamage: 40,
			impactDamageScale: 0.7,
			upgrades: [
				{ charges: 1 },   // T1
				{ impactDamage: 30, damage: 40 },   // T2
				{ projectileFuse: 26, radius: 4.5, impactDamageScale: 0.35, spiritScaling: 0.35 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Ability Charges",
				"T2: +30 Impact Damage, +40 Explosion Damage",
				"T3: +26 Projectile Fuse, +4.5m Radius, +0.35 Impact Damage spirit scaling, +0.35 Explosion Damage spirit scaling"
			]
		},
		doorway: {
			name: "Doorway",
			cooldown: 45,
			duration: 15,
			castRange: 50,
			combatBarrier: 0,
			combatBarrierScale: 0,
			barrierDuration: 0,
			doorwayDistance: 65,
			doorwayDistanceScale: 0,
			upgrades: [
				{ duration: 20 },   // T1
				{ combatBarrier: 250, barrierDuration: 12, combatBarrierScale: 1.5 },   // T2
				{ doorwayDistance: 40, castRange: 30, doorwayDistanceScale: 0.15 }   // T3
			],
			upgradeNotes: [
				"T1: +20 Ability Duration",
				"T2: +250 Combat Barrier, +12 Barrier Duration, +1.5 Combat Barrier spirit scaling",
				"T3: +40m Doorway Distance, +30m Ability Cast Range, +0.15 Doorway Distance spirit scaling"
			]
		},
		luggageCart: {
			name: "Luggage Cart",
			damageLabel: "Cart Damage",
			cooldown: 30,
			duration: 6,
			castRange: 20,
			damage: 60,
			spiritScaling: 0.75,
			stunDuration: 0,
			wallImpactDamage: 0,
			wallImpactDamageScale: 0,
			upgrades: [
				{ damage: 80 },   // T1
				{ castRange: 25, wallImpactDamage: 75, wallImpactDamageScale: 0.6 },   // T2
				{ stunDuration: 1.25, cooldown: -15 }   // T3
			],
			upgradeNotes: [
				"T1: +80 Cart Damage",
				"T2: +25m Ability Cast Range, +75 Wall Impact Damage, +0.6 Wall Impact Damage spirit scaling",
				"T3: +1.25 Stun Duration, -15 Ability Cooldown"
			]
		},
		hotelGuest: {
			name: "Hotel Guest",
			damageLabel: "Late Checkout Damage",
			cooldown: 140,
			duration: 6.5,
			castRange: 7,
			damage: 125,
			spiritScaling: 1.5,
			staminaDrain: 0,
			unstoppableWhileHotelOccupied: 0,
			lateCheckoutCooldown: 0,
			lateCheckoutStun: 0,
			upgrades: [
				{ cooldown: -20, staminaDrain: 1 },   // T1
				{ damage: 300, lateCheckoutStun: 1.5 },   // T2
				{ unstoppableWhileHotelOccupied: 1, lateCheckoutCooldown: 15 }   // T3
			],
			upgradeNotes: [
				"T1: -20 Ability Cooldown, +1 Stamina Drain",
				"T2: +150 Damage, +150 Late Checkout Damage, +1.5 Late Checkout Stun",
				"T3: +1 Unstoppable While Hotel Occupied, +15 Late Checkout Cooldown"
			]
		}
	},
	drifter: {
		rend: {
			name: "Rend",
			damageLabel: "Bonus Damage",
			cooldown: 16,
			castRange: 16,
			damage: 40,
			spiritScaling: 1.4,
			damageHeavyMelee: 0,
			damageHeavyMeleeScale: 0,
			debuffDuration: 0,
			useHeavyMelee: 0,
			upgrades: [
				{ damage: 40 },   // T1
				{ cooldown: -8 },   // T2
				{ debuffDuration: 2, useHeavyMelee: 1, damageHeavyMeleeScale: 0.55 }   // T3
			],
			upgradeNotes: [
				"T1: +40 Bonus Damage",
				"T2: -8 Ability Cooldown",
				"T3: +2 Debuff Duration, +1 Use Heavy Melee, +0.55 Damage Heavy Melee spirit scaling, Damage spirit scaling multiplied (game value 0; not applied by abilityAt)"
			],
			notes: [
				"Damage also scales with LightMeleeDamage (x1.2)",
				"Damage Heavy Melee also scales with HeavyMeleeDamage (x0)"
			]
		},
		stalkersMark: {
			name: "Stalker's Mark",
			cooldown: 26,
			duration: 5,
			dotHealthPercent: 0.02,
			dotHealthPercentScale: 0.00015,
			bulletResistReduction: 0,
			healAmpReceivePenaltyPercent: 0,
			healAmpRegenPenaltyPercent: 0,
			upgrades: [
				{ bulletResistReduction: -0.08 },   // T1
				{ duration: 3, cooldown: -10 },   // T2
				{ dotHealthPercent: 0.015, healAmpReceivePenaltyPercent: -0.4, healAmpRegenPenaltyPercent: -0.4 }   // T3
			],
			upgradeNotes: [
				"T1: -8 Bullet Resist Reduction",
				"T2: +3 Ability Duration, -10 Ability Cooldown",
				"T3: +1.5 Dot Health Percent, -40 Heal Amp Receive Penalty Percent, -40 Heal Amp Regen Penalty Percent"
			]
		},
		bloodscent: {
			name: "Bloodscent",
			cooldown: 0,
			castRange: 80,
			ampDamagePercent: 0.15,
			healOnKillPct: 0,
			staminaToRestore: 0,
			moveSpeed: 0,
			upgrades: [
				{ moveSpeed: 3 },   // T1
				{ healOnKillPct: 0.24, staminaToRestore: 2 },   // T2
				{ ampDamagePercent: 0.11 }   // T3
			],
			upgradeNotes: [
				"T1: +3m Bonus Move Speed",
				"T2: +24 Heal On Kill Pct, +2 Stamina To Restore",
				"T3: +11 Amp Damage Percent"
			]
		},
		eternalNight: {
			name: "Eternal Night",
			cooldown: 145,
			duration: 6.5,
			castRange: 100,
			sprintSpeed: 2,
			maxTargets: 2,
			upgrades: [
				{ sprintSpeed: 10 },   // T1
				{ cooldown: -40 },   // T2
				{ duration: 2.5, maxTargets: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +10m Bonus Sprint Speed",
				"T2: -40 Ability Cooldown",
				"T3: +2.5 Ability Duration, +1 Max Targets"
			]
		}
	},
	dynamo: {
		kineticPulse: {
			name: "Kinetic Pulse",
			damageLabel: "Damage",
			cooldown: 26,
			charges: 1,
			chargeCooldown: 5,
			damage: 115,
			spiritScaling: 1.55,
			stompRange: 16,
			slowPercent: 0,
			slowDuration: 0,
			bulletResistReduction: 0,
			upgrades: [
				{ charges: 1 },   // T1
				{ bulletResistReduction: -0.15, slowPercent: 0.24, slowDuration: 4 },   // T2
				{ damage: 135, stompRange: 20 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Ability Charges",
				"T2: -15 Bullet Resist Reduction, +24 Slow Percent, +4 Slow Duration",
				"T3: +135 Damage, +20m Stomp Range"
			]
		},
		quantumEntanglement: {
			name: "Quantum Entanglement",
			cooldown: 20,
			duration: 1.4,
			castRange: 10,
			reduceDebuffs: 0,
			chargeReplenish: 0,
			upgrades: [
				{ castRange: 6 },   // T1
				{ cooldown: -6 },   // T2
				{ reduceDebuffs: 0.5, chargeReplenish: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +6m Ability Cast Range",
				"T2: -6 Ability Cooldown",
				"T3: +50 Reduce Debuffs, +1 Charge Replenish"
			]
		},
		rejuvenatingAurora: {
			name: "Rejuvenating Aurora",
			cooldown: 48,
			channelTime: 5,
			healingPerSecond: 30,
			healingPerSecondScale: 0.4,
			healMaxHealthPercent: 0,
			noChannel: 0,
			moveSpeed: 0,
			movementSpeedBonusDuration: 0,
			upgrades: [
				{ moveSpeed: 4, movementSpeedBonusDuration: 8 },   // T1
				{ cooldown: -20, channelTime: 1 },   // T2
				{ noChannel: 1, healMaxHealthPercent: 0.025 }   // T3
			],
			upgradeNotes: [
				"T1: +4m Movement Speed Bonus, +8 Movement Speed Bonus Duration",
				"T2: -20 Ability Cooldown, +1 Ability Channel Time",
				"T3: +1 No Channel, +2.5 Heal Max Health Percent"
			]
		},
		singularity: {
			name: "Singularity",
			damageLabel: "DPS",
			cooldown: 250,
			channelTime: 2.75,
			vacuumRadius: 7,
			damage: 75,
			spiritScaling: 0.28,
			dPSPercentHealth: 0,
			upgrades: [
				{ vacuumRadius: 2 },   // T1
				{ channelTime: 0.75 },   // T2
				{ dPSPercentHealth: 0.06 }   // T3
			],
			upgradeNotes: ["T1: +2m Vacuum Radius", "T2: +0.75 Ability Channel Time", "T3: +6 DPSPercent Health"]
		}
	},
	graves: {
		jarOfDead: {
			name: "Jar of Dead",
			damageLabel: "Damage",
			cooldown: 0,
			charges: 4,
			chargeCooldown: 13,
			damage: 16,
			spiritScaling: 0.25,
			skullCount: 4,
			skullLifetime: 10,
			healPerPickup: 0,
			healPerPickupScale: 0,
			slowPercent: 0,
			slowDuration: 0,
			upgrades: [
				{ healPerPickup: 5, healPerPickupScale: 0.16 },   // T1
				{ slowPercent: 0.24, slowDuration: 1 },   // T2
				{ skullCount: 2, skullLifetime: 4 }   // T3
			],
			upgradeNotes: [
				"T1: +5 Heal Per Pickup, +0.16 Heal Per Pickup spirit scaling",
				"T2: +24 Slow Percent, +1 Slow Duration",
				"T3: +2 Skull Count, +4 Skull Lifetime"
			]
		},
		graspingHands: {
			name: "Grasping Hands",
			damageLabel: "Damage",
			cooldown: 34,
			duration: 5,
			castRange: 24,
			damage: 90,
			spiritScaling: 1.6,
			zombieWallLength: 14,
			zombieWallLengthScale: 0.05,
			immobilizeDuration: 1,
			summonCount: 1,
			upgrades: [
				{ duration: 2 },   // T1
				{ damage: 90, zombieWallLength: 10 },   // T2
				{ immobilizeDuration: 0.75, summonCount: 1, cooldown: -14 }   // T3
			],
			upgradeNotes: [
				"T1: +2 Ability Duration",
				"T2: +90 Damage, +10m Zombie Wall Length",
				"T3: +0.75 Immobilize Duration, +1 Summon Count, -14 Ability Cooldown"
			]
		},
		essenceTheft: {
			name: "Essence Theft",
			damageLabel: "Max Stolen Attack Damage",
			cooldown: 0,
			duration: 4,
			damage: 25,
			spiritScaling: 0.25,
			maxStolenSpiritResist: 0.1,
			maxStolenTargets: 3,
			skullBuildUp: 0,
			zombieMeleeBuildUp: 0,
			zombieExplosionBuildUp: 0,
			upgrades: [
				{ maxStolenSpiritResist: 0.05 },   // T1
				{ damage: 20 },   // T2
				{ skullBuildUp: 0.15, zombieMeleeBuildUp: 0.15, zombieExplosionBuildUp: 1, maxStolenTargets: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +5 Max Stolen Spirit Resist",
				"T2: +20 Max Stolen Attack Damage",
				"T3: +0.15 Skull Build Up, +0.15 Zombie Melee Build Up, +1 Zombie Explosion Build Up, +1 Max Stolen Targets"
			]
		},
		borrowedDecree: {
			name: "Borrowed Decree",
			damageLabel: "Damage",
			cooldown: 140,
			duration: 16,
			durationScale: 0.04,
			castRange: 20,
			damage: 115,
			spiritScaling: 1.27,
			summonFrequency: 4,
			summonMeleeDamage: 40,
			summonMeleeDamageScale: 0.5,
			moveSpeedPercent: 0,
			currentHealthDamagePercentage: 0,
			upgrades: [
				{ cooldown: -15, moveSpeedPercent: 0.25 },   // T1
				{ duration: 10, summonFrequency: -0.3 },   // T2
				{ currentHealthDamagePercentage: 0.05 }   // T3
			],
			upgradeNotes: [
				"T1: -15 Ability Cooldown, +25 Move Speed Percent",
				"T2: +10 Ability Duration, -0.3 Summon Frequency",
				"T3: +5 Current Health Damage Percentage"
			]
		}
	},
	greyTalon: {
		chargedShot: {
			name: "Charged Shot",
			damageLabel: "Damage",
			cooldown: 17,
			charges: 1,
			chargeCooldown: 4,
			damage: 80,
			spiritScaling: 1,
			upgrades: [
				{ charges: 1 },   // T1
				{ damage: 54 },   // T2
				{ chargeCooldown: -3, spiritScaling: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Ability Charges",
				"T2: +54 Damage",
				"T3: -3 Ability Cooldown Between Charge, +1 Damage spirit scaling"
			]
		},
		rainOfArrows: {
			name: "Rain of Arrows",
			damageLabel: "Weapon Damage Bonus",
			cooldown: 25,
			duration: 4,
			damage: 3,
			spiritScaling: 0,
			slowPercent: 0,
			slowDuration: 0,
			bulletLifesteal: 0,
			spiritLifesteal: 0,
			bulletEvasion: 0,
			upgrades: [
				{ damage: 3, slowPercent: 0.24, slowDuration: 1.5 },   // T1
				{ cooldown: -12 },   // T2
				{ bulletLifesteal: 0.3, spiritLifesteal: 0.3, bulletEvasion: 0.3 }   // T3
			],
			upgradeNotes: [
				"T1: +3 Weapon Damage Bonus, +24 Slow Percent, +1.5 Slow Duration",
				"T2: -12 Ability Cooldown",
				"T3: +30 Bullet Lifesteal Percent, +30 Spirit Lifesteal Percent, +30 Evasion Percent"
			]
		},
		spiritSnare: {
			name: "Spirit Snare",
			damageLabel: "Damage",
			cooldown: 34,
			radius: 6.5,
			damage: 25,
			spiritScaling: 0,
			tetherDuration: 2.25,
			bulletArmorReduction: 0,
			debuffDuration: 0,
			upgrades: [
				{ cooldown: -20 },   // T1
				{ bulletArmorReduction: -0.15, debuffDuration: 10 },   // T2
				{ tetherDuration: 1, radius: 1.5 }   // T3
			],
			upgradeNotes: [
				"T1: -20 Ability Cooldown",
				"T2: -15 Bullet Armor Reduction, +10 Debuff Duration",
				"T3: +1 Tether Duration, +1.5m Radius"
			]
		},
		guidedOwl: {
			name: "Guided Owl",
			damageLabel: "Damage",
			cooldown: 125,
			damage: 230,
			spiritScaling: 0.937,
			lowHealthEnemyThresholdPct: 0,
			upgrades: [
				{ damage: 85 },   // T1
				{ cooldown: -40 },   // T2
				{ lowHealthEnemyThresholdPct: 0.22 }   // T3
			],
			upgradeNotes: ["T1: +85 Damage", "T2: -40 Ability Cooldown", "T3: +22 Low Health Enemy Threshold Pct"]
		}
	},
	haze: {
		sleepDagger: {
			name: "Sleep Dagger",
			damageLabel: "Damage",
			cooldown: 30,
			damage: 65,
			spiritScaling: 2.2,
			sleepDuration: 2.75,
			sleepWakeUpDelay: 0.1,
			sleepWakeUpDelayScale: 0.002,
			bulletResistReduction: 0,
			bulletResistReductionDuration: 0,
			fixationStacks: 0,
			slowPercent: 0,
			groundDashReductionPercent: 0,
			debuffDuration: 0,
			upgrades: [
				{ bulletResistReduction: -0.1, bulletResistReductionDuration: 6 },   // T1
				{ sleepDuration: 1, fixationStacks: 15 },   // T2
				{ cooldown: -17, slowPercent: 0.4, groundDashReductionPercent: -0.45, debuffDuration: 3 }   // T3
			],
			upgradeNotes: [
				"T1: -10 Bullet Resist Reduction, +6 Bullet Resist Reduction Duration",
				"T2: +1 Sleep Duration, +15 Fixation Stacks",
				"T3: -17 Ability Cooldown, +40 Slow Percent, -45 Ground Dash Reduction Percent, +3 Debuff Duration"
			]
		},
		smokeBomb: {
			name: "Smoke Bomb",
			cooldown: 33,
			duration: 8,
			durationScale: 0.1,
			charges: 1,
			chargeCooldown: 0,
			invisMoveSpeedMod: 0,
			dispelOnUse: 0,
			postInvisBuffDuration: 0,
			bulletLifesteal: 0,
			upgrades: [
				{ invisMoveSpeedMod: 7 },   // T1
				{ charges: 2, chargeCooldown: 7 },   // T2
				{ bulletLifesteal: 0.5, postInvisBuffDuration: 5, dispelOnUse: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +7m Invis Move Speed Mod",
				"T2: +2 Ability Charges, +7 Ability Cooldown Between Charge",
				"T3: +50 Bullet Lifesteal, +5 Post Invis Buff Duration, +1 Dispel On Use"
			]
		},
		fixation: {
			name: "Fixation",
			damageLabel: "Damage Bonus Fixed Per Stack",
			cooldown: 0,
			duration: 6,
			damage: 0.2,
			spiritScaling: 0,
			maxStacks: 40,
			procDamage: 0,
			procDamageScale: 0,
			procDamageStackCount: 0,
			slowPercent: 0,
			slowDuration: 0,
			upgrades: [
				{ procDamage: 40, procDamageScale: 0.8, procDamageStackCount: 20, slowPercent: 0.12, slowDuration: 2 },   // T1
				{ duration: 5, maxStacks: 40 },   // T2
				{ damage: 0.11 }   // T3
			],
			upgradeNotes: [
				"T1: +40 Proc Damage, +0.8 Proc Damage spirit scaling, +20 Proc Damage Stack Count, +12 Slow Percent, +2 Slow Duration",
				"T2: +5 Ability Duration, +40 Max Stacks",
				"T3: +0.11 Damage Bonus Fixed Per Stack, Damage Bonus Fixed Per Stack changed (game value 0.0, EBaseWeaponDamageIncrease; not applied by abilityAt)"
			],
			notes: ["Damage Bonus Fixed Per Stack also scales with BaseWeaponDamageIncrease (x0)"]
		},
		bulletDance: {
			name: "Bullet Dance",
			damageLabel: "Weapon Damage Bonus",
			cooldown: 165,
			duration: 3.5,
			durationScale: 0.03,
			radius: 16,
			damage: 7,
			spiritScaling: 0,
			channelMoveSpeed: 4,
			bonusFireRate: 0.25,
			bulletEvasion: 0.3,
			upgrades: [
				{ damage: 7 },   // T1
				{ bonusFireRate: 0.1, channelMoveSpeed: 3 },   // T2
				{ bulletEvasion: 0.4, cooldown: -65 }   // T3
			],
			upgradeNotes: [
				"T1: +7 Weapon Damage Bonus",
				"T2: +10 Bonus Fire Rate, +3m Channel Move Speed",
				"T3: +40 Evasion Percent, -65 Ability Cooldown"
			]
		}
	},
	holliday: {
		powderKeg: {
			name: "Powder Keg",
			damageLabel: "Impact Damage",
			cooldown: 28,
			radius: 6,
			charges: 2,
			chargeCooldown: 7.5,
			damage: 40,
			spiritScaling: 0.525,
			dPS: 13.333,
			dPSScale: 0.175,
			upgrades: [
				{ cooldown: -10 },   // T1
				{ charges: 1 },   // T2
				{ damage: 40, dPS: 13.333, chargeCooldown: -5, spiritScaling: 0.25, dPSScale: 0.083 }   // T3
			],
			upgradeNotes: [
				"T1: -10 Ability Cooldown",
				"T2: +1 Ability Charges",
				"T3: +40 Impact Damage, +13.333 DPS, -5 Ability Cooldown Between Charge, +0.25 Impact Damage spirit scaling, +0.083 DPS spirit scaling"
			]
		},
		bouncePad: {
			name: "Bounce Pad",
			damageLabel: "Stomp Damage",
			cooldown: 41,
			duration: 22,
			radius: 9,
			charges: 1,
			chargeCooldown: 3.5,
			damage: 60,
			spiritScaling: 0.372,
			stompStunDuration: 0,
			speedOnLand: 0,
			speedOnLandDuration: 0,
			upgrades: [
				{ cooldown: -10 },   // T1
				{ speedOnLand: 4, speedOnLandDuration: 4 },   // T2
				{ stompStunDuration: 0.7 }   // T3
			],
			upgradeNotes: [
				"T1: -10 Ability Cooldown",
				"T2: +4m Speed On Land, +4 Speed On Land Duration",
				"T3: +0.7 Stomp Stun Duration"
			]
		},
		crackshot: {
			name: "Crackshot",
			damageLabel: "Damage",
			cooldown: 20,
			damage: 55,
			spiritScaling: 1.116,
			fadingSlowPercent: 0.4,
			abilityCooldownPerHeadshot: 0,
			abilityCooldownPerHeadshotNPC: 0,
			bulletResistReduction: 0,
			bulletResistReductionDuration: 0,
			upgrades: [
				{ fadingSlowPercent: 0.2 },   // T1
				{ damage: 49.5, bulletResistReduction: -0.06, bulletResistReductionDuration: 5 },   // T2
				{ abilityCooldownPerHeadshot: -6, abilityCooldownPerHeadshotNPC: -3 }   // T3
			],
			upgradeNotes: [
				"T1: +20 Fading Slow Percent",
				"T2: +49.5 Damage, -6 Bullet Resist Reduction, +5 Bullet Resist Reduction Duration",
				"T3: -6 Ability Cooldown Per Headshot, -3 Ability Cooldown Per Headshot NPC"
			]
		},
		spiritLasso: {
			name: "Spirit Lasso",
			damageLabel: "Damage",
			cooldown: 130,
			duration: 2.25,
			castRange: 20,
			damage: 80,
			spiritScaling: 0.93,
			upgrades: [
				{ damage: 80 },   // T1
				{ duration: 0.75 },   // T2
				{ cooldown: -40 }   // T3
			],
			upgradeNotes: ["T1: +80 Damage", "T2: +0.75 Ability Duration", "T3: -40 Ability Cooldown"]
		}
	},
	infernus: {
		napalm: {
			name: "Napalm",
			damageLabel: "Damage",
			cooldown: 25,
			castRange: 20,
			charges: 1,
			chargeCooldown: 6,
			damage: 40,
			spiritScaling: 0.6,
			incomingDamagePercentFromCaster: 0.16,
			spiritLifesteal: 0,
			healAmpReceivePenaltyPercent: 0,
			healAmpRegenPenaltyPercent: 0,
			upgrades: [
				{ charges: 1 },   // T1
				{ spiritLifesteal: 0.15 },   // T2
				{ incomingDamagePercentFromCaster: 0.17, healAmpReceivePenaltyPercent: -0.33, healAmpRegenPenaltyPercent: -0.33 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Ability Charges",
				"T2: +15 Lifesteal Percent Hero",
				"T3: +17 Incoming Damage Percent From Caster, -33 Heal Amp Receive Penalty Percent, -33 Heal Amp Regen Penalty Percent"
			]
		},
		flameDash: {
			name: "Flame Dash",
			damageLabel: "DPS",
			cooldown: 38,
			duration: 3,
			charges: 1,
			chargeCooldown: 0,
			damage: 30,
			spiritScaling: 0.7,
			groundFlameDuration: 4,
			upgrades: [
				{ cooldown: -12 },   // T1
				{ damage: 20, groundFlameDuration: 1 },   // T2
				{ charges: 2, chargeCooldown: 14 }   // T3
			],
			upgradeNotes: [
				"T1: -12 Ability Cooldown",
				"T2: +20 DPS, +1 Ground Flame Duration",
				"T3: +2 Ability Charges, +14 Ability Cooldown Between Charge"
			]
		},
		afterburn: {
			name: "Afterburn",
			damageLabel: "DPS",
			cooldown: 0,
			burnDuration: 3,
			damage: 14,
			spiritScaling: 0.66,
			outgoingTechDamagePercent: 0,
			upgrades: [
				{ damage: 16 },   // T1
				{ outgoingTechDamagePercent: -0.35 },   // T2
				{ burnDuration: 3 }   // T3
			],
			upgradeNotes: ["T1: +16 DPS", "T2: -35 Outgoing Spirit Damage Percent", "T3: +3 Burn Duration"]
		},
		concussiveCombustion: {
			name: "Concussive Combustion",
			damageLabel: "Damage",
			cooldown: 190,
			radius: 12,
			damage: 125,
			spiritScaling: 0.975,
			stunDuration: 1.25,
			spiritLifesteal: 0,
			upgrades: [
				{ damage: 100 },   // T1
				{ cooldown: -65, spiritLifesteal: 1 },   // T2
				{ stunDuration: 0.9, radius: 10 }   // T3
			],
			upgradeNotes: [
				"T1: +100 Damage",
				"T2: -65 Ability Cooldown, +100 Life Steal Percent On Hit",
				"T3: +0.9 Stun Duration, +10m Radius"
			]
		}
	},
	ivy: {
		entanglingThorns: {
			name: "Entangling Thorns",
			damageLabel: "DPS",
			cooldown: 32,
			duration: 4,
			radius: 6,
			charges: 1,
			chargeCooldown: 5,
			damage: 40,
			spiritScaling: 0.55,
			timeToEntangle: 0,
			entangleDuration: 0,
			upgrades: [
				{ charges: 1 },   // T1
				{ radius: 2, spiritScaling: 0.5 },   // T2
				{ timeToEntangle: 2, entangleDuration: 1.6 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Ability Charges",
				"T2: +2m Radius, +0.5 DPS spirit scaling",
				"T3: +2 Time To Entangle, +1.6 Entangle Duration"
			]
		},
		kudzuConnection: {
			name: "Kudzu Connection",
			cooldown: 37,
			duration: 12,
			castRange: 16,
			bonusFireRate: 0.1,
			bonusFireRateScale: 0.0018,
			bulletLifesteal: 0.15,
			bulletLifestealScale: 0.0015,
			moveSpeed: 0,
			upgrades: [
				{ moveSpeed: 2 },   // T1
				{ bonusFireRate: 0.08, bulletLifesteal: 0.08 },   // T2
				{ duration: -13, cooldown: -37 }   // T3
			],
			upgradeNotes: [
				"T1: +2m Move Speed Bonus",
				"T2: +8 Bonus Fire Rate, +8 Bullet Lifesteal Percent",
				"T3: -13 Ability Duration, -37 Ability Cooldown"
			]
		},
		stoneForm: {
			name: "Stone Form",
			damageLabel: "Damage",
			cooldown: 40,
			duration: 3,
			radius: 5.75,
			damage: 75,
			spiritScaling: 0.6,
			maxHealthRegen: 0.06,
			stunDuration: 0.75,
			upgrades: [
				{ maxHealthRegen: 0.06 },   // T1
				{ cooldown: -25 },   // T2
				{ stunDuration: 0.75, spiritScaling: 1.5 }   // T3
			],
			upgradeNotes: [
				"T1: +6 Max Health Regen",
				"T2: -25 Ability Cooldown",
				"T3: +0.75 Stun Duration, +1.5 Damage spirit scaling"
			]
		},
		airDrop: {
			name: "Air Drop",
			damageLabel: "Explode Damage",
			cooldown: 100,
			duration: 21,
			castRange: 22,
			damage: 115,
			spiritScaling: 0.7,
			airDropBulletShield: 0,
			airDropBulletShieldScale: 0,
			slowPercent: 0,
			debuffDuration: 0,
			silenceDuration: 0,
			upgrades: [
				{ airDropBulletShield: 300, airDropBulletShieldScale: 0.7 },   // T1
				{ slowPercent: 0.32, debuffDuration: 3 },   // T2
				{ silenceDuration: 3, spiritScaling: 1.5, airDropBulletShieldScale: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +300 Air Drop Bullet Shield, +0.7 Air Drop Bullet Shield spirit scaling",
				"T2: +32 Slow Percent, +3 Debuff Duration",
				"T3: +3 Silence Duration, +1.5 Explode Damage spirit scaling, +1 Air Drop Bullet Shield spirit scaling"
			]
		}
	},
	kelvin: {
		frostGrenade: {
			name: "Frost Grenade",
			damageLabel: "Damage",
			cooldown: 30,
			radius: 6.5,
			charges: 2,
			chargeCooldown: 7,
			damage: 60,
			spiritScaling: 0.6,
			healAmount: 60,
			healAmountScale: 0.8,
			pauseStaminaRegen: 0,
			auraHPS: 0,
			auraHPSScale: 0.8,
			upgrades: [
				{ damage: 30, healAmount: 30 },   // T1
				{ pauseStaminaRegen: 1, cooldown: -10 },   // T2
				{ radius: 2, healAmountScale: 0.9, spiritScaling: 0.8 }   // T3
			],
			upgradeNotes: [
				"T1: +30 Damage, +30 Heal Amount",
				"T2: +1 Pause Stamina Regen, -10 Ability Cooldown",
				"T3: +2m Radius, +0.9 Heal Amount spirit scaling, +0.8 Damage spirit scaling"
			]
		},
		icePath: {
			name: "Ice Path",
			cooldown: 50,
			duration: 8,
			moveSpeed: 2,
			bulletResistance: 0,
			pctSpiritPower: 0,
			spiritPower: 0,
			explodeDamage: 0,
			explodeDamageScale: 0.8,
			upgrades: [
				{ moveSpeed: 2, bulletResistance: 0.35 },   // T1
				{ cooldown: -25 },   // T2
				{ pctSpiritPower: 0.35, spiritPower: 20 }   // T3
			],
			upgradeNotes: [
				"T1: +2m Move Speed Bonus, +35 Bullet Resist",
				"T2: -25 Ability Cooldown",
				"T3: +35 Bonus Spirit Pct, +20 Bonus Spirit"
			]
		},
		arcticBeam: {
			name: "Arctic Beam",
			damageLabel: "DPS",
			cooldown: 28,
			duration: 5,
			damage: 45,
			spiritScaling: 0.38,
			maxSlowPercent: 0.16,
			maxFireRateSlowPercent: 0.2,
			beamSplitCount: 0,
			beamSplit: 0,
			beamHealPerSecond: 0,
			beamHealPerSecondScale: 0.6,
			upgrades: [
				{ maxSlowPercent: 0.2, maxFireRateSlowPercent: 0.25 },   // T1
				{ damage: 20, spiritScaling: 0.6 },   // T2
				{ beamSplit: 10, beamSplitCount: 2, cooldown: -13 }   // T3
			],
			upgradeNotes: [
				"T1: +20 Max Slow Percent, +25 Max Fire Rate Slow Percent",
				"T2: +20 DPS, +0.6 DPS spirit scaling",
				"T3: +10m Beam Split, Beam Split changed (game value 0.93, ETechRange; not applied by abilityAt), +2 Beam Split Count, -13 Ability Cooldown"
			],
			notes: ["Beam Split also scales with TechRange (x0)"]
		},
		frozenShelter: {
			name: "Frozen Shelter",
			cooldown: 185,
			duration: 5,
			castRange: 8,
			radius: 10,
			hpRegen: 90,
			hpRegenScale: 0.2,
			purgeOnCast: 0,
			upgrades: [
				{ cooldown: -20 },   // T1
				{ duration: 1.5 },   // T2
				{ hpRegen: 65, hpRegenScale: 1, purgeOnCast: 1 }   // T3
			],
			upgradeNotes: [
				"T1: -20 Ability Cooldown",
				"T2: +1.5 Ability Duration",
				"T3: +65 Bonus Health Regen, +1 Bonus Health Regen spirit scaling, +1 Purge On Cast"
			]
		}
	},
	ladyGeist: {
		essenceBomb: {
			name: "Essence Bomb",
			damageLabel: "Damage",
			cooldown: 14,
			radius: 7,
			damage: 90,
			spiritScaling: 1.22,
			bloodSpillDPSPercent: 0,
			bloodSpillDuration: 0,
			upgrades: [
				{ cooldown: -5 },   // T1
				{ damage: 50, radius: 2 },   // T2
				{ bloodSpillDPSPercent: 0.3, bloodSpillDuration: 6 }   // T3
			],
			upgradeNotes: [
				"T1: -5 Ability Cooldown",
				"T2: +50 Damage, +2m Radius",
				"T3: +30 Blood Spill DPSPercent, +6 Blood Spill Duration"
			]
		},
		lifeDrain: {
			name: "Life Drain",
			cooldown: 34,
			duration: 2.5,
			castRange: 18,
			charges: 1,
			chargeCooldown: 0,
			lifeDrainPerSecond: 24,
			lifeDrainPerSecondScale: 0.323,
			upgrades: [
				{ lifeDrainPerSecond: 13 },   // T1
				{ duration: 2.5 },   // T2
				{ charges: 3, chargeCooldown: 0.1, lifeDrainPerSecondScale: 0.45 }   // T3
			],
			upgradeNotes: [
				"T1: +13 Life Drain Per Second",
				"T2: +2.5 Ability Duration",
				"T3: +3 Ability Charges, +0.1 Ability Cooldown Between Charge, +0.45 Life Drain Per Second spirit scaling"
			]
		},
		malice: {
			name: "Malice",
			cooldown: 6,
			healthToDamage: 23,
			healthToDamageScale: 0.558,
			numBloodShards: 3,
			spreadAngleDegrees: 6,
			vulnerabilityPerStack: 0.07,
			upgrades: [
				{ cooldown: -3 },   // T1
				{ healthToDamage: 25.2, numBloodShards: 4, spreadAngleDegrees: 22 },   // T2
				{ vulnerabilityPerStack: 0.08 }   // T3
			],
			upgradeNotes: [
				"T1: -3 Ability Cooldown",
				"T2: +25.2 Health To Damage, +4 Num Blood Shards, +22 Spread Angle Degrees",
				"T3: +8 Vulnerability Per Stack"
			]
		},
		soulExchange: {
			name: "Soul Exchange",
			cooldown: 220,
			duration: 0.25,
			castRange: 5.5,
			selfBuffDuration: 0,
			spiritResistance: 0,
			bonusFireRate: 0,
			spiritPower: 0,
			silenceDuration: 0,
			silenceRadius: 0,
			upgrades: [
				{ cooldown: -50 },   // T1
				{ silenceDuration: 3, silenceRadius: 25 },   // T2
				{ selfBuffDuration: 8, spiritResistance: 0.5, bonusFireRate: 0.4, spiritPower: 60 }   // T3
			],
			upgradeNotes: [
				"T1: -50 Ability Cooldown",
				"T2: +3 Silence Duration, +25m Silence Radius",
				"T3: +8 Self Buff Duration, +50 Spirit Resist, +40 Bonus Fire Rate, +60 Bonus Spirit"
			]
		}
	},
	lash: {
		groundStrike: {
			name: "Ground Strike",
			damageLabel: "Stomp Damage",
			cooldown: 18,
			radius: 10,
			damage: 60,
			spiritScaling: 0.79,
			stompDamagePerMeterPrimary: 5.5,
			stompDamagePerMeterPrimaryScale: 0.04,
			stompDamagePerMeterSecondary: 4.2,
			stompDamagePerMeterSecondaryScale: 0.008,
			slowDuration: 0,
			enemySlowPct: 0,
			stompBounceHeight: 0,
			tossDuration: 0,
			upgrades: [
				{ cooldown: -10 },   // T1
				{ enemySlowPct: 0.4, slowDuration: 3, stompBounceHeight: 400, tossDuration: 1 },   // T2
				{ stompDamagePerMeterPrimaryScale: 0.04, stompDamagePerMeterSecondaryScale: 0.008 }   // T3
			],
			upgradeNotes: [
				"T1: -10 Ability Cooldown",
				"T2: +40 Enemy Slow Pct, +3 Slow Duration, +400 Stomp Bounce Height, +1 Toss Duration",
				"T3: +0.04 Stomp Damage Per Meter Primary spirit scaling, Stomp Damage Per Meter Primary multiplied (game value 120; not applied by abilityAt), +0.008 Stomp Damage Per Meter Secondary spirit scaling, Stomp Damage Per Meter Secondary multiplied (game value 120; not applied by abilityAt)"
			]
		},
		grapple: {
			name: "Grapple",
			cooldown: 35,
			castRange: 30,
			charges: 1,
			chargeCooldown: 2,
			restoreStaminaOnUse: 0,
			weaponDamageBonus: 0,
			weaponDamageBonusDuration: 0,
			airControlPercent: 0,
			upgrades: [
				{ cooldown: -17 },   // T1
				{ castRange: 20, weaponDamageBonus: 7, weaponDamageBonusDuration: 6 },   // T2
				{ charges: 1, restoreStaminaOnUse: 1, airControlPercent: 0.6 }   // T3
			],
			upgradeNotes: [
				"T1: -17 Ability Cooldown",
				"T2: +20m Ability Cast Range, +7 Weapon Damage Bonus, +6 Weapon Damage Bonus Duration",
				"T3: +1 Ability Charges, +1 Restore Stamina On Use, +60 Air Control Percent"
			]
		},
		flog: {
			name: "Flog",
			damageLabel: "Damage",
			cooldown: 26,
			castRange: 20,
			damage: 65,
			spiritScaling: 0.85,
			targetingConeAngle: 40,
			enemySlowPct: 0,
			enemySlowDuration: 0,
			healPctVsNonHeroes: 0.16,
			healPctVsHeroes: 0.4,
			fireRateSlow: 0,
			upgrades: [
				{ enemySlowDuration: 3, enemySlowPct: 0.28 },   // T1
				{ cooldown: -16, fireRateSlow: 0.3 },   // T2
				{ damage: 80, targetingConeAngle: 25, healPctVsHeroes: 0.15, healPctVsNonHeroes: 0.06 }   // T3
			],
			upgradeNotes: [
				"T1: +3 Enemy Slow Duration, +28 Enemy Slow Pct",
				"T2: -16 Ability Cooldown, +30 Fire Rate Slow",
				"T3: +80 Damage, +25 Targeting Cone Angle, +15 Heal Pct Vs Heroes, +6 Heal Pct Vs Non Heroes"
			]
		},
		deathSlam: {
			name: "Death Slam",
			damageLabel: "Impact Damage",
			cooldown: 170,
			castRange: 20,
			damage: 105,
			spiritScaling: 0.975,
			throwDistance: 14,
			throwDistanceScale: 0.14,
			stunDuration: 0,
			upgrades: [
				{ throwDistance: 12 },   // T1
				{ cooldown: -35 },   // T2
				{ stunDuration: 1.2, castRange: 6 }   // T3
			],
			upgradeNotes: [
				"T1: +12m Throw Distance",
				"T2: -35 Ability Cooldown",
				"T3: +1.2 Stun Duration, +6m Ability Cast Range"
			]
		}
	},
	mcginnis: {
		miniTurret: {
			name: "Mini Turret",
			damageLabel: "Turret DPS",
			cooldown: 18,
			castRange: 20,
			charges: 1,
			chargeCooldown: 3,
			damage: 24,
			spiritScaling: 0.42,
			turretAttackRange: 30,
			turretLifetime: 35,
			attackSpeedMult: 1,
			upgrades: [
				{ turretAttackRange: 10, damage: 10 },   // T1
				{ charges: 2 },   // T2
				{ attackSpeedMult: 0.25, turretLifetime: 12 }   // T3
			],
			upgradeNotes: [
				"T1: +10m Turret Attack Range, +10 Turret DPS",
				"T2: +2 Ability Charges",
				"T3: +25 Attack Speed Mult, +12 Turret Lifetime"
			]
		},
		medicinalSpecter: {
			name: "Medicinal Specter",
			cooldown: 50,
			duration: 6.5,
			castRange: 15,
			healRadius: 6,
			hpRegen: 25,
			hpRegenScale: 0.3,
			maxHealthRegenPct: 0,
			staminaCooldownReduction: 0,
			spiritResistance: 0,
			upgrades: [
				{ duration: 1.5 },   // T1
				{ cooldown: -20, staminaCooldownReduction: 1 },   // T2
				{ maxHealthRegenPct: 0.02, healRadius: 3, spiritResistance: 0.4 }   // T3
			],
			upgradeNotes: [
				"T1: +1.5 Ability Duration",
				"T2: -20 Ability Cooldown, +100 Stamina Cooldown Reduction",
				"T3: +2 Max Health Regen Pct, +3m Heal Radius, +40 Spirit Resist"
			]
		},
		spectralWall: {
			name: "Spectral Wall",
			damageLabel: "Damage",
			cooldown: 50,
			duration: 6,
			castRange: 50,
			damage: 60,
			spiritScaling: 0.731,
			bonusDamagePercent: 0,
			debuffDuration: 0,
			slowPercent: 0.16,
			createTurrets: 0,
			turretLifeTime: 0,
			upgrades: [
				{ bonusDamagePercent: 0.2, debuffDuration: 7 },   // T1
				{ cooldown: -20, duration: 2 },   // T2
				{ createTurrets: 2, turretLifeTime: 8, slowPercent: 0.24 }   // T3
			],
			upgradeNotes: [
				"T1: +20 Bonus Damage Percent, +7 Debuff Duration",
				"T2: -20 Ability Cooldown, +2 Ability Duration",
				"T3: +2 Create Turrets, +8 Turret Life Time, +24 Slow Percent"
			]
		},
		heavyBarrage: {
			name: "Heavy Barrage",
			damageLabel: "Damage Per Rocket",
			cooldown: 200,
			duration: 8,
			castRange: 36,
			damage: 21,
			spiritScaling: 0.2,
			explosionRadius: 4.5,
			moveSlowPercent: 0,
			enemyDashSlowPercent: 0,
			moveSlowDuration: 0,
			upgrades: [
				{ moveSlowPercent: 0.24, enemyDashSlowPercent: -0.16, moveSlowDuration: 1 },   // T1
				{ cooldown: -45, duration: 6 },   // T2
				{ damage: 15, spiritScaling: 0.16, explosionRadius: 2 }   // T3
			],
			upgradeNotes: [
				"T1: +24 Move Slow Percent, -16 Enemy Dash Slow Percent, +1 Move Slow Duration",
				"T2: -45 Ability Cooldown, +6 Ability Duration",
				"T3: +15 Damage Per Rocket, +0.16 Damage Per Rocket spirit scaling, +2m Explosion Radius"
			]
		}
	},
	mina: {
		rake: {
			name: "Rake",
			damageLabel: "Damage",
			cooldown: 16,
			castRange: 10,
			damage: 60,
			spiritScaling: 0,
			missingHealthDamagePercentage: 0.06,
			rakeHealPerKill: 25,
			rakeHealPerKillScale: 0.3,
			upgrades: [
				{ damage: 60 },   // T1
				{ rakeHealPerKill: 30, cooldown: -8 },   // T2
				{ missingHealthDamagePercentage: 0.07, rakeHealPerKillScale: 1.2 }   // T3
			],
			upgradeNotes: [
				"T1: +60 Damage",
				"T2: +30 Rake Heal Per Kill, -8 Ability Cooldown",
				"T3: +7 Missing Health Damage Percentage, +1.2 Rake Heal Per Kill spirit scaling"
			],
			notes: ["Damage also scales with StatsCount (x1)"]
		},
		sanguineRetreat: {
			name: "Sanguine Retreat",
			cooldown: 32,
			duration: 0.65,
			castRange: 9,
			castRangeScale: 0.02,
			maxRecasts: 1,
			buffDuration: 0,
			bonusBullets: 0,
			bonusFireRate: 0,
			upgrades: [
				{ bonusFireRate: 0.25, buffDuration: 8, bonusBullets: 8 },   // T1
				{ cooldown: -10 },   // T2
				{ maxRecasts: 1, castRange: 4 }   // T3
			],
			upgradeNotes: [
				"T1: +25 Bonus Fire Rate, +8 Buff Duration, +8 Bonus Bullets",
				"T2: -10 Ability Cooldown",
				"T3: +1 Max Recasts, +4m Ability Cast Range"
			]
		},
		loveBites: {
			name: "Love Bites",
			damageLabel: "Bonus Damage",
			cooldown: 0,
			damage: 45,
			spiritScaling: 1.85,
			magicDamagePerBullet: 4,
			magicDamagePerBulletScale: 0.09,
			perTargetCooldown: 10,
			slowPercent: 0,
			slowDuration: 0,
			bonusFireRate: 0,
			buffDuration: 0,
			upgrades: [
				{ slowDuration: 3, slowPercent: 0.24 },   // T1
				{ magicDamagePerBullet: 3, damage: 45 },   // T2
				{ perTargetCooldown: -5, bonusFireRate: 0.25, buffDuration: 5 }   // T3
			],
			upgradeNotes: [
				"T1: +3 Slow Duration, +24 Slow Percent",
				"T2: +3 Magic Damage Per Bullet, +45 Bonus Damage",
				"T3: -5 Per Target Cooldown, +25 Bonus Fire Rate, +5 Buff Duration"
			]
		},
		noxNostra: {
			name: "Nox Nostra",
			damageLabel: "Damage",
			cooldown: 150,
			castRange: 40,
			damage: 4.6,
			spiritScaling: 0.094,
			currentHealthPercent: 0,
			upgrades: [
				{ damage: 1.9 },   // T1
				{ cooldown: -45 },   // T2
				{ currentHealthPercent: 0.005 }   // T3
			],
			upgradeNotes: ["T1: +1.9 Damage", "T2: -45 Ability Cooldown", "T3: +0.5 Current Health Percent"]
		}
	},
	mirage: {
		fireScarabs: {
			name: "Fire Scarabs",
			damageLabel: "DPS",
			cooldown: 35,
			charges: 2,
			chargeCooldown: 1,
			damage: 8,
			spiritScaling: 0.1,
			outgoingDamagePenaltyPercent: -0.2,
			stealDuration: 5,
			upgrades: [
				{ damage: 7 },   // T1
				{ charges: 1, stealDuration: 2 },   // T2
				{ outgoingDamagePenaltyPercent: -0.15, spiritScaling: 0.13 }   // T3
			],
			upgradeNotes: [
				"T1: +7 DPS",
				"T2: +1 Ability Charges, +2 Steal Duration",
				"T3: -15 Outgoing Damage Penalty Percent, +0.13 DPS spirit scaling"
			]
		},
		dustDevil: {
			name: "Dust Devil",
			damageLabel: "Damage",
			cooldown: 36,
			castRange: 20,
			radius: 4,
			damage: 65,
			spiritScaling: 0.3,
			bulletEvasion: 0.3,
			recastWindow: 0,
			upgrades: [
				{ damage: 60 },   // T1
				{ cooldown: -12, bulletEvasion: 0.3 },   // T2
				{ recastWindow: 6, spiritScaling: 0.6 }   // T3
			],
			upgradeNotes: [
				"T1: +60 Damage",
				"T2: -12 Ability Cooldown, +30 Whirlwind Evasion Chance",
				"T3: +6 Recast Window, +0.6 Damage spirit scaling"
			]
		},
		djinnsMark: {
			name: "Djinn's Mark",
			damageLabel: "Proc Damage Base",
			cooldown: 2.75,
			procCooldown: 2.75,
			damage: 11,
			spiritScaling: 0.35,
			victimStackDuration: 5,
			maxStacks: 4,
			movementSpeedSlow: 0,
			slowDuration: 0,
			stunDuration: 0,
			upgrades: [
				{ movementSpeedSlow: 0.48, slowDuration: 0.8 },   // T1
				{ damage: 20, victimStackDuration: 3 },   // T2
				{ cooldown: -0.75, procCooldown: -0.75, stunDuration: 0.5, maxStacks: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +48 Movement Speed Slow, +0.8 Slow Duration",
				"T2: +20 Proc Damage Base, +3 Victim Stack Duration",
				"T3: -0.75 Ability Cooldown, -0.75 Proc Cooldown, +0.5 Stun Duration, +1 Max Stacks"
			]
		},
		traveler: {
			name: "Traveler",
			cooldown: 140,
			moveSpeed: 0,
			bonusFireRate: 0,
			movementSpeedBonusDuration: 0,
			combatBarrier: 0,
			combatBarrierScale: 0,
			upgrades: [
				{ moveSpeed: 3, bonusFireRate: 0.2, movementSpeedBonusDuration: 12 },   // T1
				{ combatBarrier: 400, combatBarrierScale: 0.6 },   // T2
				{ cooldown: -90 }   // T3
			],
			upgradeNotes: [
				"T1: +3m Bonus Move Speed, +20 Bonus Fire Rate, +12 Movement Speed Bonus Duration",
				"T2: +400 Combat Barrier, +0.6 Combat Barrier spirit scaling",
				"T3: -90 Ability Cooldown"
			]
		}
	},
	moAndKrill: {
		scorn: {
			name: "Scorn",
			damageLabel: "Damage",
			cooldown: 13,
			radius: 9,
			damage: 50,
			spiritScaling: 0.75,
			damageBonus: 0,
			debuffDuration: 0,
			upgrades: [
				{ damage: 35 },   // T1
				{ cooldown: -5, radius: 1 },   // T2
				{ damageBonus: 15, debuffDuration: 16 }   // T3
			],
			upgradeNotes: [
				"T1: +35 Damage",
				"T2: -5 Ability Cooldown, +1m Radius",
				"T3: +15 Damage Bonus, +16 Debuff Duration"
			]
		},
		burrow: {
			name: "Burrow",
			damageLabel: "DPS",
			cooldown: 40,
			radius: 5,
			channelTime: 5,
			damage: 75,
			spiritScaling: 1.488,
			moveSpeed: 5,
			upgrades: [
				{ damage: 50 },   // T1
				{ channelTime: 4, radius: 2 },   // T2
				{ cooldown: -20, moveSpeed: 4 }   // T3
			],
			upgradeNotes: [
				"T1: +50 DPS",
				"T2: +4 Ability Channel Time, +2m Radius",
				"T3: -20 Ability Cooldown, +4m Bonus Move Speed"
			]
		},
		sandBlast: {
			name: "Sand Blast",
			damageLabel: "Damage",
			cooldown: 40,
			duration: 2.5,
			castRange: 25,
			damage: 40,
			spiritScaling: 0,
			slowPercent: 0,
			groundDashReductionPercent: 0,
			upgrades: [
				{ damage: 50, castRange: 5 },   // T1
				{ slowPercent: 0.24, groundDashReductionPercent: -0.26 },   // T2
				{ cooldown: -25, duration: 1.5 }   // T3
			],
			upgradeNotes: [
				"T1: +50 Damage, +5m Ability Cast Range",
				"T2: +24 Slow Percent, -26 Ground Dash Reduction Percent",
				"T3: -25 Ability Cooldown, +1.5 Ability Duration"
			]
		},
		combo: {
			name: "Combo",
			damageLabel: "DPS",
			cooldown: 150,
			castRange: 4,
			channelTime: 2.4,
			damage: 40,
			spiritScaling: 0.6,
			spiritLifesteal: 0,
			bulletResistance: 0,
			upgrades: [
				{ spiritLifesteal: 1 },   // T1
				{ cooldown: -30, bulletResistance: 0.5 },   // T2
				{ channelTime: 0.7, damage: 40, spiritScaling: 0.4 }   // T3
			],
			upgradeNotes: [
				"T1: +100 Life Steal Percent On Hit",
				"T2: -30 Ability Cooldown, +50 Bullet Resist",
				"T3: +0.7 Ability Channel Time, +40 DPS, +0.4 DPS spirit scaling"
			]
		}
	},
	nurseHarrow: {
		leechTherapy: {
			name: "Leech Therapy",
			damageLabel: "DPS",
			cooldown: 30,
			duration: 5,
			radius: 6.5,
			damage: 23,
			spiritScaling: 0.19,
			leechStaminaDrain: 0,
			spiritPowerPerLeechStack: 0,
			maxLeechBonusStacks: 10,
			upgrades: [
				{ leechStaminaDrain: 0.3 },   // T1
				{ cooldown: -10, spiritPowerPerLeechStack: 4 },   // T2
				{ maxLeechBonusStacks: 8, spiritScaling: 0.3, radius: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +0.3 Leech Stamina Drain",
				"T2: -10s Cooldown, +4 Spirit Power per Leech Stack",
				"T3: +8 Max Leech Bonus Stacks, +0.3 DPS spirit scaling, +1m Radius"
			]
		},
		wretchedVapors: {
			name: "Wretched Vapors",
			cooldown: 40,
			duration: 4,
			castRange: 13,
			rushSpeedBonus: 0.25,          // Specter Rush: +25% action speed
			rushSpeedBonusScale: 0.0006,
			healingEffectiveness: 0,
			healAmpRegen: 0,
			dispelDebuffs: 0,              // flag: 1 = dispels debuffs
			upgrades: [
				{ cooldown: -15, castRange: 7 },   // T1
				{ duration: 1, healingEffectiveness: 0.2, healAmpRegen: 0.2 },   // T2
				{ rushSpeedBonus: 0.15, dispelDebuffs: 1 }   // T3
			],
			upgradeNotes: [
				"T1: -15s Cooldown, +7m Cast Range",
				"T2: +1s Duration, +20% Healing Effectiveness, +20% Heal Amp Regen",
				"T3: +15% Rush Speed Bonus, Dispels Debuffs"
			]
		},
		healingNeedles: {
			name: "Healing Needles",
			cooldown: 0,
			charges: 1,
			healRegen: 25,                 // healing per syringe
			healRegenScale: 0.2,
			staminaRestorePerHit: 0,
			buffExtendPerShot: 0,          // decimal (0.06 = 6%)
			upgrades: [
				{ charges: 1 },   // T1
				{ staminaRestorePerHit: 0.6, healRegen: 20 },   // T2
				{ healRegenScale: 0.4, buffExtendPerShot: 0.06 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Charge",
				"T2: +0.6 Stamina Restore per Hit, +20 Heal Regen",
				"T3: +0.4 Heal Regen spirit scaling, +6% Buff Extend per Shot"
			]
		},
		lurkingTerrors: {
			name: "Lurking Terrors",
			damageLabel: "DPS",
			cooldown: 200,
			castRange: 35,
			channelTime: 7,
			damage: 60,
			spiritScaling: 0.3,
			slowPercent: 0.3,
			fireRateSlow: 0.3,
			channelDamageImmune: 0,        // flag: 1 = immune to damage while channeling
			upgrades: [
				{ cooldown: -50 },   // T1
				{ slowPercent: 0.2, fireRateSlow: 0.2, damage: 30 },   // T2
				{ channelDamageImmune: 1, channelTime: 3, spiritScaling: 0.5 }   // T3
			],
			upgradeNotes: [
				"T1: -50s Cooldown",
				"T2: +20% Slow, +20% Fire Rate Slow, +30 DPS",
				"T3: Damage immune while channeling, +3s Channel Time, +0.5 DPS spirit scaling"
			]
		}
	}, 
	paige: {
		bookwyrm: {
			name: "Bookwyrm",
			damageLabel: "Damage",
			cooldown: 33,
			duration: 5,
			radius: 4,
			charges: 1,
			chargeCooldown: 7,
			damage: 60,
			spiritScaling: 1.3,
			dPS: 30,
			dPSScale: 0.3,
			groundFlameDuration: 3,
			dragonTravelRange: 20,
			upgrades: [
				{ cooldown: -12 },   // T1
				{ groundFlameDuration: 2, radius: 1, charges: 1 },   // T2
				{ damage: 100, dPS: 30, dragonTravelRange: 12 }   // T3
			],
			upgradeNotes: [
				"T1: -12 Ability Cooldown",
				"T2: +2 Ground Flame Duration, +1m Radius, +1 Ability Charges",
				"T3: +100 Damage, +30 DPS, +12m Dragon Travel Range"
			]
		},
		plotArmor: {
			name: "Plot Armor",
			cooldown: 28,
			duration: 5,
			castRange: 35,
			combatBarrier: 125,
			combatBarrierScale: 1.5,
			bonusFireRate: 0,
			bonusFireRateScale: 0,
			baseAttackDamagePercent: 0.25,
			baseAttackDamagePercentScale: 0.003,
			bonusTargets: 0,
			bonusTargetsBarrierPercentage: 0,
			upgrades: [
				{ bonusFireRate: 0.14, bonusFireRateScale: 0.0016 },   // T1
				{ combatBarrier: 100, duration: 2 },   // T2
				{ combatBarrierScale: 0.5, bonusTargets: 2, bonusTargetsBarrierPercentage: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +14 Bonus Fire Rate, +0.16 Bonus Fire Rate spirit scaling",
				"T2: +100 Combat Barrier, +2 Ability Duration",
				"T3: +0.5 Combat Barrier spirit scaling, +2 Bonus Targets, +100 Bonus Targets Barrier Percentage"
			]
		},
		captivatingRead: {
			name: "Captivating Read",
			damageLabel: "Damage",
			cooldown: 30,
			castRange: 30,
			radius: 7.5,
			damage: 90,
			spiritScaling: 1.3,
			immobilizeDuration: 1,
			debuffDuration: 0,
			techArmorDamageReduction: 0,
			upgrades: [
				{ cooldown: -14 },   // T1
				{ immobilizeDuration: 1 },   // T2
				{ techArmorDamageReduction: -0.18, debuffDuration: 6, radius: 2 }   // T3
			],
			upgradeNotes: [
				"T1: -14 Ability Cooldown",
				"T2: +1 Immobilize Duration",
				"T3: -18 Spirit Armor Damage Reduction, +6 Debuff Duration, +2m Radius"
			]
		},
		rallyingCharge: {
			name: "Rallying Charge",
			damageLabel: "Damage",
			cooldown: 210,
			duration: 13,
			castRange: 600,
			damage: 125,
			spiritScaling: 1,
			knightCount: 5,
			knightCountInFirstWave: 5,
			stunDuration: 1,
			healAmount: 125,
			healAmountScale: 1.6,
			maxAmp: 1,
			upgrades: [
				{ healAmount: 150 },   // T1
				{ knightCount: 4, knightCountInFirstWave: 4, cooldown: -45 },   // T2
				{ damage: 160, stunDuration: 0.5, maxAmp: 0.7 }   // T3
			],
			upgradeNotes: [
				"T1: +150 Heal Amount",
				"T2: +4 Knight Count, +4 Knight Count In First Wave, -45 Ability Cooldown",
				"T3: +160 Damage, +0.5 Stun Duration, +70 Max Amp"
			]
		}
	},
	paradox: {
		pulseGrenade: {
			name: "Pulse Grenade",
			damageLabel: "Pulse Damage",
			cooldown: 32,
			duration: 3.2,
			radius: 5.5,
			damage: 35,
			spiritScaling: 0.3,
			damageAmplificationPerStack: 0.04,
			upgrades: [
				{ cooldown: -12 },   // T1
				{ damage: 20, spiritScaling: 0.5 },   // T2
				{ damageAmplificationPerStack: 0.04, duration: 1.6 }   // T3
			],
			upgradeNotes: [
				"T1: -12 Ability Cooldown",
				"T2: +20 Pulse Damage, +0.5 Pulse Damage spirit scaling",
				"T3: +4 Damage Amplification Per Stack, +1.6 Ability Duration"
			]
		},
		timeWall: {
			name: "Time Wall",
			damageLabel: "Friendly Bullet Damage Bonus",
			cooldown: 25,
			duration: 5.5,
			castRange: 200,
			charges: 1,
			chargeCooldown: 0,
			damage: 30,
			spiritScaling: 0,
			timeWallWidth: 8,
			timeWallHeight: 4,
			debuffDuration: 0,
			upgrades: [
				{ timeWallWidth: 3, timeWallHeight: 1, duration: 3.5 },   // T1
				{ damage: 35, debuffDuration: 2.3 },   // T2
				{ charges: 3, chargeCooldown: 2 }   // T3
			],
			upgradeNotes: [
				"T1: +3m Time Wall Width, +1m Time Wall Height, +3.5 Ability Duration",
				"T2: +35 Friendly Bullet Damage Bonus, +2.3 Debuff Duration",
				"T3: +3 Ability Charges, +2 Ability Cooldown Between Charge"
			]
		},
		kineticCarbine: {
			name: "Kinetic Carbine",
			damageLabel: "Min Bonus Bullet Damage",
			cooldown: 28,
			damage: 5,
			spiritScaling: 0,
			speedChange: 0.25,
			speedChangeScale: 0.0013,
			speedBoostDuration: 3.5,
			maxBonusBulletDamage: 5,
			maxSlowDuration: 0.4,
			upgrades: [
				{ maxSlowDuration: 0.4 },   // T1
				{ cooldown: -12, speedChangeScale: 0.0006 },   // T2
				{ speedBoostDuration: 2 }   // T3
			],
			upgradeNotes: [
				"T1: +0.4 Max Slow Duration",
				"T2: -12 Ability Cooldown, +0.06 Speed Change spirit scaling",
				"T3: +2 Speed Boost Duration, Max Bonus Bullet Damage changed (game value 55, EWeaponPower; not applied by abilityAt)"
			],
			notes: [
				"Min Bonus Bullet Damage also scales with WeaponPower (x10)",
				"Max Bonus Bullet Damage also scales with WeaponPower (x125)"
			]
		},
		paradoxicalSwap: {
			name: "Paradoxical Swap",
			damageLabel: "Swap Damage",
			cooldown: 110,
			castRange: 25,
			damage: 150,
			spiritScaling: 1.1,
			maxHealthDamage: 0,
			combatBarrier: 0,
			combatBarrierScale: 0,
			barrierDuration: 0,
			multiSwap: 0,
			upgrades: [
				{ combatBarrier: 200, barrierDuration: 8, combatBarrierScale: 1.5 },   // T1
				{ castRange: 13, cooldown: -30 },   // T2
				{ multiSwap: 7, maxHealthDamage: 0.1 }   // T3
			],
			upgradeNotes: [
				"T1: +200 Combat Barrier, +8 Barrier Duration, +1.5 Combat Barrier spirit scaling",
				"T2: +13m Ability Cast Range, -30 Ability Cooldown",
				"T3: +7m Multi Swap, +10 Max Health Damage"
			]
		}
	},
	pocket: {
		barrage: {
			name: "Barrage",
			damageLabel: "Damage Per Projectile",
			cooldown: 32,
			radius: 4.5,
			damage: 32,
			spiritScaling: 0.465,
			ampPercentPerStack: 0.06,
			upgrades: [
				{ damage: 16 },   // T1
				{ cooldown: -16 },   // T2
				{ ampPercentPerStack: 0.04, radius: 3 }   // T3
			],
			upgradeNotes: [
				"T1: +16 Damage Per Projectile",
				"T2: -16 Ability Cooldown",
				"T3: +4 Amp Percent Per Stack, +3m Radius"
			]
		},
		flyingCloak: {
			name: "Flying Cloak",
			damageLabel: "Damage",
			cooldown: 26,
			radius: 5,
			damage: 60,
			spiritScaling: 1.3,
			maxLifetime: 3.8,
			weaponDamageBonus: 0,
			weaponDamageBonusDuration: 0,
			upgrades: [
				{ damage: 70 },   // T1
				{ weaponDamageBonus: 5, weaponDamageBonusDuration: 6 },   // T2
				{ maxLifetime: 1.6, cooldown: -10 }   // T3
			],
			upgradeNotes: [
				"T1: +70 Damage",
				"T2: +5 Weapon Damage Bonus, +6 Weapon Damage Bonus Duration",
				"T3: +1.6 Max Lifetime, -10 Ability Cooldown"
			]
		},
		enchantersSatchel: {
			name: "Enchanter's Satchel",
			damageLabel: "Damage",
			cooldown: 17,
			radius: 12,
			channelTime: 1.5,
			damage: 65,
			spiritScaling: 1.1,
			fireRateSlow: 0,
			moveSlowPercent: 0,
			debuffDuration: 0,
			upgrades: [
				{ cooldown: -5 },   // T1
				{ damage: 90 },   // T2
				{ fireRateSlow: 0.4, moveSlowPercent: 0.32, debuffDuration: 4, channelTime: 1.5, radius: 4 }   // T3
			],
			upgradeNotes: [
				"T1: -5 Ability Cooldown",
				"T2: +90 Damage",
				"T3: +40 Fire Rate Slow, +32 Move Slow Percent, +4 Debuff Duration, +1.5 Ability Channel Time, +4m Radius"
			]
		},
		affliction: {
			name: "Affliction",
			damageLabel: "DPS",
			cooldown: 170,
			radius: 9,
			damage: 32,
			spiritScaling: 0.21,
			debuffDuration: 10,
			disableHealing: 0,
			upgrades: [
				{ cooldown: -35 },   // T1
				{ debuffDuration: 3, radius: 4 },   // T2
				{ damage: 13, spiritScaling: 0.1, disableHealing: 1 }   // T3
			],
			upgradeNotes: [
				"T1: -35 Ability Cooldown",
				"T2: +3 Debuff Duration, +4m Radius",
				"T3: +13 DPS, +0.1 DPS spirit scaling, +1 Disable Healing"
			]
		}
	},
	ratKing: {
		scrapGrenade: {
			name: "Scrap Grenade",
			damageLabel: "Damage Per Shrapnel",
			cooldown: 26,
			damage: 70,
			spiritScaling: 0,
			slowPercent: 0.2,
			slowPercentScale: 0.0008,
			detonations: 3,
			bigExplosionDamage: 0,
			bigExplosionSlowPercent: 0.4,
			bigExplosionSlowPercentScale: 0,
			bigExplosionRadius: 0,
			weaponScaling: { damage: 0.6 },
			upgrades: [
    			{ cooldown: -8 },
    			{ damage: 70 },
    			{ detonations: 1, bigExplosionDamage: 300, weaponScaling: { bigExplosionDamage: 1 }, bigExplosionRadius: 14, bigExplosionSlowPercentScale: 0.0012 }
  			],
			upgradeNotes: [
				"T1: -8 Ability Cooldown",
				"T2: +70 Damage Per Shrapnel",
				"T3: +1 Detonations, +300 Big Explosion Damage, +1 Big Explosion Damage spirit scaling, +14m Big Explosion Radius, Big Explosion Radius changed (game value 1, ETechRange; not applied by abilityAt), +0.12 Big Explosion Slow Percent spirit scaling"
			],
			notes: [
				"Damage Per Shrapnel also scales with BaseWeaponDamageIncrease (x0.6)",
				"Big Explosion Damage also scales with BaseWeaponDamageIncrease (x0)",
				"Big Explosion Radius also scales with scale_function_tech_range (x0)"
			]
		},
		ratSwarm: {
			name: "Rat Swarm",
			damageLabel: "Damage Per Bite",
			cooldown: 24,
			duration: 6,
			castRange: 50,
			radius: 10,
			charges: 1,
			chargeCooldown: 8,
			damage: 8,
			spiritScaling: 0.08,
			armorReductionPerBite: -0.01,
			debuffDuration: 4,
			ratSwarmWidth: 400,
			ratSwarmRows: 3,
			ratSwarmCols: 3,
			upgrades: [
				{ charges: 1 },   // T1
				{ ratSwarmCols: 2, ratSwarmRows: 1, ratSwarmWidth: 100, debuffDuration: 4 },   // T2
				{ armorReductionPerBite: -0.01, damage: 8 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Ability Charges",
				"T2: +2 Rat Swarm Cols, +1 Rat Swarm Rows, +100 Rat Swarm Width, +4 Debuff Duration",
				"T3: -1 Armor Reduction Per Bite, +8 Damage Per Bite"
			]
		},
		royalPestments: {
			name: "Royal Pestments",
			cooldown: 22,
			duration: 6,
			maxHealthPct: 0.15,
			maxDamagePerHit: 0,
			returnFireChance: 0.15,
			returnFireChanceScale: 0.001,
			upgrades: [
				{ duration: 4 },   // T1
				{ returnFireChance: 0.15, cooldown: -8 },   // T2
				{ maxHealthPct: 0.1, maxDamagePerHit: 250 }   // T3
			],
			upgradeNotes: [
				"T1: +4 Ability Duration",
				"T2: +15 Return Fire Chance, -8 Ability Cooldown",
				"T3: +10 Max Health Pct, +250 Max Damage Per Hit"
			]
		},
		ruleRatannia: {
			name: "Rule, Ratannia!",
			damageLabel: "Damage",
			cooldown: 160,
			duration: 10,
			radius: 20,
			damage: 200,
			spiritScaling: 0,
			flagDuration: 12,
			moveSpeed: 3,
			allyDamageReduction: 0.15,
			upgrades: [
				{ moveSpeed: 2 },   // T1
				{ flagDuration: 5, radius: 8 },   // T2
				{ damage: 150, allyDamageReduction: 0.1 }   // T3
			],
			upgradeNotes: [
				"T1: +2m Bonus Move Speed",
				"T2: +5 Flag Duration, +8m Radius",
				"T3: +150 Damage, +10 Ally Damage Reduction"
			],
			notes: ["Damage also scales with BaseWeaponDamageIncrease (x1.2)"]
		}
	},
	rem: {
		pillowToss: {
			name: "Pillow Toss",
			damageLabel: "Damage",
			cooldown: 25,
			castRange: 40,
			radius: 5,
			charges: 1,
			chargeCooldown: 8,
			damage: 75,
			spiritScaling: 1.6,
			fireRateSlow: 0,
			upgrades: [
				{ cooldown: -7 },   // T1
				{ fireRateSlow: 0.35, radius: 2 },   // T2
				{ damage: 100, charges: 1 }   // T3
			],
			upgradeNotes: [
				"T1: -7 Ability Cooldown",
				"T2: +35 Fire Rate Slow, +2m Radius",
				"T3: +100 Damage, +1 Ability Charges"
			]
		},
		tagAlong: {
			name: "Tag Along",
			cooldown: 40,
			duration: 5.5,
			castRange: 23,
			healingPerSecond: 42,
			healingPerSecondScale: 0.4,
			missingHealthBurstPct: 0.15,
			missingHealthBurstPctScale: 0.0003,
			bonusBarrierAmpPercent: 0,
			bonusItemDurationPercent: 0,
			bonusItemRangePercent: 0,
			spiritPower: 0,
			pctSpiritPower: 0,
			hopOffEffecDuration: 0,
			upgrades: [
				{ cooldown: -8 },   // T1
				{ bonusBarrierAmpPercent: 0.35, bonusItemDurationPercent: 0.35, bonusItemRangePercent: 0.35 },   // T2
				{ pctSpiritPower: 0.15, spiritPower: 35, hopOffEffecDuration: 10, missingHealthBurstPctScale: 0.00016, healingPerSecondScale: 0.34 }   // T3
			],
			upgradeNotes: [
				"T1: -8 Ability Cooldown",
				"T2: +35 Bonus Barrier Amp Percent, +35 Bonus Item Duration Percent, +35 Bonus Item Range Percent",
				"T3: +15 Spirit Power Percent, +35 Bonus Spirit Power, +10 Hop Off Effec Duration, +0.016 Missing Health Burst Pct spirit scaling, +0.34 Healing Per Second spirit scaling"
			]
		},
		lilHelpers: {
			name: "Lil Helpers",
			damageLabel: "Damage",
			cooldown: 0,
			castRange: 45,
			damage: 20,
			spiritScaling: 0,
			moveSpeed: 3,
			helperCount: 1,
			infestHeal: 8,
			infestHealScale: 0.14,
			infestDamageTakenPercent: 0.3,
			techArmorGain: 0.12,
			upgrades: [
				{ helperCount: 1, moveSpeed: 1.5 },   // T1
				{ helperCount: 1, infestDamageTakenPercent: 0.15 },   // T2
				{ helperCount: 1, techArmorGain: 0.15 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Helper Count, +1.5m Bonus Move Speed",
				"T2: +1 Helper Count, +15 Infest Damage Taken Percent",
				"T3: +1 Helper Count, +15 Spirit Armor Gain"
			],
			notes: ["Ability Cast Range also scales with TechRange (x0)"]
		},
		naptime: {
			name: "Naptime",
			damageLabel: "Awake Damage",
			cooldown: 200,
			castRange: 24,
			radius: 19,
			damage: 120,
			spiritScaling: 1.6,
			sleepDuration: 4,
			consumeStaminaOnWake: 0,
			damageResistPctWhileChanneling: 0.3,
			unstoppableWhileChanneling: 0,
			noStaminaRegenDuringSleep: 0,
			upgrades: [
				{ consumeStaminaOnWake: 1, noStaminaRegenDuringSleep: 1 },   // T1
				{ sleepDuration: 0.75, radius: 3 },   // T2
				{ damageResistPctWhileChanneling: 0.5, unstoppableWhileChanneling: 1, cooldown: -55 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Consume Stamina On Wake, +1 No Stamina Regen During Sleep",
				"T2: +0.75 Sleep Duration, +3m Radius",
				"T3: +50 Damage Resist Pct While Channeling, +1 Unstoppable While Channeling, -55 Ability Cooldown"
			]
		}
	},
	seven: {
		lightningBall: {
			name: "Lightning Ball",
			damageLabel: "DPS",
			cooldown: 26,
			charges: 1,
			chargeCooldown: 6,
			damage: 75,
			spiritScaling: 0.5,
			shockRadius: 4.25,
			maxLifetime: 5,
			slowPercent: 0,
			upgrades: [
				{ charges: 1 },   // T1
				{ slowPercent: 0.28, maxLifetime: 1 },   // T2
				{ damage: 58.5, shockRadius: 1.75 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Ability Charges",
				"T2: +28 Slow Percent, +1 Max Lifetime",
				"T3: +58.5 DPS, +1.75m Shock Radius"
			]
		},
		staticCharge: {
			name: "Static Charge",
			damageLabel: "Damage",
			cooldown: 42,
			castRange: 15,
			damage: 35,
			spiritScaling: 0.792,
			shockRadius: 5,
			stunDuration: 0.9,
			upgrades: [
				{ cooldown: -20 },   // T1
				{ shockRadius: 7, castRange: 5 },   // T2
				{ stunDuration: 0.9, damage: 160 }   // T3
			],
			upgradeNotes: [
				"T1: -20 Ability Cooldown",
				"T2: +7m Shock Radius, +5m Ability Cast Range",
				"T3: +0.9 Stun Duration, +160 Damage"
			]
		},
		powerSurge: {
			name: "Power Surge",
			damageLabel: "Damage Per Chain",
			cooldown: 50,
			duration: 10,
			damage: 10,
			spiritScaling: 0.14,
			bonusPerChain: 10,
			bonusPerChainScale: 0.32,
			techResistDebuff: 0,
			debuffDuration: 0,
			moveSpeed: 0,
			upgrades: [
				{ cooldown: -18 },   // T1
				{ moveSpeed: 3, bonusPerChain: 8, damage: 8, bonusPerChainScale: 0.23, spiritScaling: 0.23 },   // T2
				{ techResistDebuff: -0.15, debuffDuration: 10, duration: 10 }   // T3
			],
			upgradeNotes: [
				"T1: -18 Ability Cooldown",
				"T2: +3m Bonus Move Speed, +8 Bonus Per Chain, +8 Damage Per Chain, +0.23 Bonus Per Chain spirit scaling, +0.23 Damage Per Chain spirit scaling",
				"T3: -15 Spirit Resist Debuff, +10 Debuff Duration, +10 Ability Duration"
			]
		},
		stormCloud: {
			name: "Storm Cloud",
			damageLabel: "DPS",
			cooldown: 205,
			radius: 30,
			channelTime: 7,
			initialRadius: 10,
			damage: 95,
			spiritScaling: 0.6,
			bulletResistance: 0,
			lightningStrikeDamage: 75,
			lightningStrikeDamageScale: 0.5,
			flightControlEnabled: 1.5,
			upgrades: [
				{ bulletResistance: 0.55 },   // T1
				{ radius: 10, initialRadius: 5, channelTime: 7 },   // T2
				{ damage: 65, flightControlEnabled: 4 }   // T3
			],
			upgradeNotes: [
				"T1: +55 Bullet Resist On Active",
				"T2: +10m Radius, +5m Initial Radius, +7 Ability Channel Time",
				"T3: +65 DPS, +4m Flight Control Enabled"
			]
		}
	},
	shiv: {
		serratedKnives: {
			name: "Serrated Knives",
			damageLabel: "Bleed DPSPer Stack",
			cooldown: 16,
			charges: 2,
			chargeCooldown: 2,
			damage: 10,
			spiritScaling: 0.13,
			bleedDuration: 5,
			fullRageCurrentHealthDamagePct: 0.035,
			fullRageCurrentHealthDamagePctScale: 0.0001,
			upgrades: [
				{ bleedDuration: 2 },   // T1
				{ charges: 2 },   // T2
				{ damage: 12, spiritScaling: 0.07 }   // T3
			],
			upgradeNotes: [
				"T1: +2 Bleed Duration",
				"T2: +2 Ability Charges",
				"T3: +12 Bleed DPSPer Stack, +0.07 Bleed DPSPer Stack spirit scaling"
			]
		},
		sliceAndDice: {
			name: "Slice and Dice",
			damageLabel: "Impact Damage",
			cooldown: 16,
			dashRange: 12,
			damage: 75,
			spiritScaling: 1.2,
			cooldownReductionOnHit: 0,
			cooldownReductionOnHitNonHero: 0,
			maxCooldownReductionsFromHits: 0,
			techArmorDamageReduction: -0.06,
			upgrades: [
				{ cooldown: -6 },   // T1
				{ techArmorDamageReduction: -0.04, dashRange: 2 },   // T2
				{ damage: 50, cooldownReductionOnHit: 2, cooldownReductionOnHitNonHero: 1, maxCooldownReductionsFromHits: 8 }   // T3
			],
			upgradeNotes: [
				"T1: -6 Ability Cooldown",
				"T2: -4 Spirit Armor Damage Reduction, +2m Dash Range",
				"T3: +50 Impact Damage, +2 Cooldown Reduction On Hit, +1 Cooldown Reduction On Hit Non Hero, +8 Max Cooldown Reductions From Hits"
			]
		},
		bloodletting: {
			name: "Bloodletting",
			cooldown: 25,
			damagePctDeferred: 0.25,
			deferClearPct: 0.3,
			upgrades: [
				{ cooldown: -15 },   // T1
				{ deferClearPct: 0.4 },   // T2
				{ damagePctDeferred: 0.15 }   // T3
			],
			upgradeNotes: ["T1: -15 Ability Cooldown", "T2: +40 Defer Clear Pct", "T3: +15 Damage Pct Deferred"]
		},
		killingBlow: {
			name: "Killing Blow",
			damageLabel: "Damage",
			cooldown: 145,
			castRange: 12,
			damage: 200,
			spiritScaling: 0,
			moveSpeed: 0,
			buffDamage: 8,
			enemyHealthPercent: 0.18,
			upgrades: [
				{ moveSpeed: 2, castRange: 6 },   // T1
				{ buffDamage: 16, cooldown: -25 },   // T2
				{ enemyHealthPercent: 0.1 }   // T3
			],
			upgradeNotes: [
				"T1: +2m Bonus Move Speed, +6m Ability Cast Range",
				"T2: +16 Buff Damage, -25 Ability Cooldown",
				"T3: +10 Enemy Health Percent"
			]
		}
	},
	silver: {
		slamFire: {
			name: "Slam Fire",
			damageLabel: "Damage",
			cooldown: 25,
			duration: 5,
			castRange: 1,
			damage: 40,
			spiritScaling: 0,
			baseAttackDamagePercent: 0,
			bonusCurrentHealthDamagePercentage: 0,
			maxStacks: 0,
			stackDuration: 0,
			upgrades: [
				{ baseAttackDamagePercent: 0.15 },   // T1
				{ cooldown: -10 },   // T2
				{ stackDuration: 3, maxStacks: 3, bonusCurrentHealthDamagePercentage: 0.07 }   // T3
			],
			upgradeNotes: [
				"T1: +15 Base Attack Damage Percent",
				"T2: -10 Ability Cooldown",
				"T3: +3 Stack Duration, +3 Max Stacks, +7 Bonus Current Health Damage Percentage"
			],
			notes: ["Ability Cast Range also scales with TechRange (x0)"]
		},
		bootKick: {
			name: "Boot Kick",
			damageLabel: "Bonus Damage",
			cooldown: 21,
			castRange: 10.6,
			damage: 25,
			spiritScaling: 2,
			staminaRestore: 0,
			outgoingDamagePercent: 0,
			debuffDuration: 0,
			upgrades: [
				{ cooldown: -6 },   // T1
				{ staminaRestore: 2 },   // T2
				{ outgoingDamagePercent: -0.35, debuffDuration: 5, damage: 80 }   // T3
			],
			upgradeNotes: [
				"T1: -6 Ability Cooldown",
				"T2: +2 Stamina Restore",
				"T3: -35 Outgoing Damage Percent, +5 Debuff Duration, +80 Bonus Damage"
			]
		},
		entanglingBola: {
			name: "Entangling Bola",
			damageLabel: "Damage",
			cooldown: 23,
			damage: 40,
			spiritScaling: 1.6,
			debuffDuration: 1.5,
			slowPercent: 0.16,
			ricochetCount: 0,
			ricochetRange: 0,
			upgrades: [
				{ slowPercent: 0.2 },   // T1
				{ cooldown: -8 },   // T2
				{ ricochetCount: 2, ricochetRange: 15, debuffDuration: 0.75 }   // T3
			],
			upgradeNotes: [
				"T1: +20 Slow Percent",
				"T2: -8 Ability Cooldown",
				"T3: +2 Ricochet Count, +15m Ricochet Range, +0.75 Debuff Duration"
			]
		},
		lycanCurse: {
			name: "Lycan Curse",
			cooldown: 60,
			duration: 15,
			HP: 125,
			moveSpeed: 1.5,
			spiritResistance: 0,
			bulletResistance: 0,
			bonusFireRate: 0.6,
			bonusFireRateScale: 0.0045,
			killDurationBonus: 0,
			killCreditWindow: 0,
			upgrades: [
				{ bulletResistance: 0.15, spiritResistance: 0.15 },   // T1
				{ moveSpeed: 4, HP: 200 },   // T2
				{ killDurationBonus: 15, killCreditWindow: 1.5 }   // T3
			],
			upgradeNotes: [
				"T1: +15 Bullet Resist, +15 Spirit Resist",
				"T2: +4m Bonus Move Speed, +200 Bonus Health",
				"T3: +15 Kill Duration Bonus, +1.5 Kill Credit Window"
			],
			notes: ["Bonus Health also scales with LevelUpBoons (x15)"]
		}
	},
	silverTransformed: {},   // transformed form shares Silver's kit (see silver)
	sinclair: {
		vexingBolt: {
			name: "Vexing Bolt",
			damageLabel: "Max Damage",
			cooldown: 24,
			castRange: 500,
			radius: 3.25,
			charges: 1,
			chargeCooldown: 3,
			damage: 120,
			spiritScaling: 1.86,
			minDamage: 60,
			minDamageScale: 0.93,
			debuffDuration: 0,
			fireRateSlow: 0,
			cloneDamagePercentage: 0.5,
			upgrades: [
				{ fireRateSlow: 0.25, debuffDuration: 5 },   // T1
				{ cooldown: -13 },   // T2
				{ damage: 126, cloneDamagePercentage: 0.5 }   // T3
			],
			upgradeNotes: [
				"T1: +25 Fire Rate Slow, +5 Debuff Duration",
				"T2: -13 Ability Cooldown",
				"T3: +126 Max Damage, +50 Clone Damage Percentage"
			]
		},
		spectralAssistant: {
			name: "Spectral Assistant",
			damageLabel: "Damage",
			cooldown: 40,
			duration: 6,
			castRange: 15,
			damage: 15,
			spiritScaling: 0.36,
			leashRadius: 20,
			bonusFireRate: 0,
			upgrades: [
				{ cooldown: -10 },   // T1
				{ duration: 7, castRange: 5, leashRadius: 5 },   // T2
				{ bonusFireRate: 0.6, damage: 12.6 }   // T3
			],
			upgradeNotes: [
				"T1: -10 Ability Cooldown",
				"T2: +7 Ability Duration, +5m Ability Cast Range, +5m Leash Radius",
				"T3: +60 Bonus Fire Rate, +12.6 Damage"
			]
		},
		rabbitHex: {
			name: "Rabbit Hex",
			cooldown: 26,
			castRange: 24,
			radius: 6,
			damageAmpPercentage: 0.15,
			damageAmpPercentageScale: 0.00056,
			hexDuration: 2,
			upgrades: [
				{ cooldown: -10 },   // T1
				{ hexDuration: 1 },   // T2
				{ radius: 2, damageAmpPercentage: 0.07 }   // T3
			],
			upgradeNotes: ["T1: -10 Ability Cooldown", "T2: +1 Hex Duration", "T3: +2m Radius, +7 Damage Amp Percentage"]
		},
		audienceParticipation: {
			name: "Audience Participation",
			cooldown: 85,
			castRange: 20,
			upgrades: [
				{},   // T1
				{},   // T2
				{}   // T3
			],
			upgradeNotes: ["T1: ", "T2: ", "T3: "]
		}
	},
	solomon: {
		setupBishop: {
			name: "Setup Bishop",
			damageLabel: "Impact Damage",
			cooldown: 12,
			castRange: 20,
			radius: 3.5,
			damage: 25,
			spiritScaling: 0.64,
			dPS: 30,
			dPSScale: 0.7,
			moveDistance: 12,
			maxPieces: 1,
			fadingSlowPercent: 0.3,
			maxStacks: 0,
			techArmorDamageReductionPerStack: 0,
			stackDuration: 0,
			recastWindow: 0,
			tileSteps: 2,
			upgrades: [
				{ moveDistance: 5, fadingSlowPercent: 0.15 },   // T1
				{ maxPieces: 1, recastWindow: 8 },   // T2
				{ techArmorDamageReductionPerStack: -0.025, maxStacks: 10, stackDuration: 10, tileSteps: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +5m Move Distance, +15 Fading Slow Percent",
				"T2: +1 Max Pieces, +8 Recast Window",
				"T3: -2.5 Spirit Armor Damage Reduction Per Stack, +10 Max Stacks, +10 Stack Duration, +1 Tile Steps"
			],
			notes: [
				"Move Distance also scales with LevelUpBoons (x0.23)",
				"Stack Duration also scales with scale_function_tech_duration (x1)"
			]
		},
		kingsideKnight: {
			name: "Kingside Knight",
			cooldown: 25,
			castRange: 28,
			combatBarrier: 80,
			combatBarrierScale: 0.8,
			removeDebuffs: 0,
			stamina: 1,
			maxPieces: 1,
			bonusTargetRadius: 0,
			upgrades: [
				{ cooldown: -8 },   // T1
				{ stamina: 1, combatBarrier: 80 },   // T2
				{ maxPieces: 1, bonusTargetRadius: 20, removeDebuffs: 1 }   // T3
			],
			upgradeNotes: [
				"T1: -8 Ability Cooldown",
				"T2: +1 Stamina, +80 Combat Barrier",
				"T3: +1 Max Pieces, +20m Bonus Target Radius, +1 Remove Debuffs"
			]
		},
		rookBattery: {
			name: "Rook Battery",
			damageLabel: "Damage",
			cooldown: 33,
			damage: 50,
			spiritScaling: 1.3,
			debuffDuration: 0,
			fireRateSlow: 0,
			bonusMoveSpeedPercent: 0,
			bonusMoveSpeedPercentScale: 0.001,
			immobilizeDuration: 1,
			currentHealthPercent: 0,
			maxReflectCount: 1,
			upgrades: [
				{ fireRateSlow: 0.25, debuffDuration: 5 },   // T1
				{ currentHealthPercent: 0.05 },   // T2
				{ cooldown: -12, immobilizeDuration: 0.5, maxReflectCount: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +25 Fire Rate Slow, +5 Debuff Duration",
				"T2: +5 Current Health Percent",
				"T3: -12 Ability Cooldown, +0.5 Immobilize Duration, +1 Max Reflect Count"
			],
			notes: ["Current Health Percent also scales with TechArmorDamageReduction (x0)"]
		},
		developQueen: {
			name: "Develop Queen",
			damageLabel: "Damage",
			cooldown: 210,
			castRange: 30,
			damage: 120,
			spiritScaling: 1.4,
			dPS: 50,
			dPSScale: 0.7,
			queenBonusMoves: 2,
			slowPercent: 0.15,
			checkmateThreshold: 0,
			tileSteps: 3,
			upgrades: [
				{ cooldown: -40 },   // T1
				{ checkmateThreshold: 200, slowPercent: 0.15 },   // T2
				{ tileSteps: 1, queenBonusMoves: 2 }   // T3
			],
			upgradeNotes: [
				"T1: -40 Ability Cooldown",
				"T2: +200 Checkmate Threshold, Checkmate Threshold changed (game value 5, ELevelUpBoons; not applied by abilityAt), +15 Slow Percent",
				"T3: +1 Tile Steps, +2 Queen Bonus Moves"
			],
			notes: ["Checkmate Threshold also scales with LevelUpBoons (x0)"]
		}
	},
	venator: {
		consecratingGrenade: {
			name: "Consecrating Grenade",
			damageLabel: "Damage",
			cooldown: 25,
			radius: 4.5,
			charges: 1,
			chargeCooldown: 0,
			damage: 35,
			spiritScaling: 0,
			burnDuration: 3.5,
			burnRadius: 4.5,
			healAmpReceivePenaltyPercent: -0.3,
			healAmpRegenPenaltyPercent: -0.3,
			upgrades: [
				{ cooldown: -5 },   // T1
				{ radius: 1.5, burnRadius: 1.5, burnDuration: 1 },   // T2
				{ healAmpReceivePenaltyPercent: -0.2, healAmpRegenPenaltyPercent: -0.2, charges: 1, chargeCooldown: 3 }   // T3
			],
			upgradeNotes: [
				"T1: -5 Ability Cooldown",
				"T2: +1.5m Radius, +1.5m Burn Radius, +1 Burn Duration",
				"T3: -20 Heal Amp Receive Penalty Percent, -20 Heal Amp Regen Penalty Percent, +1 Ability Charges, +3 Ability Cooldown Between Charge"
			],
			notes: ["Damage also scales with BaseWeaponDamageIncrease (x1)"]
		},
		gutshot: {
			name: "Gutshot",
			damageLabel: "Damage",
			cooldown: 23,
			castRange: 10,
			damage: 60,
			spiritScaling: 0,
			stunDuration: 0.6,
			buffDuration: 0,
			upgrades: [
				{ damage: 25 },   // T1
				{ cooldown: -10, stunDuration: 0.4 },   // T2
				{ buffDuration: 5 }   // T3
			],
			upgradeNotes: ["T1: +25 Damage", "T2: -10 Ability Cooldown, +0.4 Stun Duration", "T3: +5 Buff Duration"],
			notes: ["Damage also scales with BaseWeaponDamageIncrease (x0.7)"]
		},
		hexLinedSnapTrap: {
			name: "Hex-Lined Snap Trap",
			damageLabel: "Damage",
			cooldown: 28,
			radius: 2,
			charges: 2,
			chargeCooldown: 8,
			damage: 80,
			spiritScaling: 2.2,
			immobilizeDuration: 1.25,
			incomingDamagePercentFromCaster: 0,
			upgrades: [
				{ cooldown: -11 },   // T1
				{ immobilizeDuration: 1 },   // T2
				{ incomingDamagePercentFromCaster: 0.3, charges: 1 }   // T3
			],
			upgradeNotes: [
				"T1: -11 Ability Cooldown",
				"T2: +1 Immobilize Duration",
				"T3: +30 Incoming Damage Percent From Caster, +1 Ability Charges"
			]
		},
		iraDomini: {
			name: "Ira Domini",
			damageLabel: "Damage",
			cooldown: 160,
			duration: 15,
			damage: 120,
			spiritScaling: 0,
			bonusDamage: 115,
			allStakesBlessed: 0,
			moveSpeed: 0,
			upgrades: [
				{ moveSpeed: 1.2 },   // T1
				{ bonusDamage: 65, cooldown: -15 },   // T2
				{ allStakesBlessed: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +1.2m Bonus Move Speed",
				"T2: +65 Bonus Damage, -15 Ability Cooldown",
				"T3: +1 All Stakes Blessed"
			],
			notes: [
				"Damage also scales with BaseWeaponDamageIncrease (x1.5)",
				"Bonus Damage also scales with LevelUpBoons (x3)"
			]
		}
	},
	victor: {
		painBattery: {
			name: "Pain Battery",
			damageLabel: "Damage",
			cooldown: 2,
			castRange: 28,
			damage: 100,
			spiritScaling: 1.6,
			slowPercent: 0,
			slowDuration: 0,
			missingHealthPercentHeal: 0,
			upgrades: [
				{ slowPercent: 0.32, slowDuration: 2 },   // T1
				{ damage: 50 },   // T2
				{ missingHealthPercentHeal: 0.15, spiritScaling: 0.6 }   // T3
			],
			upgradeNotes: [
				"T1: +32 Slow Percent, +2 Slow Duration",
				"T2: +50 Damage",
				"T3: +15 Missing Health Percent Heal, +0.6 Damage spirit scaling"
			],
			notes: ["Missing Health Percent Heal also scales with HealingOutput (x1)"]
		},
		jumpstart: {
			name: "Jumpstart",
			cooldown: 30,
			duration: 4.5,
			charges: 1,
			chargeCooldown: 8,
			moveSpeed: 3,
			totalHealthRegen: 100,
			totalHealthRegenScale: 1.2,
			debuffResistance: 0,
			upgrades: [
				{ moveSpeed: 3 },   // T1
				{ totalHealthRegen: 70, cooldown: -8 },   // T2
				{ charges: 1, totalHealthRegenScale: 0.9, debuffResistance: 0.5 }   // T3
			],
			upgradeNotes: [
				"T1: +3m Bonus Move Speed",
				"T2: +70 Total Health Regen, -8 Ability Cooldown",
				"T3: +1 Ability Charges, +0.9 Total Health Regen spirit scaling, +50 Status Resistance Percent"
			]
		},
		auraOfSuffering: {
			name: "Aura of Suffering",
			damageLabel: "Max DPS",
			cooldown: 2,
			duration: 8,
			radius: 8,
			damage: 58,
			spiritScaling: 0.72,
			minDPS: 13,
			minDPSScale: 0.15,
			minDps: 0,
			debuffDuration: 0.5,
			slowPercent: 0,
			enemyDashSlowPercent: 0,
			incomingDamagePercent: 0,
			upgrades: [
				{ slowPercent: 0.2, enemyDashSlowPercent: -0.22, debuffDuration: 0.5 },   // T1
				{ minDps: 6, damage: 34 },   // T2
				{ incomingDamagePercent: 0.15, radius: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +20 Slow Percent, -22 Enemy Dash Slow Percent, +0.5 Debuff Duration",
				"T2: +6 Min Dps, +34 Max DPS",
				"T3: +15 Incoming Damage Percent, +1m Radius"
			]
		},
		shockingReanimation: {
			name: "Shocking Reanimation",
			damageLabel: "Damage",
			cooldown: 240,
			radius: 18,
			damage: 200,
			spiritScaling: 2,
			respawnHealthPercent: 0.5,
			bonusDamagePerBullet: 0,
			bonusDamagePerBulletScale: 0,
			bonusFireRate: 0,
			stunDuration: 1.5,
			upgrades: [
				{ bonusDamagePerBullet: 6, bonusFireRate: 0.15, bonusDamagePerBulletScale: 0.06 },   // T1
				{ respawnHealthPercent: 0.5 },   // T2
				{ damage: 175, stunDuration: 1.5, cooldown: -95 }   // T3
			],
			upgradeNotes: [
				"T1: +6 Bonus Damage Per Bullet, +15 Bonus Fire Rate, +0.06 Bonus Damage Per Bullet spirit scaling",
				"T2: +50 Respawn Health Percent",
				"T3: +175 Damage, +1.5 Stun Duration, -95 Ability Cooldown"
			]
		}
	},
	vindicta: {
		stake: {
			name: "Stake",
			damageLabel: "Damage",
			cooldown: 40,
			damage: 40,
			spiritScaling: 0.5,
			captureRadius: 9,
			chainDuration: 1.75,
			upgrades: [
				{ damage: 45 },   // T1
				{ cooldown: -22 },   // T2
				{ chainDuration: 0.75, captureRadius: 2 }   // T3
			],
			upgradeNotes: ["T1: +45 Damage", "T2: -22 Ability Cooldown", "T3: +0.75 Chain Duration, +2m Capture Radius"]
		},
		flight: {
			name: "Flight",
			damageLabel: "Magic Damage Per Bullet",
			cooldown: 42,
			duration: 13,
			damage: 10,
			spiritScaling: 0.18,
			bonusClipSizePercent: 0,
			refreshOnKill: 0,
			upgrades: [
				{ bonusClipSizePercent: 0.5 },   // T1
				{ duration: 10 },   // T2
				{ damage: 10, spiritScaling: 0.1, refreshOnKill: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +50 Bonus Clip Size Percent",
				"T2: +10 Ability Duration",
				"T3: +10 Magic Damage Per Bullet, +0.1 Magic Damage Per Bullet spirit scaling, +1 Refresh On Kill"
			]
		},
		crowFamiliar: {
			name: "Crow Familiar",
			damageLabel: "Impact Damage",
			cooldown: 32,
			damage: 40,
			spiritScaling: 0.744,
			dotHealthPercent: 0.022,
			debuffDuration: 5,
			healAmpReceivePenaltyPercent: 0,
			healAmpRegenPenaltyPercent: 0,
			bulletResistReduction: -0.06,
			techArmorDamageReduction: -0.06,
			upgrades: [
				{ healAmpReceivePenaltyPercent: -0.35, healAmpRegenPenaltyPercent: -0.35 },   // T1
				{ cooldown: -16, dotHealthPercent: 0.005 },   // T2
				{ bulletResistReduction: -0.08, techArmorDamageReduction: -0.08, debuffDuration: 2 }   // T3
			],
			upgradeNotes: [
				"T1: -35 Heal Amp Receive Penalty Percent, -35 Heal Amp Regen Penalty Percent",
				"T2: -16 Ability Cooldown, +0.5 Dot Health Percent",
				"T3: -8 Bullet Resist Reduction, -8 Spirit Armor Damage Reduction, +2 Debuff Duration"
			]
		},
		assassinate: {
			name: "Assassinate",
			damageLabel: "Low Health Enemy Damage Bonus",
			cooldown: 55,
			charges: 2,
			chargeCooldown: 2.5,
			damage: 90,
			spiritScaling: 2.3,
			weaponDamageBonusPerKill: 6,
			upgrades: [
				{ cooldown: -15 },   // T1
				{ damage: 80 },   // T2
				{ weaponDamageBonusPerKill: 4 }   // T3
			],
			upgradeNotes: [
				"T1: -15 Ability Cooldown",
				"T2: +80 Low Health Enemy Damage Bonus",
				"T3: +4 Weapon Damage Bonus Per Kill"
			]
		}
	},
	violet: {
		livingInk: {
			name: "Living Ink",
			damageLabel: "Damage",
			cooldown: 22,
			duration: 10,
			radius: 2.5,
			charges: 2,
			chargeCooldown: 7,
			damage: 35,
			spiritScaling: 0.7,
			bulletDamageMultiplier: 1.2,   // empowered bullets deal 120% bullet damage
			cooldownReductionPerHit: 1.5,  // seconds
			maxDrawDistance: 25,
			maxDrawDistanceScale: 0.12,
			stackDuration: 0,
			maxStacks: 0,
			bonusFireRatePerStack: 0,
			upgrades: [
				{ cooldown: -4, maxDrawDistance: 15 },   // T1
				{ maxStacks: 5, stackDuration: 10, bonusFireRatePerStack: 0.1 },   // T2
				{ bulletDamageMultiplier: 0.3, cooldownReductionPerHit: 1, spiritScaling: 0.4 }   // T3
			],
			upgradeNotes: [
				"T1: -4s Cooldown, +15m Max Draw Distance",
				"T2: +5 Max Stacks, +10s Stack Duration, +10% Fire Rate per Stack",
				"T3: +30% Bullet Damage Multiplier, +1s Cooldown Reduction per Hit, +0.4 Damage spirit scaling"
			]
		},
		flowState: {
			name: "Flow State",
			damageLabel: "Max Damage",
			cooldown: 23,
			damage: 100,
			spiritScaling: 1.8,
			minDamage: 50,
			minDamageScale: 0.9,
			groundAuraDuration: 6,
			explosionRadius: 15,
			staminaCooldownReduction: 0,   // decimal; see note in the reply about this one
			outgoingDamageAmp: 0,
			damageAmpBuildDuration: 0,
			damageAmpDuration: 0,
			upgrades: [
				{ staminaCooldownReduction: 1.5 },   // T1
				{ cooldown: -6, explosionRadius: 8, groundAuraDuration: 4 },   // T2
				{ outgoingDamageAmp: 0.2, damageAmpBuildDuration: 4, damageAmpDuration: 6 }   // T3
			],
			upgradeNotes: [
				"T1: +150% Stamina Cooldown Reduction",
				"T2: -6s Cooldown, +8m Explosion Radius, +4s Ground Aura Duration",
				"T3: +20% Outgoing Damage Amp, +4s Amp Build Duration, +6s Amp Duration"
			]
		},
		stillLife: {
			name: "Still Life",
			damageLabel: "Damage",
			cooldown: 35,
			castRange: 25,
			damage: 60,
			spiritScaling: 1.4,
			sketchDps: 30,                 // DPS while you look at the subject
			sketchDpsScale: 0.7,
			stunDuration: 1,
			buffDuration: 0,
			hpRegen: 0,
			hpRegenScale: 0,
			targetOutgoingDamage: 0,       // decimal; negative = the subject deals less damage
			moveSpeedBonus: 0,             // decimal (0.2 = 20%)
			upgrades: [
				{ buffDuration: 4, hpRegen: 15, hpRegenScale: 0.25 },   // T1
				{ targetOutgoingDamage: -0.35 },   // T2
				{ cooldown: -11, stunDuration: 0.35, moveSpeedBonus: 0.2 }   // T3
			],
			upgradeNotes: [
				"T1: +4s Buff Duration, +15 Health Regen, +0.25 Health Regen spirit scaling",
				"T2: Subject deals -35% damage",
				"T3: -11s Cooldown, +0.35s Stun Duration, +20% Move Speed"
			]
		},
		abstractLandscape: {
			name: "Abstract Landscape",
			damageLabel: "Damage",
			cooldown: 165,
			duration: 6,
			durationScale: 0.04,
			damage: 100,
			spiritScaling: 1.4,
			spiritPower: 25,               // granted to allies inside
			silenceDuration: 2,
			spiritLifesteal: 0,
			destroyOnDamage: 1,            // flag: 1 = ink breaks when enemies take its damage
			upgrades: [
				{ cooldown: -20 },   // T1
				{ spiritLifesteal: 0.25, spiritPower: 15 },   // T2
				{ silenceDuration: 1.25, duration: 4, destroyOnDamage: -1 }   // T3
			],
			upgradeNotes: [
				"T1: -20s Cooldown",
				"T2: +25% Spirit Lifesteal vs heroes, +15 Spirit Power",
				"T3: +1.25s Silence, +4s Duration, ink no longer breaks"
			]
		}
	},
	viscous: {
		splatter: {
			name: "Splatter",
			damageLabel: "Damage",
			cooldown: 26,
			radius: 5,
			damage: 55,
			spiritScaling: 0.7,
			maxBounces: 2,
			upgrades: [
				{ damage: 36, radius: 1.5 },   // T1
				{ cooldown: -14 },   // T2
				{ maxBounces: 1, spiritScaling: 0.9 }   // T3
			],
			upgradeNotes: [
				"T1: +36 Damage, +1.5m Radius",
				"T2: -14 Ability Cooldown",
				"T3: +1 Max Bounces, +0.9 Damage spirit scaling"
			]
		},
		theCube: {
			name: "The Cube",
			cooldown: 42,
			duration: 3,
			castRange: 20,
			hpRegen: 40,
			hpRegenScale: 0.3,
			purgeDebuffs: 0,
			postCubeBuff: 0,
			moveSpeed: 0,
			staminaCooldownReduction: 0,
			upgrades: [
				{ moveSpeed: 2.5, staminaCooldownReduction: 0.3, postCubeBuff: 1 },   // T1
				{ hpRegen: 25, duration: 1 },   // T2
				{ cooldown: -20, purgeDebuffs: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +2.5m Bonus Move Speed, +30 Stamina Cooldown Reduction, +1 Post Cube Buff",
				"T2: +25 Bonus Health Regen, +1 Ability Duration",
				"T3: -20 Ability Cooldown, +1 Purge Debuffs"
			]
		},
		puddlePunch: {
			name: "Puddle Punch",
			damageLabel: "Damage",
			cooldown: 24,
			castRange: 40,
			radius: 4,
			charges: 1,
			chargeCooldown: 1.7,
			damage: 20,
			spiritScaling: 0,
			damageHeavyMelee: 0,
			damageHeavyMeleeScale: 0,
			useHeavyMelee: 0,
			spiritLifesteal: 0,
			upgrades: [
				{ charges: 1, damage: 20 },   // T1
				{ radius: 1.5, spiritLifesteal: 0.6 },   // T2
				{ cooldown: -14, useHeavyMelee: 1, damageHeavyMeleeScale: 0.6, damageHeavyMelee: 40, damage: -40 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Ability Charges, +20 Damage",
				"T2: +1.5m Radius, +60 Life Steal Percent On Hit",
				"T3: -14 Ability Cooldown, +1 Use Heavy Melee, +0.6 Damage Heavy Melee spirit scaling, +40 Damage Heavy Melee, Damage spirit scaling multiplied (game value 0; not applied by abilityAt), -40 Damage"
			],
			notes: [
				"Damage also scales with LightMeleeDamage (x0.6)",
				"Damage Heavy Melee also scales with HeavyMeleeDamage (x0)"
			]
		},
		gooBall: {
			name: "Goo Ball",
			damageLabel: "Damage",
			cooldown: 150,
			duration: 11,
			damage: 110,
			spiritScaling: 1,
			stunDuration: 0.5,
			spiritResistance: 0.35,
			bulletResistance: 0.35,
			upgrades: [
				{ cooldown: -25 },   // T1
				{ damage: 70, bulletResistance: 0.2, spiritResistance: 0.2 },   // T2
				{ duration: 7, stunDuration: 0.3, spiritScaling: 0.2 }   // T3
			],
			upgradeNotes: [
				"T1: -25 Ability Cooldown",
				"T2: +70 Damage, +20 Bullet Resist, +20 Spirit Resist",
				"T3: +7 Ability Duration, +0.3 Stun Duration, +0.2 Damage spirit scaling"
			]
		}
	},
	vyper: {
		screwjabDagger: {
			name: "Screwjab Dagger",
			damageLabel: "Damage",
			cooldown: 10,
			charges: 2,
			chargeCooldown: 4,
			damage: 50,
			spiritScaling: 0.8,
			damagePerStack: 25,
			damagePerStackScale: 0.4,
			bulletResistReduction: 0,
			bulletResistReductionPerStack: 0,
			maxStacks: 3,
			cooldownRefundPercent: 0,
			upgrades: [
				{ charges: 1 },   // T1
				{ bulletResistReduction: -0.08, bulletResistReductionPerStack: -0.06 },   // T2
				{ cooldownRefundPercent: 0.55, maxStacks: 2, chargeCooldown: -2 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Ability Charges",
				"T2: -8 Bullet Resist Reduction, -6 Bullet Resist Reduction Per Stack",
				"T3: +55 Cooldown Refund Percent, +2 Max Stacks, -2 Ability Cooldown Between Charge"
			]
		},
		lethalVenom: {
			name: "Lethal Venom",
			damageLabel: "Venom Max Damage",
			cooldown: 28,
			castRange: 10,
			damage: 140,
			spiritScaling: 2.79,
			venomMinDamage: 20,
			venomMinDamageScale: 0.651,
			healAmpReceivePenaltyPercent: 0,
			healAmpRegenPenaltyPercent: 0,
			buildUpPerShot: 0,
			upgrades: [
				{ damage: 31.5 },   // T1
				{ healAmpRegenPenaltyPercent: -0.4, healAmpReceivePenaltyPercent: -0.4, cooldown: -12 },   // T2
				{ buildUpPerShot: 4.5 }   // T3
			],
			upgradeNotes: [
				"T1: +31.5 Venom Max Damage",
				"T2: -40 Heal Amp Regen Penalty Percent, -40 Heal Amp Receive Penalty Percent, -12 Ability Cooldown",
				"T3: +4.5 Build Up Per Shot"
			],
			notes: ["Ability Cast Range also scales with LevelUpBoons (x0.2)"]
		},
		slither: {
			name: "Slither",
			cooldown: 0,
			slideDistance: 0.15,
			stamina: 0,
			combatBarrier: 0,
			combatBarrierScale: 0,
			buffDuration: 0,
			upgrades: [
				{ slideDistance: 0.2 },   // T1
				{ stamina: 2 },   // T2
				{ buffDuration: 4, combatBarrier: 180, cooldown: 8, combatBarrierScale: 0.8 }   // T3
			],
			upgradeNotes: [
				"T1: +20 Slide Scale",
				"T2: +2 Stamina",
				"T3: +4 Buff Duration, +180 Combat Barrier, +8 Ability Cooldown, +0.8 Combat Barrier spirit scaling"
			]
		},
		petrifyingBola: {
			name: "Petrifying Bola",
			damageLabel: "Petrify Damage",
			cooldown: 115,
			radius: 12,
			damage: 180,
			spiritScaling: 2.046,
			petrifyDuration: 2.2,
			upgrades: [
				{ damage: 49.5 },   // T1
				{ cooldown: -20 },   // T2
				{ petrifyDuration: 1 }   // T3
			],
			upgradeNotes: ["T1: +49.5 Petrify Damage", "T2: -20 Ability Cooldown", "T3: +1 Petrify Duration"]
		}
	},
	warden: {
		alchemicalFlask: {
			name: "Alchemical Flask",
			damageLabel: "Damage",
			cooldown: 12,
			radius: 5.5,
			damage: 60,
			spiritScaling: 0.63,
			weaponPowerDebuff: -0.25,
			fireRateSlow: 0,
			staminaReduction: 0,
			upgrades: [
				{ staminaReduction: 1 },   // T1
				{ damage: 35, weaponPowerDebuff: -0.25 },   // T2
				{ fireRateSlow: 0.3, cooldown: -7, radius: 2 }   // T3
			],
			upgradeNotes: [
				"T1: +1 Stamina Reduction",
				"T2: +35 Damage, -25 Weapon Power Debuff",
				"T3: +30 Fire Rate Slow, -7 Ability Cooldown, +2m Radius"
			]
		},
		willpower: {
			name: "Willpower",
			cooldown: 40,
			duration: 5,
			moveSpeedBonusPct: 0.15,
			combatBarrier: 125,
			combatBarrierScale: 0.8,
			debuffResistance: 0,
			upgrades: [
				{ moveSpeedBonusPct: 0.2 },   // T1
				{ cooldown: -24, duration: 2 },   // T2
				{ debuffResistance: 0.3, combatBarrierScale: 2.1 }   // T3
			],
			upgradeNotes: [
				"T1: +20 Move Speed Bonus Pct",
				"T2: -24 Ability Cooldown, +2 Ability Duration",
				"T3: +30 Status Resistance Percent, +2.1 Combat Barrier spirit scaling"
			]
		},
		bindingWord: {
			name: "Binding Word",
			damageLabel: "Damage",
			cooldown: 34,
			castRange: 15,
			damage: 110,
			spiritScaling: 2.437,
			immobilizeDuration: 1.75,
			bulletArmorReduction: 0,
			bulletArmorReductionDuration: 0,
			silenceDebuff: 0,
			upgrades: [
				{ bulletArmorReduction: 0.2, bulletArmorReductionDuration: 5 },   // T1
				{ immobilizeDuration: 0.75 },   // T2
				{ cooldown: -14, silenceDebuff: 1 }   // T3
			],
			upgradeNotes: [
				"T1: +20 Bullet Armor Reduction, +5 Bullet Armor Reduction Duration",
				"T2: +0.75 Immobilize Duration",
				"T3: -14 Ability Cooldown, +1 Silence Debuff"
			]
		},
		lastStand: {
			name: "Last Stand",
			damageLabel: "Pulse DPS",
			cooldown: 180,
			duration: 6,
			radius: 12,
			damage: 70,
			spiritScaling: 1.3,
			bulletResistance: 0.5,
			spiritResistance: 0.5,
			unstoppableCastDelay: 0,
			upgrades: [
				{ radius: 4 },   // T1
				{ damage: 40.5, cooldown: -30 },   // T2
				{ duration: 4, unstoppableCastDelay: 1, bulletResistance: 0.3, spiritResistance: 0.3 }   // T3
			],
			upgradeNotes: [
				"T1: +4m Radius",
				"T2: +40.5 Pulse DPS, -30 Ability Cooldown",
				"T3: +4 Ability Duration, +1 Unstoppable Cast Delay, +30 Bullet Resist, +30 Spirit Resist"
			]
		}
	},
	wraith: {
		cardTrick: {
			name: "Card Trick",
			damageLabel: "Damage",
			cooldown: 0.6,
			castRange: 500,
			radius: 4,
			charges: 2,
			damage: 45,
			spiritScaling: 0.55,
			clubSlowPercent: 0.24,
			diamondResistShred: -0.07,
			improvedJokerChance: 0,
			heartHeal: 60,
			heartHealScale: 0.5,
			spadeDamageBonus: 60,
			upgrades: [
				{ charges: 2 },   // T1
				{ damage: 40, spiritScaling: 0.4 },   // T2
				{ improvedJokerChance: 1, spadeDamageBonus: 40, diamondResistShred: -0.04, heartHeal: 75, heartHealScale: 0.5, clubSlowPercent: 0.12 }   // T3
			],
			upgradeNotes: [
				"T1: +2 Ability Charges",
				"T2: +40 Damage, +0.4 Damage spirit scaling",
				"T3: +1 Improved Joker Chance, +40 Spade Damage Bonus, -4 Diamond Resist Shred, +75 Heart Heal, +0.5 Heart Heal spirit scaling, +12 Club Slow Percent"
			],
			notes: [
				"Ability Cooldown also scales with TechCooldown (x0)",
				"Ability Cast Range also scales with TechRange (x0)"
			]
		},
		projectMind: {
			name: "Project Mind",
			cooldown: 46,
			castRange: 25,
			combatBarrier: 0,
			combatBarrierScale: 0,
			barrierDuration: 0,
			upgrades: [
				{ castRange: 15 },   // T1
				{ combatBarrier: 300, barrierDuration: 5, combatBarrierScale: 1.7 },   // T2
				{ cooldown: -32 }   // T3
			],
			upgradeNotes: [
				"T1: +15m Ability Cast Range",
				"T2: +300 Combat Barrier, +5 Barrier Duration, +1.7 Combat Barrier spirit scaling",
				"T3: -32 Ability Cooldown"
			]
		},
		fullAuto: {
			name: "Full Auto",
			damageLabel: "Magic Damage Per Bullet",
			cooldown: 45,
			duration: 5,
			damage: 2,
			spiritScaling: 0.045,
			bonusFireRate: 0.2,
			unlimitedAmmo: 0,
			upgrades: [
				{ cooldown: -20 },   // T1
				{ bonusFireRate: 0.1, duration: 3 },   // T2
				{ spiritScaling: 0.045, unlimitedAmmo: 1 }   // T3
			],
			upgradeNotes: [
				"T1: -20 Ability Cooldown",
				"T2: +10 Bonus Fire Rate, +3 Ability Duration",
				"T3: +0.045 Magic Damage Per Bullet spirit scaling, +1 Unlimited Ammo"
			]
		},
		telekinesis: {
			name: "Telekinesis",
			damageLabel: "Damage",
			cooldown: 150,
			duration: 2.25,
			castRange: 10,
			damage: 100,
			spiritScaling: 1,
			tossDistance: 13,
			upgrades: [
				{ damage: 100 },   // T1
				{ cooldown: -45 },   // T2
				{ duration: 1.5, tossDistance: 6, castRange: 6 }   // T3
			],
			upgradeNotes: [
				"T1: +100 Damage",
				"T2: -45 Ability Cooldown",
				"T3: +1.5 Ability Duration, +6m Toss Distance, +6m Ability Cast Range"
			]
		}
	},
	yamato: {
		powerSlash: {
			name: "Power Slash",
			damageLabel: "Full Charge Damage",
			cooldown: 12,
			damage: 145,
			spiritScaling: 1.85,
			slashLength: 22,
			slowDuration: 0,
			slowPercent: 0,
			upgrades: [
				{ slowDuration: 3, slowPercent: 0.32 },   // T1
				{ cooldown: -4 },   // T2
				{ damage: 150, spiritScaling: 0.5, slashLength: 8 }   // T3
			],
			upgradeNotes: [
				"T1: +3 Slow Duration, +32 Slow Percent",
				"T2: -4 Ability Cooldown",
				"T3: +150 Full Charge Damage, +0.5 Full Charge Damage spirit scaling, +8m Slash Length"
			]
		},
		flyingSlash: {
			name: "Flying Slash",
			cooldown: 36,
			castRange: 26,
			charges: 1,
			chargeCooldown: 0,
			spiritPower: 0,
			buffDuration: 0,
			canGrappleAllyHeroes: 0,
			upgrades: [
				{ cooldown: -18 },   // T1
				{ spiritPower: 35, buffDuration: 6 },   // T2
				{ castRange: 15, canGrappleAllyHeroes: 1, charges: 2, chargeCooldown: 5 }   // T3
			],
			upgradeNotes: [
				"T1: -18 Ability Cooldown",
				"T2: +35 Spirit Bonus, +6 Buff Duration",
				"T3: +15m Ability Cast Range, +1 Can Grapple Ally Heroes, +2 Ability Charges, +5 Ability Cooldown Between Charge"
			]
		},
		crimsonSlash: {
			name: "Crimson Slash",
			damageLabel: "Damage",
			cooldown: 16,
			radius: 13,
			damage: 55,
			spiritScaling: 0.37,
			healFixedHealth: 55,
			healFixedHealthScale: 1.036,
			healMaxHealth: 0,
			buffDuration: 0,
			buffMeleeDamage: 0,
			upgrades: [
				{ buffDuration: 4, buffMeleeDamage: 30 },   // T1
				{ healMaxHealth: 0.06 },   // T2
				{ cooldown: -10, spiritScaling: 0.6, healFixedHealthScale: 0.4 }   // T3
			],
			upgradeNotes: [
				"T1: +4 Buff Duration, +30 Buff Melee Damage",
				"T2: +6 Heal Max Health",
				"T3: -10 Ability Cooldown, +0.6 Damage spirit scaling, +0.4 Heal Fixed Health spirit scaling"
			],
			notes: ["Buff Duration also scales with scale_function_tech_duration (x1)"]
		},
		shadowTransformation: {
			name: "Shadow Transformation",
			cooldown: 150,
			duration: 5,
			moveSpeed: 0,
			weaponDamageBonus: 0,
			bulletResistance: 0.3,
			spiritResistance: 0.3,
			upgrades: [
				{ weaponDamageBonus: 7 },   // T1
				{ moveSpeed: 4, cooldown: -20 },   // T2
				{ duration: 3, bulletResistance: 0.3, spiritResistance: 0.3 }   // T3
			],
			upgradeNotes: [
				"T1: +7 Weapon Damage Bonus",
				"T2: +4m Bonus Move Speed, -20 Ability Cooldown",
				"T3: +3 Ability Duration, +30 Bullet Resist, +30 Spirit Resist"
			]
		}
	}
};
const HERO_ABILITY_DESCRIPTIONS = {
	abrams: {
		siphonLife: "Drain health from nearby enemies, dealing Spirit DPS and Healing for a portion of the damage dealt.",
		shoulderCharge: "Charge forward, Pulling enemies you hit. Pushing a hero into a wall applies Stun. If you collide with a hero you move faster during your charge.",
		infernalResilience: "Gain bonus defensive attributes. Taking damage grants temporary Regen for a portion of the damage taken.",
		seismicImpact: "Leap high into the air before crashing into the ground, dealing Spirit Damage and applying Stun.",
	},
	apollo: {
		disengagingSigil: "Draw a sigil sphere in front of you and then leap backwards as it explodes, damaging and slowing enemies caught in it.",
		riposte: "Prepare to deflect the next incoming attack. On a successful deflection, briefly become invulnerable and target an enemy hero to dash towards them, stunning them and reducing their Melee Resist. Press to select a target. Does not trigger against trooper or neutral damage.",
		flawlessAdvance: "Perform a series of lunges in any direction, delivering piercing stabs ahead of you. Hold your ability key to time your attacks, dealing more damage the longer it's held. Releasing your attack during the perfect window deals maximum damage. Press to re-cast.",
		itaniLoSahn: "Charge up and perform a long range slash. Struck enemies cannot take action or heal and are stuck in slow motion. When this effect expires, they suffer devastating damage, dealing bonus damage against half-health enemies. While in slow motion, Apollo is invulnerable and enemies take reduced damage. Hold or to delay the cast.",
	},
	baba: {
		threadsap: "Weave a scraggly thread that follows your crosshair before bursting along its path, dealing Spirit Damage and stealing enemy Spirit, increased in effectiveness for Baba. While holding stolen Spirit, Baba deals Bonus Spirit Damage with every bullet.",
		grannyLongLegs: "Your bench's legs extend, granting Bonus Move Speed, higher jumps, Debuff Resistance and Melee Resistance. Light Melee: Perform a kick that knocks enemies back. Heavy Melee: Perform a ground pound that applies Knock Up, Slow, and deals Spirit Damage. Hold to charge a high jump, release to jump.",
		babasBrew: "Brew a pot of tea that applies a magical effect in an area when thrown, cycling over time between a soothing Combat Barrier, Silence, or scalding burn that deals Spirit DPS and reduces Spirit Resist. Press to pause or resume brewing.",
		feedTheBirds: "Cover targets in front of you with bread, adding a stacking Slow. When the channel ends a flock of pigeons bombard the targets, dealing Spirit Damage and hexing each target into a pigeon, increasing in both damage and duration based on bread count.",
	},
	bebop: {
		explodingUppercut: "Deal Melee Damage to nearby enemies and apply Knock Back. When they land, they deal Spirit Damage and apply Reduced Fire Rate to other nearby enemies. Exploding Uppercut can be used on allies.",
		stickyBomb: "Attach a bomb that explodes after a delay, dealing Spirit Damage to nearby enemies. If the bomb hits or kills a hero, you gain permanent bonus damage on Sticky Bomb. Stacks diminish by half after 60 hits and 7 kills",
		grappleArm: "Launch out a mechanical hand that Pulls the first character it hits, reeling them in. Grapple Arm can be used on allies.",
		hyperBeam: "Channel a powerful torrent of energy that deals Spirit Damage and applies Slow.",
	},
	billy: {
		bashdown: "Slam your bat into the ground, Pulling enemies down and dealing Melee Damage. The slam creates a shockwave that deals Spirit Damage and applies Knock Up.",
		risingRam: "Charge head-first into an enemy and send them into the air along with Billy. Cooldown reduced by 50% on impact.",
		blasted: "Passive: Melee hits restore ammo and inflict wrecked on the victim for 7s.",
		chainGang: "Chain nearby enemies to you. Chained enemies cannot use movement abilities and receive a heavy Slow when they pull on the chain. After a delay, yank everyone towards Billy and deal Spirit Damage. The chain breaks if you lose line of sight for a short while.",
	},
	calico: {
		gloomBombs: "Throw a cluster of bombs that detonate after a delay, dealing Spirit Damage. Enemies hit by multiple bombs take 65% damage.",
		leapingSlash: "Dash forward before slashing all enemies in a circle, dealing Melee Damage. If the ability hits at least one hero, Heal a small amount of health.",
		ava: "Turn to shadows and possess Ava. You gain Bonus Move Speed that increases over time, and become hidden on the minimap. Taking damage from an enemy hero resets your bonus move speed and puts Ava on a brief cooldown.",
		returnToShadows: "Instantly turn to shadows, becoming untargetable, gaining Bonus Move Speed, and dealing Spirit Damage. After a delay, return from the shadows, dealing Spirit Damage again.",
	},
	celeste: {
		lightEater: "Blast enemies in a cone in front of you with a flare of light. Blasted enemies take Spirit Damage when attacked by and provides her spirit lifesteal.",
		dazzlingTrick: "Surround yourself in a protective prism. If the barrier is destroyed, it silences nearby enemies and deals a portion of the barrier as damage.",
		radiantDaggers: "Call down a beam of light from the sky. After a short duration, the beam will fully form, causing an explosion that deals Spirit Damage to all targets in the area. Celeste will receive a stacking buff that increases her spirit damage anytime this hits an enemy hero.",
		shiningWonder: "Launch a deadly orb of light that deals Spirit Damage and applies Slow and reduces Dash Distance on impact. The orb then bounces to the enemies within range. If no target is found, the orb will linger for a short duration while continuing to look for targets. Prioritizes enemy heroes when picking targets.",
	},
	deadmanDanny: {
		strixSalvo: "Launch a salvo of spirit missiles that lodge into the ground along a line. The missiles explode after a delay or upon detecting an enemy, dealing Spirit Damage and marking the target. Shooting a marked enemy with a charged shot consumes a mark to deal Bonus Spirit Damage and apply a fading Slow. Hold and drag to select the angle.",
		chimeraMk1: "Hold to fly, building up heat. When max heat is reached, your jetpack will begin to overheat. Overheating: After a short delay, dive to the ground. Upon impact, create an explosion that deals damage and launches you and nearby enemies. If no hero is hit, you stun yourself. Press to dive early. Cooling Down: After overheating, the jetpack cannot be used until it fully cools down. Slows affect you while airborne. You always explode on death.",
		jettisonFuel: "Spray fuel dealing Weapon DPS and shredding Bullet Resist, building up to a huge backblast that deals Spirit Damage and knocks you backwards. Vents the jetpack when dealing damage.",
		closeTheDeal: "Grab an enemy and give them a hands-on demonstration, flying high into the air before crashing back to the ground. You and the participant take Spirit DPS while falling and Spirit Damage upon impact. Damage is increased to enemies under 50% health.",
	},
	doorman: {
		callBell: "Throw out a call bell that deals Spirit Damage on impact. After a short delay it explodes, dealing additional Spirit Damage and causing affected enemies to suffer reduced weapon accuracy and movement Slow. Can be shot to detonate early.",
		doorway: "Place two connected doors in the world. Players and most projectiles entering one door will exit out through the other. The doors will close at the end of the duration. The two doors must be placed within the doorway distance of each other.",
		luggageCart: "Send out a Luggage Cart that deals Spirit Damage and Pulls enemy heroes along its path. Can be alt cast with to target friendly heroes instead.",
		hotelGuest: "Send the target's physical body to be a guest at the Baroness Hotel. The guest is to promptly make their way to the exit elevator, where they'll be sent back to their original position. A stay at the Baroness Hotel is paid for in Spirit Damage. Failure to check-out on time costs additional Spirit Damage.",
	},
	drifter: {
		rend: "Swipe at enemies in a cone ahead of you, dealing Spirit Damage. If the enemy is in close range, deal bonus Melee Damage.",
		stalkersMark: "Send out a mark that bleeds the first target it hits, dealing Spirit DPS. While the enemy is bleeding you can re-activate Stalker's Mark to instantly appear behind their back.",
		bloodscent: "Isolated heroes leave a trail as they move, and emit their heartbeat from afar. You deal amplified damage against isolated heroes, and when isolated heroes die nearby you gain permanent Weapon Damage. Active: Accentuate your senses, revealing a trail that leads to nearby heroes. On Isolated Hero Death:",
		eternalNight: "Surround nearby enemy heroes in darkness, severely limiting their vision of other units. Affected enemies are briefly revealed to you and are considered isolated for the duration. You gain Bonus Sprint Speed.",
	},
	dynamo: {
		kineticPulse: "Release an energy pulse that travels along the ground, dealing Spirit Damage and applying Knock Up.",
		quantumEntanglement: "Briefly become untargetable while teleporting to the target location. Restores stamina upon use. : Bring nearby allies with you.",
		rejuvenatingAurora: "While channeling, restore health over time to you and any allies nearby. You can dash and melee without breaking the channel.",
		singularity: "Create a singularity in your hands, dealing Spirit DPS, applying Stun, and pulling in nearby enemies.",
	},
	graves: {
		jarOfDead: "Passive: Collect death when anything dies nearby and store it in your Jar of Dead. Active: Throw a jar to summon Deadheads that repeatedly deal Spirit Damage to enemies. Deadheads follow you instead if there's no nearby enemies, and prioritize the target of your weapon.",
		graspingHands: "Unearth a line of grasping hands, summoning a Ghoul and leaving behind a rift. Enemies who pass through take Spirit Damage and receive Immobilize. Alt-Cast rotates the orientation of the wall.",
		essenceTheft: "Your weapon steals Weapon Damage and Spirit Resist over time, up to a maximum amount per target.",
		borrowedDecree: "Innate: Abilities can summon Ghouls that shamble toward the enemy base, dealing Melee Damage. They explode when they approach a hero or objective, dealing Spirit Damage in an area and applying a brief Slow Active: Create a gravestone at a target location that summons Ghouls over time. Enemies can destroy the gravestone with two heavy melees.",
	},
	greyTalon: {
		chargedShot: "Charge up a powerful shot that pierces through enemies. Hold or to hold the shot.",
		rainOfArrows: "Launches you high in the air, allowing you to glide slowly. While airborne, you gain Weapon Damage and multishot on your weapon. for reduced jump height. Pressto cancel the glide.",
		spiritSnare: "Throw out a trap that begins to arm itself. Once armed, the trap will trigger when an enemy enters its radius, applying Curse and Movement Slow that interrupts, Silences, Disarms, and prevents item usage. Hit the trap with a Charged Shot to detonate early with increased radius.",
		guidedOwl: "After 1.5s cast time, launch a spirit owl that you control and which explodes on impact, damaging and stunning enemies. Holdto accelerate the owl. Pressto release control. Gain permanent Spirit Power for each enemy hero killed with Guided Owl.",
	},
	haze: {
		sleepDagger: "Throw a dagger that damages and sleeps the target. Sleeping targets wake up shortly after being damaged. Throwing a Dagger does not break your invisibility. Sleep Dagger does not interrupt enemies' channeling abilities.",
		smokeBomb: "Fade out of sight, becoming invisible and gaining sprint speed. Attacking removes invisibility, but using items does not. Close enemies can see through your invisibility.",
		fixation: "Shooting a target increases your bullet damage on that target. Gain one stack per bullet hit, three if the hit is a headshot.",
		bulletDance: "Enter a flurry, firing your weapon at nearby enemies with perfect accuracy and added Bullet Damage.",
	},
	holliday: {
		powderKeg: "Throw a barrel that explodes after a delay, dealing Spirit Damage, setting enemies on fire and applying Knock Up. The barrel can be detonated early by being shot, melee'd, or detonated by another barrel. The burn stacks, so overlapping barrels burn for their combined damage. Can be Alt-Cast to place the barrel in front of.",
		bouncePad: "Drop a bounce pad in the world that launches any hero. You explode on landing, dealing Damage to any nearby enemies. The explosion can only occur once per person per Bounce Pad.",
		crackshot: "Headshots deal bonus Damage and applies a Fading Move Speed penalty. This effect can only occur when off cooldown. Cooldown is reduced by 50% on NPC hits. Crackshot ignores range damage fall-off and does not apply to objectives.",
		spiritLasso: "Throw out your lasso, dealing Spirit Damage, Pulling, and applying Stun. Using a Bounce Pad extends the duration of Spirit Lasso.",
	},
	infernus: {
		napalm: "Spew an incendiary mixture, dealing Spirit Damage, applying Slow, and coating targets in napalm.",
		flameDash: "Dash forward, gaining Slow Resistance while leaving a flaming trail that deals Spirit DPS. Holdwhile active to dash farther.",
		afterburn: "Weapon hits build up a burning effect, dealing Spirit DPS. Abilities refresh to the base burn duration and weapon hits extend it.",
		concussiveCombustion: "Become a living bomb, dealing Spirit Damage and applying Stun to all nearby enemies after a delay. Once cast, Concussive Combustion cannot be interrupted.",
	},
	ivy: {
		entanglingThorns: "Summon a patch of choking thorns that damages and slows enemies in its radius.",
		kudzuConnection: "Connect with a nearby ally to gain bonuses, replicated healing, and ignore the move speed penalty while shooting. Receive 50% of Bonuses with no connection Connection requires line of sight.",
		stoneForm: "Turn yourself into impervious stone and smash into the ground, stunning and damaging enemies nearby. Heals you for a percentage of your max health.",
		airDrop: "Grab an ally and take flight with them. Drop your ally to cause an explosion, dealing Spirit Damage. You and your ally gain increased Outgoing Damage when flying ends. Cooldown reduced by 30% when used on allies. Taking damage briefly disables using the ability. While lifted, your ally cannot attack and deals -20% damage.",
	},
	kelvin: {
		frostGrenade: "Throw a grenade that explodes in a cloud of freezing ice that Heals allies and applies Spirit Damage and move speed reduction to enemies.",
		icePath: "creates a floating trail of ice and snow that gives movement bonuses to him and his allies. Kelvin gains 60% slow resistance for the duration. Enemies can also walk on the floating trail. Press / to travel up or down while in Ice Path.",
		arcticBeam: "Shoot freezing cold energy out in front of you, damaging targets and progressively reducing their movement and fire rate the longer you sustain the beam on them. You have reduced move speed while using Arctic Beam. The beam may also claim Souls.",
		frozenShelter: "Target yourself or a Hero to freeze the air and create an impenetrable dome around them. While in the dome, allies gain rapid Regen and enemies are slowed. Objectives become Invulnerable and Frozen under Frozen Shelter",
	},
	ladyGeist: {
		essenceBomb: "Sacrifice some of your health to launch a bomb that deals damage after a brief arm time. Self damage type is Spirit and can be mitigated.",
		lifeDrain: "Create a tether that drains enemy health over time and heals you. Target must be in line of sight and within max range to drain. You can shoot and use other abilities during the drain, but your move speed is reduced. to give health to friendly Heroes.",
		malice: "Sacrifice some of your health to launch blood shards that apply a stack of Malice. Each stack slows the victim and increases the damage they take from you. The slow effect decreases over time.",
		soulExchange: "Swaps health levels with an enemy target. There is a minimum health percentage that enemies can be brought down to and a minimum amount of health received based on victims current health.",
	},
	lash: {
		groundStrike: "Stomp the ground beneath you, damaging enemies in front of you. If you perform Ground Strike while airborne, you quickly dive towards the ground. Damage grows slower after 25m.",
		grapple: "Pull yourself through the air toward a target. Using Grapple also resets your limit of air jumps and dashes.",
		flog: "Strike enemies in front of you with your whip, Healing for a portion of the damage dealt.",
		deathSlam: "Focus on enemies to connect whips to them. After channeling, connected enemies are lifted and stunned then slammed into the ground. Your victims and any enemies in the landing zone will be damaged and slowed. Pressto throw connected enemies early. Enemies that are not in line of sight or go out of range during the latch time will not be grabbed.",
	},
	mcginnis: {
		miniTurret: "Deploy a turret that shoots enemies, dealing Spirit DPS. The turret expires after a limited lifetime. Turrets deal reduced damage to troopers and objectives.",
		medicinalSpecter: "Deploy a spirit that provides Healing to nearby allies.",
		spectralWall: "Cast a wall that applies slow on enemies it passes through. Erupt the wall to divide the terrain in half and damage nearby enemies. After casting, pressorto erupt the wall early. Can be Destroyed with Melee Attacks",
		heavyBarrage: "Unleashes a volley of rockets that home in on a targeted location. is slowed and is still able to use stamina.",
	},
	mina: {
		rake: "(no description in game files)",
		sanguineRetreat: "Briefly disperse, becoming untargetable and flying to a target location. Can be recast within a brief window.",
		loveBites: "Your bullets apply additional Spirit Damage. Dealing damage with your abilities builds up to a vicious bite, dealing a burst of Bonus Spirit Damage. Love Bites has a unique cooldown per target.",
		noxNostra: "Active: Unleash a cloud of bats that seek out targets, each dealing Spirit Damage and applying Silence. Passive: Triggering Love Bites against heroes permanently increases the number of bats released.",
	},
	mirage: {
		fireScarabs: "Infest an enemy with fire scarabs, stealing life from them and causing them to deal reduced damage.",
		dustDevil: "Transform yourself into a whirlwind that travels forward, damaging enemies, slowing their move speed and lifting them up in the air. After emerging from the tornado you gain bullet evasion.",
		djinnsMark: "Active: Consume all Djinn Marks to deal their damage now.",
		traveler: "Target a location on the minimap. After a brief wait, teleport to that location. Taking damage during the wait period causes the teleport to be interrupted.",
	},
	moAndKrill: {
		scorn: "Deal damage to nearby enemies and heal yourself based on the damage done. Heal is stronger against enemy heroes.",
		burrow: "Burrow underground, moving faster, and gaining spirit and bullet armor. Damage from enemy heroes will reduce the speed bonus. When you jump out, deal Spirit Damage, Slow, and Knock Up.",
		sandBlast: "Spray sand that disarms enemies in front of you and deals damage.",
		combo: "Hold the target in place, stunning them and dealing damage during the channel. If they die during, or within 3 seconds of Combo ending, you permanently gain max health.",
	},
	nurseHarrow: {
		leechTherapy: "Throw a jar of leeches that attach to enemies, dealing Spirit DPS and eating away at the duration of enemy buffs.",
		wretchedVapors: "Crack open a vial to release an ethereal vapor onto yourself or an ally that causes a rush, then a crash. Specter Rush: While it lasts, increases the speed of all actions and temporarily numbs all incoming damage creating looming specters. Specter Crash: When the vapors wear off, all actions are slower and any remaining specters deal their delayed damage plus extra damage. Incoming healing will prioritize removing specters first, preventing them from dealing damage.",
		healingNeedles: "Load your weapon with a full clip of syringes that Heal allies. Dealing damage recovers charges, and each leech you have collected slowly restores them. Reloading spends a charge for a fresh clip. Unused syringes are refunded as a partial charge. Recast to put them away.",
		lurkingTerrors: "Open your bag and reveal the horrors you carry inside, dealing Spirit DPS to enemies in front of you. Enemies looking at you build up terror and cannot use stamina or movement abilities. At max terror, they flee in fear away from you. Each leech you have collected adds fear duration. Enemies facing away from you take 50% damage unless feared.",
	},
	paige: {
		bookwyrm: "Conjure a dragon that appears at the target location before flying forward, dealing Spirit Damage and leaving a burning path in its trail.",
		plotArmor: "Grant an ally a Combat Barrier. While the barrier holds, they gain Bonus Weapon Damage.",
		captivatingRead: "Target an area with latent magic, applying Slow. The magic detonates after a delay, dealing Spirit Damage and applying Immobilize.",
		rallyingCharge: "Release a wave of spectral knights and steeds that charge across the entire city, Healing allies and dealing Spirit Damage to enemies. The strength of the Heal and Spirit Damage is amplified as the knights travel further.",
	},
	paradox: {
		pulseGrenade: "Throw a grenade that begins pulsing when it lands. Each pulse expands the radius and applies Spirit Damage, time slow, and stacking Damage Amp for against the victim.",
		timeWall: "Create a time warping wall that stops time for all enemy projectiles and bullets that touch it and increases the speed and damage of friendly bullets. Enemies that touch the wall will be briefly slowed.",
		kineticCarbine: "Charge up a powerful shot of time energy, dealing Spirit Damage and applying a Time-Stop to enemies hit. The damage dealt increases with Weapon Damage. Move speed is increased while charging. While in the air and charging, to timeslow your movement.",
		paradoxicalSwap: "Fire a projectile that swaps your position with the target enemy hero.",
	},
	pocket: {
		barrage: "Channel to start launching projectiles that deal Spirit Damage and apply Slow around their impact point. Projectiles that hit a hero grant Damage Amp that stacks. Casting while airborne will cause to float. Casting AirDash or Flying Cloak will not cancel Barrage.",
		flyingCloak: "Launch a sentient cloak that travels forward and damages enemies. You can press to teleport to its location.",
		enchantersSatchel: "Escape into your suitcase. When the duration ends, deal Spirit Damage to nearby enemies. Duration can be ended early by performing any action.",
		affliction: "Applies Spirit Icondamage over time to enemies nearby. Affliction's damage is non-lethal and does not apply item procs.",
	},
	ratKing: {
		scrapGrenade: "Throw a grenade of scrap that detonates multiple times, dealing Bullet Damage and applying Slow. The grenade can be meleed to knock it away.",
		ratSwarm: "Call forth a swarm of rats that leap onto enemies, dealing Spirit DPS and reducing their Bullet Resist with every bite. The more rats are attached, the faster they will bite the target. Enemies can have multiple rats attached, but can shake off a rat early by performing a ground or air dash.",
		royalPestments: "Adorn scrappy armor, gaining Combat Barrier based on your Max Health. As long as the armor holds, bullets have a chance to be deflected back towards the attacker. The barrier does not benefit from resists.",
		ruleRatannia: "Charge up and summon the banner of Ratannia, granting all nearby allies increased Move Speed, immunity from slows, and reduced incoming damage while near the banner.",
	},
	rem: {
		pillowToss: "Throw your trusty pillow inflicting Spirit Damage and heavy Knock Back. Landing hits reduces the cooldown of your other abilities.",
		tagAlong: "Jump to an ally and nap alongside them. Both you and the ally receive a burst Heal based on missing health followed by lingering Regen. Hop between allies with to apply the heal, once per ally. You are knocked off if stunned by an ultimate ability. You can use items and all self-casts target your ally instead.",
		lilHelpers: "Signal a Helper to lend a hand. They can collect boxes, do Sinner's Sacrifices, or be sent to support allies and troopers. Follow a hero: Provides a short burst of Spirit Resist and fading Move Speed. Follow a trooper: Provides healing, damage, resists, and allows tagging along. When no hero is around, souls from trooper kills are split amongst the team. Can be cast during Tag Along. Helpers will take a nap for 15.1s after following someone.",
		naptime: "Cast your gaze forward, piercing walls and floors. Enemies in the gaze are slowed, have reduced dash distance, and cannot use movement abilities. When the channel ends they fall asleep before waking up to a splitting headache that deals heavy Spirit Damage.",
	},
	seven: {
		lightningBall: "Shoot a ball of lightning that travels in a straight line. Does damage to all targets in its radius. Slows down when damaging enemies and stops if it hits the world.",
		staticCharge: "Apply a charge to a target enemy hero. After a short duration, the static charge stuns and damages enemies within the radius.",
		powerSurge: "Power up your weapon with a shock effect, making your bullets proc shock damage on your target. This shock damage bounces to enemies near your target. Occurs once per burst shot.",
		stormCloud: "Channel an expanding storm cloud around you that damages all enemies within its radius. Enemies do not take damage when they are out of line-of-sight.",
	},
	shiv: {
		serratedKnives: "Throw a knife that bleeds an enemy. Each additional hit adds a stack and refreshes the bleed duration, causing the bleed to increase per stack.",
		sliceAndDice: "Perform a dash forward, damaging enemies along the path. Hit Enemies have their Spirit Resist reduced. This debuff can stack.",
		bloodletting: "Take only a portion of incoming damage immediately and defer the rest to be taken over time. Activate to clear a portion of the deferred damage.",
		killingBlow: "Passive: Damaging enemies fills you with rage. While at full rage, gains increased damage and unlocks special properties on his other abilities. Active: Leap forward, dealing Spirit Damage to the first enemy hero. If they are below the kill threshold, execute them instead. Finishing an enemy with Killing Blow lets you recast for 16s",
	},
	silver: {
		slamFire: "Instantly reload your gun. You gain Bonus Fire Rate and deal bonus Weapon Damage based on the target's health for a limited number of shots, but suffer from reduced accuracy. Deals bonus Weapon Damage against troopers and neutrals.",
		bootKick: "Dash forward and kick the first enemy hit, dealing Melee Damage while pushing yourself off and marking them. Shooting the marked target deals Spirit Damage and removes the mark.",
		entanglingBola: "Throw a bola, dealing Spirit Damage, applying Slow and preventing movement abilities or stamina.",
		lycanCurse: "Passive: Dealing damage generates bloodlust, increased at low health. At max bloodlust, you automatically cast Lycan Curse. Active: Instantly transform, gaining increased Max Health, and stacking Fire Rate on enemy heroes, and replacing your abilities and weapon with their ferocious versions.",
	},
	sinclair: {
		vexingBolt: "Fire a bolt of magic that deals Damage, increasing as it travels. If you have an Assistant, they also cast Vexing Bolt at reduced damage. Press to redirect the bolt towards your crosshairs.",
		spectralAssistant: "Summon an Assistant at the targeted location. The Assistant attacks whenever you fire your weapon, dealing Damage. While the Assistant is out, you can press to swap positions with your Assistant. Casting Spectral Assistant also reloads your weapon.",
		rabbitHex: "Hex a target area and transform all enemies into a Rabbit for a limited duration. Rabbits are small and move faster, but take increased Damage and are unable to perform most actions. Hex does not interrupt abilities.",
		audienceParticipation: "Copy the Ultimate of an enemy hero for a limited time. Reactivating the ability will use the Copied Ultimate instead. Copies will inherit this ability's upgrade points. Audience Participation will also copy the cooldown.",
	},
	solomon: {
		setupBishop: "Create a bishop that remains in place indefinitely. Move (): Moves the bishop, applying a fading Slow and dealing Spirit Damage to enemies it passes through. After a delay, activates diagonal squares that deal additional Spirit Damage when stepped on. Re-activate to recall all bishops, ending the ability.",
		kingsideKnight: "Promote an ally to be a knight, granting bonus stamina and Combat Barrier for a duration. If self-cast you develop yourself as king instead, granting double the Combat Barrier but no stamina. Move (): Moves the piece, making it invulnerable during the duration before landing.",
		rookBattery: "Release a pair of rooks that travel forward, dealing Spirit Damage and applying Immobilize. If the rooks hit a wall, they reflect back in the opposite direction. Re-Activate: Split the rooks perpendicularly.",
		developQueen: "Summon a queen that crashes down, dealing Spirit Damage in an area. After a delay, the queen releases squares in straight lines that deal Spirit Damage again and apply Stun. Move (): The queen leaps to the target location, dealing the same effects again. Re-activate to recall the queen early, ending the ability.",
	},
	venator: {
		consecratingGrenade: "Fire a grenade that bounces before exploding, dealing Weapon Damage and setting enemies on fire. Burning targets deal Pure Damage to enemies in the area and suffer from reduced healing.",
		gutshot: "Fire a blast with your shotgun, dealing Weapon Damage and pushing enemies back. Enemies near a wall receive Stun and take Bonus Weapon Damage.",
		hexLinedSnapTrap: "Kick a trap that arms after a brief delay. The trap springs on the first enemy it touches, dealing Spirit Damage, applying Immobilize, and revealing enemies for a duration afterwards.",
		iraDomini: "Load your crossbow with 3 stakes, dealing massively increased Weapon Damage. The final stake is blessed, dealing bonus Pure Damage and executing low-health enemies.",
	},
	victor: {
		painBattery: "Taking any damage passively charges up your Pain Battery. Once full, activating the ability fires multiple shocking bolts, dealing Spirit Damage once per target.",
		jumpstart: "Deal Spirit Damage to yourself. Then, gain bonus Regen and Bonus Move Speed, decaying over time.",
		auraOfSuffering: "Unleash pain, dealing Spirit DPS to both enemies and yourself. The damage continues to increase the longer the ability is channeled, up to a maximum amount.",
		shockingReanimation: "Release a wave after taking lethal damage, applying a diminishing Slow. After a brief channel you reanimate, dealing Spirit Damage and applying Stun to nearby enemies.",
	},
	vindicta: {
		stake: "Throw a stake that tethers enemies to the location where the stake lands. Enemy movement is restricted to the length of the tether.",
		flight: "Leap into the air and fly. While in flight your weapon deals bonus spirit damage and your items have increased range.",
		crowFamiliar: "Your crow familiar deals impact damage, reduces their bullet resist and applies a bleed that deals damage based on the target's current health.",
		assassinate: "Use your scoped rifle to fire a powerful shot over long distances. Deal only partial damage until fully charged after 1s of being scoped. Does bonus damage to enemies with less than 50% health remaining. Landing a killing blow on a player with Assassinate grants you bonus weapon damage.",
	},
	violet: {
		livingInk: "Empower: Your next 3 bullets come to life, allowing you to steer them as they travel. The bullets deal increased Bullet Damage and splash Spirit Damage in a small area. Each successful hit against a hero reduces all ability cooldowns, and half for all item cooldowns.",
		flowState: "Drag a brush that continues to travel forward, leaving a trail that grants bonus slide distance for allies and a fading Slow and Spirit Damage to enemies it passes through, increased the further it travels. Re-activate the ability to flick the brush forward, ending the ability early but dealing Spirit Damage in a larger area.",
		stillLife: "Choose a hero to be your subject, dealing Spirit DPS as long as you are looking at them. If the sketch is completed they take additional Spirit Damage, suffer from Stun, and drop a sketch that can be picked up. For each collected sketch, you permanently gain stats based on the hero.",
		abstractLandscape: "Create a circular display of ink that blocks vision and grants allies Spirit. Enemies inside are revealed, and leaving causes them to take Spirit Damage and suffer from Silence and Slow, destroying the ink in the process.",
	},
	viscous: {
		splatter: "Throw a ball of goo that deals damage and leaves puddles of goo behind that apply movement slow to enemies in the radius.",
		theCube: "Encase the target in a cube of restorative goo that protects from damage, and increases health regen. Target is unable to take any new actions while cubed. Can be used on self. Press to escape early.",
		puddlePunch: "Materialize a fist in the world that punches everyone in the area, applying Knock Up. Punching an enemy deals Melee Damage and applies Slow. Enemies can Parry this attack. You and your allies have increased Air Control.",
		gooBall: "Morph into a large goo ball that deals damage and stuns enemies on impact. The ball grants large amounts of Bullet and Spirit resist, bounces off walls and can double jump.",
	},
	vyper: {
		screwjabDagger: "Throw a dagger, dealing Spirit Damage and applying Slow. Every subsequent dagger against the same target stacks in Spirit Damage and Slow.",
		lethalVenom: "Inject a target with lethal venom. After a delay the venom triggers, dealing Spirit Damage. The damage is increased by the target's missing health. Lethal Venom will ignore Petrify's damage block.",
		slither: "You have increased Slide Distance, can Slide up hills, and can turn faster while Sliding.",
		petrifyingBola: "Throw an explosive bola. On exploding, the bola Slows and Damages all enemies in the area. Direct hits deal Additional Damage and Petrify instead. Petrified units block all damage, but cannot take actions.",
	},
	warden: {
		alchemicalFlask: "Throw a flask that damages and reduces the weapon damage and move speed of enemies it hits.",
		willpower: "Gain a Barrier and bonus move speed.",
		bindingWord: "Curse an enemy hero. If they don't move away from their initial position within the escape time, they will be damaged and immobilized.",
		lastStand: "After charging for 2s, release pulses that damage enemies and heal you based on the damage done. While channeling Last Stand you have greatly increased bullet and spirit resist.",
	},
	wraith: {
		cardTrick: "Deal weapon damage to summon cards of a random suit. Each card can be thrown, dealing damage and applying a different effect depending on its suit. Cards thrown fly towards the enemy or point under your crosshair. Alt-cast to throw first card",
		projectMind: "Teleport to the targeted location.",
		fullAuto: "Temporarily boost your fire rate and deal bonus Spirit Damage",
		telekinesis: "Lift an enemy hero into the air and then slam them towards the target location.",
	},
	yamato: {
		powerSlash: "Channel to increase damage over 1.4 seconds, then release a fully-charged sword strike. Pressorto trigger the strike early, dealing partial damage.",
		flyingSlash: "Throw a grappling hook to reel yourself towards an enemy, dealingMelee Damage and slowing the target when you arrive.",
		crimsonSlash: "Slash enemies in front of you, damaging them and slowing their fire rate. If any enemy heroes are hit, you heal.",
		shadowTransformation: "Become infused with 's shadow soul. After an initial invincible transformation your abilities are refreshed and are 60% faster. You gain immunity to negative status effects and have greatly increased bullet and spirit resist. When you get a hero kill, you heal and the duration is extended.",
	},
};
const SHOP_ITEMS = {
	extraCharge: new Item({
		name: "Extra Charge",
		cost: 800,
		category: "Spirit",
		type: "Basic",
		bonusSpiritPowerForCharges: 7,
		bonusAbilityCharges: 1
	}),
	extraSpirit: new Item({
		name: "Extra Spirit",
		cost: 800,
		category: "Spirit",
		type: "Basic",
		bonusSpiritPower: 10
	}),
	//NOTE: method will need to be created to simulate the soul generation of egg
	goldenGooseEgg: new Item({
		name: "Golden Goose Egg",
		cost: 800,
		category: "Spirit",
		type: "Active",
		bonusDamageAmp: -0.15, //percentage, a damage PENALTY while held
		bonusSprintSpeed: 1, //meters
		bonusOutOfCombatRegen: 1,
		passiveEffect: "Accrues 80 souls per minute. Hatching grants the accrued souls plus a permanent buff for every 80 souls accrued."
	}),
	mysticBurst: new Item({
		name: "Mystic Burst",
		cost: 800,
		category: "Spirit",
		type: "Basic",
		chargeUpTime: 14, //seconds
		passiveEffect: "Charges up over time with bonus spirit damage, causing abilities dealing more than 80 damage to deal additional damage.",
		bonusSpiritDamage: 40 // wiki: 40 (was 10)
	}),
	mysticExpansion: new Item({
		name: "Mystic Expansion",
		cost: 800,
		category: "Spirit",
		type: "Imbue",
		passiveEffect: "Imbue an ability to increase its range and effect radius.",
		bonusAbilityRange: 0.2,//percentage
	}),
	mysticRegeneration: new Item({
		name: "Mystic Regeneration",
		cost: 800,
		category: "Spirit",
		type: "Basic",
		bonusMaxHealth: 50,
		passiveEffect: "Dealing spirit damage to enemy Heroes grants you Bonus regeneration. Stacks when dealing damage to different heroes.",
		itemHealthRegen: 4,
		itemDuration: 7, //seconds
	}),
	rustedBarrel: new Item({
		name: "Rusted Barrel",
		cost: 800,
		category: "Spirit",
		type: "Active",
		bonusMaxHealth: 60,
		bonusSprintSpeed: 0.5, //meters
		itemActiveCooldown: 16, //seconds
		itemDuration: 5, //seconds
		itemActiveCastRange: 32, //meters
		debuffEffect: "-32% Fire Rate / -8% Bullet Resist"
	}),
	spiritStrike: new Item({
		name: "Spirit Strike",
		cost: 800,
		category: "Spirit",
		type: "Basic",
		bonusSpiritDamage: 40,
		itemSpiritScale: 0.37,
		itemPassiveCooldown: 8, //seconds (16s after a light melee)
		itemDuration: 6, //seconds
		debuffEffect: "-6% Spirit Resist",
		passiveEffect: "Light or heavy melee on a hero deals bonus spirit damage and reduces their spirit resist."
	}),

	// ---------- 1600 souls ----------
	arcaneSurge: new Item({
		name: "Arcane Surge",
		cost: 1600,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "extraStamina", // vitality item, not added yet
		bonusStamina: 1,
		bonusStaminaRecovery: 0.12, //percentage
		itemDuration: 7, //seconds, cast window
		passiveEffect: "After a dash-jump, the next ability within 7s gets +12% range, +15% duration and +20 spirit power."
	}),
	bulletResistShredder: new Item({
		name: "Bullet Resist Shredder",
		cost: 1600,
		category: "Spirit",
		type: "Basic",
		bonusWeaponResistance: 0.09, //percentage
		bonusWeaponDamage: 0.09, //percentage
		itemDuration: 8, //seconds
		debuffEffect: "-10% Bullet Resist",
		passiveEffect: "Spirit damage reduces the target's bullet resist."
	}),
	coldFront: new Item({
		name: "Cold Front",
		cost: 1600,
		category: "Spirit",
		type: "Active",
		bonusSpiritResistance: 0.06, //percentage
		bonusSpiritDamage: 95,
		itemSpiritScale: 0.47,
		itemActiveCooldown: 25, //seconds
		itemDuration: 4, //seconds
		debuffEffect: "-48% Move Speed",
		passiveEffect: "Expanding ice blast (10m radius) that deals spirit damage and slows."
	}),
	compressCooldown: new Item({
		name: "Compress Cooldown",
		cost: 1600,
		category: "Spirit",
		type: "Imbue",
		bonusAbilityCooldown: 0.18, //percentage, imbued ability only
		passiveEffect: "Imbue an ability to reduce its cooldown."
	}),
	durationExtender: new Item({
		name: "Duration Extender",
		cost: 1600,
		category: "Spirit",
		type: "Imbue",
		bonusAbilityDuration: 0.22, //percentage, imbued ability only
		passiveEffect: "Imbue an ability to increase its duration."
	}),
	improvedSpirit: new Item({
		name: "Improved Spirit",
		cost: 1600,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "extraSpirit",
		bonusSpiritPower: 18,
		bonusOutOfCombatRegen: 1.5
	}),
	mysticSlow: new Item({
		name: "Mystic Slow",
		cost: 1600,
		category: "Spirit",
		type: "Basic",
		bonusMaxHealth: 50,
		bonusSprintSpeed: 0.75, //meters
		itemDuration: 2, //seconds
		debuffEffect: "-24% Move Speed / -10% Dash Distance",
		passiveEffect: "Spirit damage slows the target."
	}),
	mysticVulnerability: new Item({
		name: "Mystic Vulnerability",
		cost: 1600,
		category: "Spirit",
		type: "Basic",
		bonusSpiritResistance: 0.08, //percentage
		itemDuration: 7, //seconds
		debuffEffect: "-8% Spirit Resist",
		passiveEffect: "Spirit damage reduces the target's spirit resist."
	}),
	quicksilverReload: new Item({
		name: "Quicksilver Reload",
		cost: 1600,
		category: "Spirit",
		type: "Imbue",
		chargeUpTime: 18, //seconds
		bonusSpiritDamage: 44,
		itemSpiritScale: 0.16,
		passiveEffect: "Imbued ability charges up; using it reloads 100% of your bullets and grants +10% fire rate and bonus spirit damage on your next shots."
	}),
	slowingHex: new Item({
		name: "Slowing Hex",
		cost: 1600,
		category: "Spirit",
		type: "Active",
		bonusSprintSpeed: 0.5, //meters
		itemActiveCooldown: 29, //seconds
		itemDuration: 3.5, //seconds
		itemActiveCastRange: 25, //meters
		debuffEffect: "-16% Move Speed / -26% Dash Distance / silences movement abilities and items"
	}),
	spiritSap: new Item({
		name: "Spirit Sap",
		cost: 1600,
		category: "Spirit",
		type: "Active",
		bonusMaxHealth: 50,
		itemActiveCooldown: 18, //seconds
		itemDuration: 12, //seconds
		itemActiveCastRange: 40, //meters
		debuffEffect: "-9% Spirit Resist / -30 Spirit Power"
	}),
	suppressor: new Item({
		name: "Suppressor",
		cost: 1600,
		category: "Spirit",
		type: "Basic",
		bonusSpiritPower: 6,
		bonusWeaponResistance: 0.08, //percentage
		itemDuration: 4.5, //seconds
		debuffEffect: "-28% Fire Rate",
		passiveEffect: "Spirit damage reduces the target's fire rate."
	}),

	// ---------- 3200 souls ----------
	decay: new Item({
		name: "Decay",
		cost: 3200,
		category: "Spirit",
		type: "Active",
		bonusSpiritPower: 8,
		bonusMaxHealth: 65,
		itemActiveCooldown: 30, //seconds
		itemDuration: 12, //seconds
		itemActiveCastRange: 20, //meters
		debuffEffect: "-50% Incoming Healing",
		passiveEffect: "Non-lethal spirit damage over time based on the target's current health."
	}),
	disarmingHex: new Item({
		name: "Disarming Hex",
		cost: 3200,
		category: "Spirit",
		type: "Active",
		buildsFrom: "rustedBarrel",
		bonusMaxHealth: 75,
		bonusSprintSpeed: 0.75, //meters
		itemActiveCooldown: 16, //seconds
		itemDuration: 4.25, //seconds
		itemActiveCastRange: 32, //meters
		debuffEffect: "Disarm / -13% Bullet Resist"
	}),
	greaterExpansion: new Item({
		name: "Greater Expansion",
		cost: 3200,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "mysticExpansion",
		bonusSpiritResistance: 0.1, //percentage
		bonusAbilityRange: 0.3 //percentage
	}),
	knockdown: new Item({
		name: "Knockdown",
		cost: 3200,
		category: "Spirit",
		type: "Active",
		bonusMaxHealth: 75,
		bonusAbilityRange: 0.05, //percentage
		itemActiveCooldown: 35, //seconds
		itemActiveCastRange: 45, //meters
		passiveEffect: "Stuns the target after a 2s delay; longer stun against airborne targets."
	}),
	radiantRegeneration: new Item({
		name: "Radiant Regeneration",
		cost: 3200,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "mysticRegeneration",
		bonusMaxHealth: 90,
		itemHealthRegen: 4,
		itemSpiritScale: 0.035, // regen per spirit power
		itemDuration: 7, //seconds
		itemPassiveCooldown: 6, //seconds
		bonusHealing: 0.65, // on ability cast
		itemBoonScale: 1.7,
		passiveEffect: "Spirit damage to heroes grants regen; casting an ability heals and gives +1.75m move speed for 3s."
	}),
	rapidRecharge: new Item({
		name: "Rapid Recharge",
		cost: 3200,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "extraCharge",
		bonusAbilityCharges: 2,
		bonusChargeRecharge: 0.3, //percentage
		bonusChargedCooldown: 0.14, //percentage
		bonusSpiritPowerForCharges: 14
	}),
	silenceWave: new Item({
		name: "Silence Wave",
		cost: 3200,
		category: "Spirit",
		type: "Active",
		bonusMaxHealth: 50,
		bonusSpiritDamage: 75,
		itemSpiritScale: 0.7,
		itemActiveCooldown: 42, //seconds
		itemActiveCastRange: 40, //meters
		debuffEffect: "Brief silence (does not interrupt channeling)"
	}),
	spiritSnatch: new Item({
		name: "Spirit Snatch",
		cost: 3200,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "spiritStrike",
		bonusMeleeDamage: 0.07, //percentage
		bonusMaxHealth: 75,
		bonusSpiritDamage: 50,
		itemSpiritScale: 0.84,
		itemPassiveCooldown: 6, //seconds
		itemDuration: 10, //seconds
		debuffEffect: "Steals 12% Spirit Resist / 25 Spirit Power",
		passiveEffect: "Melee hits on heroes deal bonus spirit damage and steal spirit resist and spirit power. Light melee is 30% weaker."
	}),
	superiorCooldown: new Item({
		name: "Superior Cooldown",
		cost: 3200,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "compressCooldown",
		bonusOutOfCombatRegen: 4,
		bonusAbilityCooldown: 0.2 //percentage
	}),
	superiorDuration: new Item({
		name: "Superior Duration",
		cost: 3200,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "durationExtender",
		bonusWeaponResistance: 0.08, //percentage
		bonusAbilityDuration: 0.28 //percentage
	}),
	surgeOfPower: new Item({
		name: "Surge of Power",
		cost: 3200,
		category: "Spirit",
		type: "Imbue",
		buildsFrom: "extraSpirit",
		itemPassiveCooldown: 14, //seconds
		itemDuration: 8, //seconds
		passiveEffect: "+28 spirit power on the imbued ability; using it grants +20% fire rate and +1.75m move speed for 8s."
	}),
	tankbuster: new Item({
		name: "Tankbuster",
		cost: 3200,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "mysticBurst",
		bonusMaxHealth: 50,
		bonusSpiritDamage: 40,
		chargeUpTime: 14, //seconds
		passiveEffect: "Abilities dealing more than 165 damage deal +40 plus 7.5% of the target's current health, ignoring spirit resist."
	}),
	tormentPulse: new Item({
		name: "Torment Pulse",
		cost: 3200,
		category: "Spirit",
		type: "Basic",
		bonusMaxHealth: 100,
		bonusMeleeResist: 0.18, //percentage
		bonusSpiritDamage: 25,
		itemSpiritScale: 0.23,
		itemPassiveCooldown: 1.4, //seconds
		passiveEffect: "Pulses spirit damage at the two closest enemies within 9m."
	}),

	// ---------- 6400 souls ----------
	arcticBlast: new Item({
		name: "Arctic Blast",
		cost: 6400,
		category: "Spirit",
		type: "Active",
		buildsFrom: "coldFront",
		bonusSpiritResistance: 0.1, //percentage
		bonusSpiritDamage: 175,
		itemSpiritScale: 0.7,
		itemActiveCooldown: 24, //seconds
		itemDuration: 1, //seconds, freeze
		passiveEffect: "Expanding ice blast (16m radius) that freezes, then slows."
	}),
	boundlessSpirit: new Item({
		name: "Boundless Spirit",
		cost: 6400,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "improvedSpirit",
		bonusSpiritPower: 30,
		bonusSpiritPowerPercent: 0.15, //percentage
		bonusMaxHealth: 75,
		bonusOutOfCombatRegen: 4
	}),
	cursedRelic: new Item({
		name: "Cursed Relic",
		cost: 6400,
		category: "Spirit",
		type: "Active",
		bonusDamageAmp: -0.25, //percentage, a damage PENALTY while held
		itemActiveCooldown: 55, //seconds
		itemDuration: 3.25, //seconds
		itemActiveCastRange: 20, //meters
		debuffEffect: "Silence + Disarm + blocks items; removes non-ultimate buffs"
	}),
	echoShard: new Item({
		name: "Echo Shard",
		cost: 6400,
		category: "Spirit",
		type: "Imbue",
		bonusSpiritResistance: 0.05, //percentage
		bonusWeaponResistance: 0.05, //percentage
		itemActiveCooldown: 30, //seconds, plus the imbued ability's cooldown
		passiveEffect: "Activate to reset the imbued (non-ultimate) ability's cooldown."
	}),
	escalatingExposure: new Item({
		name: "Escalating Exposure",
		cost: 6400,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "mysticVulnerability",
		bonusSpiritResistance: 0.17, //percentage
		itemPassiveCooldown: 0.7, //seconds
		itemDuration: 12, //seconds
		debuffEffect: "-8% Spirit Resist; +4.5% Spirit Amp per stack (max 12)",
		passiveEffect: "Spirit damage stacks spirit amp on the target."
	}),
	etherealShift: new Item({
		name: "Ethereal Shift",
		cost: 6400,
		category: "Spirit",
		type: "Active",
		itemDuration: 4, //seconds; cooldown not listed on the wiki infobox
		passiveEffect: "Briefly invulnerable, then +20 spirit power, +30% spirit resist and +3m move speed for 5s."
	}),
	focusLens: new Item({
		name: "Focus Lens",
		cost: 6400,
		category: "Spirit",
		type: "Active",
		buildsFrom: "spiritSap",
		bonusFireRate: 0.1, //percentage
		itemActiveCooldown: 45, //seconds
		itemDuration: 12, //seconds
		itemActiveCastRange: 25, //meters
		debuffEffect: "Silence / -9% Spirit Resist / -30 Spirit Power; 35% of damage dealt repeats when it ends"
	}),
	lightningScroll: new Item({
		name: "Lightning Scroll",
		cost: 6400,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "mysticSlow",
		bonusMaxHealth: 50,
		bonusSprintSpeed: 0.75, //meters
		bonusSpiritDamage: 150,
		debuffEffect: "-24% Move Speed on spirit damage",
		passiveEffect: "Ultimate damage stuns and deals 150 delayed spirit damage after 3s (once per target per ultimate)."
	}),
	magicCarpet: new Item({
		name: "Magic Carpet",
		cost: 6400,
		category: "Spirit",
		type: "Active",
		bonusAbilityDuration: 0.15, //percentage
		bonusMaxHealth: 125,
		bonusSpiritPower: 14,
		bonusGravityScale: -0.15, //percentage
		itemActiveCooldown: 32, //seconds
		itemDuration: 12, //seconds
		passiveEffect: "Summon a flying carpet: +7m fly speed, +25% air control, immune to slows while airborne."
	}),
	mercurialMagnum: new Item({
		name: "Mercurial Magnum",
		cost: 6400,
		category: "Spirit",
		type: "Imbue",
		buildsFrom: "quicksilverReload",
		bonusAmmoPercent: 0.2, //percentage
		bonusSpiritPower: 7,
		chargeUpTime: 14, //seconds
		bonusSpiritDamage: 60,
		itemSpiritScale: 0.16,
		passiveEffect: "Using the imbued ability reloads 100% of bullets and grants +22% fire rate and +20 base bullet damage."
	}),
	mysticReverb: new Item({
		name: "Mystic Reverb",
		cost: 6400,
		category: "Spirit",
		type: "Imbue",
		bonusSpiritLifeSteal: 0.08, //percentage
		itemPassiveCooldown: 6.25, //seconds
		itemDuration: 3, //seconds, delay
		debuffEffect: "-32% Move Speed",
		passiveEffect: "Imbued ability slows the first enemy hit; after 3s, 50% of the damage repeats to enemies within 16m. +22% lifesteal on the imbued ability."
	}),
	refresher: new Item({
		name: "Refresher",
		cost: 6400,
		category: "Spirit",
		type: "Active",
		itemActiveCooldown: 300, //seconds
		passiveEffect: "Resets all ability cooldowns and restores all charges."
	}),
	scourge: new Item({
		name: "Scourge",
		cost: 6400,
		category: "Spirit",
		type: "Active",
		bonusMaxHealth: 100,
		itemActiveCooldown: 35, //seconds
		itemDuration: 10, //seconds
		itemActiveCastRange: 35, //meters
		passiveEffect: "Target ally or self gets +40% spirit resist, +20% debuff resist and a 10m aura dealing 2.3% max HP/s spirit damage."
	}),
	spiritBurn: new Item({
		name: "Spirit Burn",
		cost: 6400,
		category: "Spirit",
		type: "Basic",
		bonusAbilityRange: 0.06, //percentage
		bonusSpiritDamage: 50,
		itemSpiritScale: 0.06, // on the 24 DPS burn
		itemDuration: 8, //seconds
		debuffEffect: "-70% Incoming Healing",
		passiveEffect: "After 500 spirit damage to a target: 50 explosion damage plus a 24 DPS burn. 20s per-target immunity."
	}),
	transcendentCooldown: new Item({
		name: "Transcendent Cooldown",
		cost: 6400,
		category: "Spirit",
		type: "Basic",
		buildsFrom: "superiorCooldown",
		bonusOutOfCombatRegen: 4,
		bonusAbilityCooldown: 0.25, //percentage
		bonusItemCooldown: 0.25 //percentage
	}),
	vortexWeb: new Item({
		name: "Vortex Web",
		cost: 6400,
		category: "Spirit",
		type: "Active",
		buildsFrom: "slowingHex",
		bonusAbilityRange: 0.08, //percentage
		bonusSprintSpeed: 0.75, //meters
		itemActiveCooldown: 42, //seconds
		itemDuration: 4, //seconds
		debuffEffect: "Immobilize / -28% Move Speed / -36% Dash Distance",
		passiveEffect: "Vacuum grenade pulls enemies within 12m together and applies Slowing Hex."
	}),
  	// ----- Weapon 800 -----
	closeQuarters: new Item({
		name: "Close Quarters",
		cost: 800,
		category: "Weapon",
		bonusMeleeResist: 0.2,
		passiveEffect: "Passive: Deal additional Weapon Damage when in close range to your target. [Close Range Bonus Damage Range 15m, Close Range Bonus Weapon Power 20]"
	}),
	extendedMagazine: new Item({
		name: "Extended Magazine",
		cost: 800,
		category: "Weapon",
		bonusWeaponDamage: 0.08,
		bonusAmmoPercent: 0.3
	}),
	headshotBooster: new Item({
		name: "Headshot Booster",
		cost: 800,
		category: "Weapon",
		bonusMaxHealth: 30,
		passiveEffect: "Passive: Your next headshot against an enemy Hero deals Bonus Weapon Damage. [Head Shot Bonus Damage 45]",
		itemPassiveCooldown: 9
	}),
	highVelocityRounds: new Item({
		name: "High-Velocity Rounds",
		cost: 800,
		category: "Weapon",
		bonusWeaponDamage: 0.08,
		bonusVelocity: 0.6
	}),
	monsterRounds: new Item({
		name: "Monster Rounds",
		cost: 800,
		category: "Weapon",
		bonusOutOfCombatRegen: 1,
		passiveEffect: "Also: Non Player Bonus Weapon Power 25, Non Player Bullet Resist 25"
	}),
	rapidRounds: new Item({
		name: "Rapid Rounds",
		cost: 800,
		category: "Weapon",
		bonusFireRate: 0.09
	}),
	restorativeShot: new Item({
		name: "Restorative Shot",
		cost: 800,
		category: "Weapon",
		bonusWeaponDamage: 0.06,
		passiveEffect: "Effect: Your next bullet will heal you based on what target you hit. [Heal From Hero 50, Heal From NPC 20]",
		itemPassiveCooldown: 6
	}),

	// ----- Weapon 1600 -----
	activeReload: new Item({
		name: "Active Reload",
		cost: 1600,
		category: "Weapon",
		bonusAmmoPercent: 0.2,
		passiveEffect: "Passive: While reloading, pressing during the highlighted portion will instantly finish your reload and grant you Fire Rate, Bullet Lifesteal and Move Speed. [Ability Duration 7s, Bonus Fire Rate 25, Bullet Lifesteal Percent 16, Bonus Move Speed 0.75m]",
		itemPassiveCooldown: 12,
		itemDuration: 7
	}),
	fleetfoot: new Item({
		name: "Fleetfoot",
		cost: 1600,
		category: "Weapon",
		type: "Active",
		bonusWeaponDamage: 0.06,
		bonusSlideDistance: 0.35,
		bonusWeaponResistance: 0.06,
		passiveEffect: "Passive: Removes the Move Speed penalty while shooting. | Active: Gain bonus Move Speed and Slow Resistance. [Ability Duration 5s, Active Bonus Move Speed 3m, Slow Resistance Percent 40]",
		itemActiveCooldown: 16,
		itemDuration: 5
	}),
	intensifyingMagazine: new Item({
		name: "Intensifying Magazine",
		cost: 1600,
		category: "Weapon",
		bonusAmmoPercent: 0.2,
		passiveEffect: "Passive: Increases Weapon Damage as you continuously fire your weapon. [Base Attack Damage Percent At Max Duration 45, Shoot Duration For Max 2.5]"
	}),
	kineticDash: new Item({
		name: "Kinetic Dash",
		cost: 1600,
		category: "Weapon",
		bonusStamina: 1,
		bonusStaminaRecovery: 0.12,
		passiveEffect: "Passive: When you Dash-Jump you gain Fire Rate and bonus Ammo until your next reload. Lasts up to 7s. [Ability Duration 7s, Bonus Fire Rate 25, Bonus Clip Size 6]",
		itemDuration: 7,
		buildsFrom: "extraStamina"
	}),
	longRange: new Item({
		name: "Long Range",
		cost: 1600,
		category: "Weapon",
		bonusFalloffRange: 0.08,
		bonusSprintSpeed: 0.75,
		passiveEffect: "Passive: Deal additional Weapon Damage when beyond a minimum distance from your target. [Long Range Bonus Weapon Power Min Range 15m, Long Range Bonus Weapon Power 40]"
	}),
	meleeCharge: new Item({
		name: "Melee Charge",
		cost: 1600,
		category: "Weapon",
		bonusMeleeDamage: 0.1,
		bonusWeaponResistance: 0.06,
		bonusMeleeDistance: 0.5,
		passiveEffect: "Passive: Your next Heavy Melee attack against an enemy deals increased damage. [Bonus Heavy Melee Damage 25]",
		itemPassiveCooldown: 5
	}),
	mysticShot: new Item({
		name: "Mystic Shot",
		cost: 1600,
		category: "Weapon",
		bonusSpiritPower: 7,
		passiveEffect: "Effect: Your next bullet deals bonus Spirit Damage. [Proc Bonus Magic Damage 40 (+0.9x spirit)]",
		itemPassiveCooldown: 8
	}),
	openingRounds: new Item({
		name: "Opening Rounds",
		cost: 1600,
		category: "Weapon",
		bonusVelocity: 0.6,
		bonusWeaponDamage: 0.08,
		bonusSpiritPower: 7,
		passiveEffect: "Passive: Your attacks have additional Weapon Damage against enemies above 50% health. [Base Attack Damage Percent Bonus 25]",
		buildsFrom: "highVelocityRounds"
	}),
	rechargingRush: new Item({
		name: "Recharging Rush",
		cost: 1600,
		category: "Weapon",
		bonusAmmoPercent: 0.2,
		bonusWeaponDamage: 0.1,
		passiveEffect: "Effect: Dealing significant Weapon Damage replenishes a charge for each of your charged abilities. [Damage Window 3.5, Damage Threshold 200]",
		itemPassiveCooldown: 25
	}),
	slowingBullets: new Item({
		name: "Slowing Bullets",
		cost: 1600,
		category: "Weapon",
		passiveEffect: "Passive: Your bullets build up a Movement Slow on enemies. [Ground Dash Reduction Percent -20, Slow Duration 3.5s, Build Up Per Shot 0.7, Slow Percent 24]"
	}),
	spiritShredder: new Item({
		name: "Spirit Shredder",
		cost: 1600,
		category: "Weapon",
		passiveEffect: "Passive: Your bullets apply a debuff that reduces the Spirit Resist of the target and grants you and your allies Spirit Lifesteal against them. [Debuff Duration 8s, Spirit Armor Damage Reduction -8, Ability Lifesteal Percent Hero 10]"
	}),
	splitShot: new Item({
		name: "Split Shot",
		cost: 1600,
		category: "Weapon",
		type: "Active",
		passiveEffect: "Active: Make your weapon fire multishot. Hitting more than one Hero per attack will grant a stacking weapon damage bonus. Targets can only be hit once per multishot. [Bonus Shots Duration 5, Max Stacks 5, Weapon Damage Bonus Duration 12, Bullet Split Shot 5, Weapon Damage Per Stack 8]",
		itemActiveCooldown: 27
	}),
	stalker: new Item({
		name: "Stalker",
		cost: 1600,
		category: "Weapon",
		bonusMaxHealth: 50,
		passiveEffect: "Also: Reduce Footstep Sound -50 | Effect: Dealing Weapon Damage at close range opens a wound and grants you Bonus Move Speed. Wounded enemies take Spirit DPS, have reduced Bullet Resist, and are revealed through walls. [Debuff Duration 5, Proc Radius 8m, DPS 17, Bullet Resist Reduction -6, Bonus Move Speed 1.5m]",
		itemPassiveCooldown: 6,
		itemDuration: 5
	}),
	swiftStriker: new Item({
		name: "Swift Striker",
		cost: 1600,
		category: "Weapon",
		bonusSprintSpeed: 0.75,
		bonusFireRate: 0.2,
		buildsFrom: "rapidRounds"
	}),
	titanicMagazine: new Item({
		name: "Titanic Magazine",
		cost: 1600,
		category: "Weapon",
		bonusWeaponDamage: 0.14,
		bonusAmmoPercent: 1,
		buildsFrom: "extendedMagazine"
	}),
	weakeningHeadshot: new Item({
		name: "Weakening Headshot",
		cost: 1600,
		category: "Weapon",
		bonusMaxHealth: 60,
		passiveEffect: "Passive: Landing a Headshot reduces their Bullet Resist. [Debuff Duration 12s, Bullet Resist Reduction -12]"
	}),

	// ----- Weapon 3200 -----
	alchemicalFire: new Item({
		name: "Alchemical Fire",
		cost: 3200,
		category: "Weapon",
		type: "Active",
		bonusSpiritPower: 10,
		passiveEffect: "Active: Throw a flask that explodes on contact, creating an area that does increasing Spirit Damage per second and reduces enemy Bullet Resist. 50% less effective vs non-heroes. [DPSMax 95 (+0.4x spirit), Radius 10m, Ability Duration 5s, DPS 45 (+0.2x spirit), Bullet Armor Reduction -7 (+-0.055x spirit)]",
		itemActiveCooldown: 30,
		itemDuration: 5
	}),
	ballisticEnchantment: new Item({
		name: "Ballistic Enchantment",
		cost: 3200,
		category: "Weapon",
		type: "Imbue",
		passiveEffect: "Passive: Imbue an ability with increased range. Dealing damage with that ability grants you increased weapon damage per unique hero hit. Has reduced effect on non-heroes. [Ability Duration 20s, Weapon Power Per Stack Non Hero 5, Non Hero Stack Limit 8, Weapon Power Per Stack 20, Spirit Range Multiplier 22]",
		itemDuration: 20,
		buildsFrom: "mysticExpansion"
	}),
	berserker: new Item({
		name: "Berserker",
		cost: 3200,
		category: "Weapon",
		bonusWeaponResistance: 0.08,
		passiveEffect: "Effect: Your Weapon Damage increases as you take sustained damage. [Damage To Stack 120, Max Stacks 10, Damage Duration 10s, Weapon Power Per Stack 7]"
	}),
	bloodTribute: new Item({
		name: "Blood Tribute",
		cost: 3200,
		category: "Weapon",
		type: "Active",
		bonusDebuffResistance: 0.08,
		bonusSpiritResistance: 0.08,
		bonusOutOfCombatRegen: 4,
		passiveEffect: "Active: Toggle: Continually sacrifice Health to improve Fire Rate, Debuff Resistance and Move Speed. [Bonus Fire Rate 35, Status Resistance Percent 35s, Bonus Move Speed 2m, Health Drained Per Second 50]"
	}),
	burstFire: new Item({
		name: "Burst Fire",
		cost: 3200,
		category: "Weapon",
		bonusSlideDistance: 0.5,
		bonusFireRate: 0.1,
		passiveEffect: "Effect: Briefly gain Fire Rate and Move Speed when one of your bullets hits an enemy hero. [Ability Duration 4.5s, Activated Fire Rate 32, Bonus Move Speed 1.25m]",
		itemPassiveCooldown: 9,
		itemDuration: 4.5,
		buildsFrom: "rapidRounds"
	}),
	cultistSacrifice: new Item({
		name: "Cultist Sacrifice",
		cost: 3200,
		category: "Weapon",
		type: "Active",
		bonusOutOfCombatRegen: 2,
		passiveEffect: "Also: Non Player Bonus Weapon Power 30, Non Player Bullet Resist 30 | Active: Target an enemy NPC and consume it for 170% Bonus Souls and grants a powerful long lasting buff. [Ability Duration 160s, Base Attack Damage Percent 10, Bonus Health 50, Spirit Range Multiplier 12]",
		itemActiveCooldown: 270,
		itemDuration: 160,
		itemActiveCastRange: 7,
		buildsFrom: "monsterRounds"
	}),
	escalatingResilience: new Item({
		name: "Escalating Resilience",
		cost: 3200,
		category: "Weapon",
		bonusMaxHealth: 75,
		bonusWeaponDamage: 0.18,
		bonusAmmoPercent: 0.35,
		passiveEffect: "Passive: Grants Bullet Resist when your bullets hit an enemy hero. Each shot can only grant one stack. [Bullet Resist Per Stack 2, Bullet Resist Duration 24, Max Armor Stacks 30]",
		buildsFrom: "extendedMagazine"
	}),
	expressShot: new Item({
		name: "Express Shot",
		cost: 3200,
		category: "Weapon",
		bonusWeaponDamage: 0.08,
		bonusVelocity: 0.6,
		passiveEffect: "Passive: Your next attack will fire twice in quick succession with increased damage and velocity. This attack consumes extra ammo. [Proc Bullet Velocity 100, Proc Ammo Consumed 2, Proc Base Attack Damage Percent 125, Proc Base Attack Damage Percent Alt Fire 40]",
		itemPassiveCooldown: 8,
		buildsFrom: "highVelocityRounds"
	}),
	headhunter: new Item({
		name: "Headhunter",
		cost: 3200,
		category: "Weapon",
		bonusWeaponDamage: 0.05,
		bonusMaxHealth: 50,
		passiveEffect: "Passive: Your next headshot against an enemy Hero deals Bonus Weapon Damage, Heal you, and briefly grants Bonus Move Speed. [Bonus Move Speed 1.75m, Movement Speed Bonus Duration 3s, Head Shot Bonus Damage 75, Heal Percent Per Headshot 4]",
		itemPassiveCooldown: 8,
		buildsFrom: "headshotBooster"
	}),
	heroicAura: new Item({
		name: "Heroic Aura",
		cost: 3200,
		category: "Weapon",
		type: "Active",
		bonusSprintSpeed: 1.5,
		passiveEffect: "Passive: Provides Bullet Resist to nearby friendly units. [Radius 35m, Bullet Resist 17] | Active: Provides Move Speed and Fire Rate to you and nearby allies. Minions get double value. [Active Radius 35m, Ability Duration 7s, Active Bonus Move Speed 2.25m, Bonus Fire Rate 26]",
		itemActiveCooldown: 22,
		itemDuration: 7
	}),
	hollowPoint: new Item({
		name: "Hollow Point",
		cost: 3200,
		category: "Weapon",
		bonusOutOfCombatRegen: 4.5,
		bonusMaxHealth: 125,
		passiveEffect: "Passive: When you are above 65% health, deal additional Weapon Damage and your bullets reduce enemy Bullet Resist. [Debuff Duration 8s, Base Attack Damage Percent 35, Bullet Armor Reduction -10]"
	}),
	huntersAura: new Item({
		name: "Hunter's Aura",
		cost: 3200,
		category: "Weapon",
		bonusMaxHealth: 100,
		bonusSprintSpeed: 0.75,
		passiveEffect: "Passive: Reduces nearby enemies' Bullet Resist and Fire Rate. If there is only one enemy hero nearby, this effect is doubled. [Radius 15m, Bullet Armor Reduction -10, Fire Rate Slow 15]"
	}),
	pointBlank: new Item({
		name: "Point Blank",
		cost: 3200,
		category: "Weapon",
		bonusMaxHealth: 75,
		bonusMeleeResist: 0.3,
		passiveEffect: "Passive: When in close range to your target, gain Weapon Damage and your bullets apply a Movement Slow. [Slow Duration 2s, Close Range Bonus Damage Range 15m, Close Range Bonus Weapon Power 50, Slow Percent 20]",
		buildsFrom: "closeQuarters"
	}),
	shadowWeave: new Item({
		name: "Shadow Weave",
		cost: 3200,
		category: "Weapon",
		type: "Active",
		bonusOutOfCombatRegen: 5,
		bonusSprintSpeed: 2,
		passiveEffect: "Active: Become Stealthed. Whenever you take damage while Stealthed you get briefly revealed. [Spotted Radius 20m, Invis Move Speed Mod 5m, Ability Duration 13s] | Active: Attacking or using an ability will end your stealth and start an ambush, temporarily granting you bonus Fire Rate, Spirit Power and Melee Damage. [Ambush Duration 5s, Ambush Bonus Fire Rate 25, Ambush Bonus Spirit Power 25, Ambush Bonus Melee Damage 25]",
		itemActiveCooldown: 37,
		itemDuration: 13,
		buildsFrom: "sprintBoots"
	}),
	sharpshooter: new Item({
		name: "Sharpshooter",
		cost: 3200,
		category: "Weapon",
		bonusVelocity: 0.6,
		bonusWeaponDamage: 0.1,
		bonusSprintSpeed: 1,
		bonusMovementSpeed: -0.7,
		bonusFalloffRange: 0.2,
		passiveEffect: "Also: Bonus Zoom Percent 25 | Passive: Deal additional Weapon Damage when beyond a minimum distance from your target. [Long Range Bonus Weapon Power Min Range 15m, Long Range Bonus Weapon Power 60]",
		buildsFrom: "longRange"
	}),
	spiritRend: new Item({
		name: "Spirit Rend",
		cost: 3200,
		category: "Weapon",
		bonusMaxHealth: 75,
		passiveEffect: "Effect: Your bullets apply a debuff that reduces the Spirit Resist of the target and grants you and your allies Spirit Lifesteal against them. [Spirit Armor Damage Reduction -8, Ability Lifesteal Percent Hero 10] | Passive: Landing headshots against the target reduces their Spirit Resist further. [Debuff Duration 8s, Max Stacks 4, Proc Cooldown 2s, Magic Resist Reduction -7]",
		buildsFrom: "spiritShredder"
	}),
	teslaBullets: new Item({
		name: "Tesla Bullets",
		cost: 3200,
		category: "Weapon",
		passiveEffect: "Passive: Your bullets have a chance to shock your target. The shock will jump to a nearby enemy. [Proc Cooldown 0.2s, Chain Count 4, Chain Radius 8m, Damage Per Chain 33 (+0.19x spirit), Proc Chance 15]"
	}),
	toxicBullets: new Item({
		name: "Toxic Bullets",
		cost: 3200,
		category: "Weapon",
		passiveEffect: "Effect: Your bullets build up a Bleed on enemies, causing them to lose a percentage of their Max Health over time. Also reduces Incoming Healing on the bleeding target. [Dot Duration 4s, Build Up Per Shot 1.28, Dot Health Percent 1.9 (+0.006x spirit), Heal Amp Receive Penalty Percent -35]"
	}),
	weightedShots: new Item({
		name: "Weighted Shots",
		cost: 3200,
		category: "Weapon",
		bonusDebuffResistance: 0.22,
		bonusStaminaRecovery: -0.14,
		bonusMovementSpeed: -0.5,
		bonusWeaponDamage: 0.3,
		passiveEffect: "Passive: Your bullets build up a Movement Slow on enemies. [Ground Dash Reduction Percent -20, Slow Duration 3.5s, Build Up Per Shot 0.7, Slow Percent 24]",
		buildsFrom: "slowingBullets"
	}),

	// ----- Weapon 6400 -----
	armorPiercer: new Item({
		name: "Armor Piercer",
		cost: 6400,
		category: "Weapon",
		bonusVelocity: 0.6,
		bonusWeaponDamage: 0.08,
		passiveEffect: "Effect: Your Bullets have a chance to become unavoidable, piercing through enemies and ignoring their Bullet Resistance. [Proc Chance 55]",
		buildsFrom: "highVelocityRounds"
	}),
	capacitor: new Item({
		name: "Capacitor",
		cost: 6400,
		category: "Weapon",
		type: "Active",
		bonusFireRate: 0.05,
		passiveEffect: "Passive: Your bullets have a chance to shock your target. The shock will jump to a nearby enemy. [Proc Cooldown 0.2s, Chain Count 6, Chain Radius 10m, Damage Per Chain 43 (+0.19x spirit), Proc Chance 20] | Active: Launch a projectile that deals Spirit Icondamage, applies a strong slow that recovers over time, prevents Stamina usage and Silences their movement-based items and abilities. [Slow Duration 3s, Damage 100, Max Slow Percent 60]",
		itemActiveCooldown: 40,
		buildsFrom: "teslaBullets"
	}),
	cripplingHeadshot: new Item({
		name: "Crippling Headshot",
		cost: 6400,
		category: "Weapon",
		bonusMaxHealth: 125,
		passiveEffect: "Passive: Landing a Headshot will reduce their Bullet, Spirit Resist, and Incoming Healing. [Debuff Duration 12s, Bullet Resist Reduction -16, Magic Resist Reduction -16, Heal Amp Regen Penalty Percent -35]",
		buildsFrom: "weakeningHeadshot"
	}),
	crushingFists: new Item({
		name: "Crushing Fists",
		cost: 6400,
		category: "Weapon",
		bonusMeleeDamage: 0.22,
		bonusWeaponResistance: 0.12,
		bonusMeleeDistance: 0.6,
		passiveEffect: "Passive: Your next Heavy Melee attack against an enemy deals increased damage. [Bonus Heavy Melee Damage 25] | Passive: Your Melee Damage will restore ammo and apply a stacking bullet resist debuff on enemies. Heavy melee applies 2 stacks. If the target reaches max stacks, they will be stunned. [Stun Duration 0.75, Debuff Duration 8s, Light Melee Ammo 15, Bullet Resist Reduction -5, Max Stacks 6]",
		itemPassiveCooldown: 5,
		buildsFrom: "meleeCharge"
	}),
	frenzy: new Item({
		name: "Frenzy",
		cost: 6400,
		category: "Weapon",
		bonusMaxHealth: 160,
		bonusFireRate: 0.15,
		bonusWeaponLifeSteal: 0.1,
		passiveEffect: "Passive: While you are below 50% health, you gain stat bonuses for a duration and existing debuffs on you are reduced. [Ability Duration 10s, Fervor Movespeed 4m, Fervor Fire Rate 40, Fervor Status Resistance Percent 40s]",
		itemPassiveCooldown: 16,
		itemDuration: 10
	}),
	glassCannon: new Item({
		name: "Glass Cannon",
		cost: 6400,
		category: "Weapon",
		bonusWeaponDamage: 0.8,
		bonusBaseHealth: -0.13,
		passiveEffect: "Passive: Each hero kill grants permanent Fire Rate (up to a max of 8 times). Death results in the loss of 1 stack. [Fire Rate Per Kill 7]"
	}),
	luckyShot: new Item({
		name: "Lucky Shot",
		cost: 6400,
		category: "Weapon",
		bonusAmmoPercent: 0.3,
		passiveEffect: "Effect: Your bullets have a chance to be empowered, causing them to deal bonus weapon damage on hit. Bonus damage cannot Crit. [Proc Chance 25, Crit Damage Percent 100]"
	}),
	ricochet: new Item({
		name: "Ricochet",
		cost: 6400,
		category: "Weapon",
		bonusFireRate: 0.18,
		passiveEffect: "Effect: Your bullets will ricochet on enemies near your target, applying any bullet procs and dealing a percentage of the original damage. [Ricochet Targets 2, Ricochet Radius 13m, Ricochet Damage Percent 65]"
	}),
	silencer: new Item({
		name: "Silencer",
		cost: 6400,
		category: "Weapon",
		bonusSpiritResistance: 0.12,
		passiveEffect: "Passive: Your bullets reduce the target's outgoing spirit damage. [Debuff Duration 6, Spirit Damage Reduction -25] | Passive: Your bullets build up to a Silence. Victims are immune to the build up for 10s after silence expires. [Immunity Duration 10, Build Up Per Shot 1.04]"
	}),
	spellslinger: new Item({
		name: "Spellslinger",
		cost: 6400,
		category: "Weapon",
		bonusAbilityCooldown: 0.05,
		passiveEffect: "Passive: While in-combat whenever you cast an ability or item, gain a stacking buff that improves fire rate and reload speed. Each stack refreshes the duration. [Max Stacks 6, Buff Duration 18s, Bonus Fire Rate 11, Reload Speed Multipler -10]"
	}),
	spiritualOverflow: new Item({
		name: "Spiritual Overflow",
		cost: 6400,
		category: "Weapon",
		bonusAbilityDuration: 0.13,
		bonusSpiritLifeSteal: 0.13,
		bonusMaxHealth: 90,
		bonusSpiritPower: 6,
		passiveEffect: "Passive: Gain bonus Fire Rate, Spirit Power and Spirit Lifesteal by charging up when shooting enemy heroes. [Build Up Per Shot 1.08, Ability Duration 15s, Bonus Fire Rate 25, Bonus Spirit 30, Bonus Spirit Lifesteal 10]",
		itemDuration: 15,
		buildsFrom: "spiritLifesteal"
	}),
	// ----- Vitality 800 -----
	extraHealth: new Item({
		name: "Extra Health",
		cost: 800,
		category: "Vitality",
		bonusMaxHealth: 210
	}),
	extraRegen: new Item({
		name: "Extra Regen",
		cost: 800,
		category: "Vitality",
		bonusOutOfCombatRegen: 1.5,
		bonusHealthRegen: 2.5
	}),
	extraStamina: new Item({
		name: "Extra Stamina",
		cost: 800,
		category: "Vitality",
		bonusStaminaRecovery: 0.12,
		bonusStamina: 1
	}),
	grit: new Item({
		name: "Grit",
		cost: 800,
		category: "Vitality",
		type: "Active",
		bonusOutOfCombatRegen: 1,
		passiveEffect: "Active: Gain a Barrier for a short duration. [Barrier Duration 4s, Combat Barrier 200]",
		itemActiveCooldown: 60
	}),
	healingRite: new Item({
		name: "Healing Rite",
		cost: 800,
		category: "Vitality",
		type: "Active",
		passiveEffect: "Active: Grant Regen and Sprint Speed to the target. Gets dispelled if you take damage from enemy players or objectives. Can be self-cast. [Regen Duration 20s, Ability Cast Range 30m, Total Health Regen 300, Bonus Sprint Speed 2m]",
		itemActiveCooldown: 70,
		itemActiveCastRange: 30
	}),
	meleeLifesteal: new Item({
		name: "Melee Lifesteal",
		cost: 800,
		category: "Vitality",
		bonusMeleeDamage: 0.12,
		passiveEffect: "Passive: Your next Melee attack heals you. This heal is 30% effective vs non-heroes. Cooldown is 1.5x as long for Light Melee hits. [Lifestrike Heal 100]",
		itemPassiveCooldown: 8
	}),
	rebuttal: new Item({
		name: "Rebuttal",
		cost: 800,
		category: "Vitality",
		bonusMeleeResist: 0.18,
		bonusMaxHealth: 75,
		passiveEffect: "Also: Parry Cooldown Reduction 1.75s | Passive: On a successful Parry against an enemy Hero, Heal yourself for the damage parried and returns that damage to the target, and temporarily gain increased damage. [Buff Duration 6s, Bonus Damage Percent 30, Parry Success Heal Percentage 100]"
	}),
	sprintBoots: new Item({
		name: "Sprint Boots",
		cost: 800,
		category: "Vitality",
		bonusOutOfCombatRegen: 2,
		bonusSprintSpeed: 2
	}),

	// ----- Vitality 1600 -----
	battleVest: new Item({
		name: "Battle Vest",
		cost: 1600,
		category: "Vitality",
		bonusOutOfCombatRegen: 3,
		bonusWeaponResistance: 0.18,
		passiveEffect: "Passive: While you are above 65% health, gain Weapon Damage and Bonus Fire Rate. [Base Attack Damage Percent 18, Bonus Fire Rate 7]"
	}),
	bulletLifesteal: new Item({
		name: "Bullet Lifesteal",
		cost: 1600,
		category: "Vitality",
		bonusMaxHealth: 90,
		bonusWeaponDamage: 0.06,
		bonusWeaponLifeSteal: 0.13
	}),
	debuffReducer: new Item({
		name: "Debuff Reducer",
		cost: 1600,
		category: "Vitality",
		bonusMaxHealth: 90,
		passiveEffect: "Passive: Reduces the duration of all negative effects applied to you. [Status Resistance Percent 25s]"
	}),
	enchantersEmblem: new Item({
		name: "Enchanter's Emblem",
		cost: 1600,
		category: "Vitality",
		bonusOutOfCombatRegen: 2,
		bonusSpiritResistance: 0.18,
		passiveEffect: "Passive: While you are above 65% health, gain bonus Spirit and Cooldown Reduction. [Spirit Power 15, Cooldown Reduction 5s]"
	}),
	enduringSpeed: new Item({
		name: "Enduring Speed",
		cost: 1600,
		category: "Vitality",
		bonusOutOfCombatRegen: 2,
		bonusMovementSpeed: 2,
		passiveEffect: "Passive: Reduces the effect of enemy Move Speed penalties. [Slow Resistance Percent 25]",
		buildsFrom: "sprintBoots"
	}),
	guardianWard: new Item({
		name: "Guardian Ward",
		cost: 1600,
		category: "Vitality",
		type: "Active",
		bonusOutOfCombatRegen: 1.5,
		bonusAbilityRange: 0.08,
		passiveEffect: "Active: Provide the target with a Barrier and temporary Move Speed. Can be self-cast. Cooldown is reduced by half when cast on someone else. [Buff Duration 6s, Ability Cast Range 40m, Guardian Ward Combat Barrier 250, Bonus Move Speed 2.75m]",
		itemActiveCooldown: 60,
		itemActiveCastRange: 40,
		buildsFrom: "grit"
	}),
	healbane: new Item({
		name: "Healbane",
		cost: 1600,
		category: "Vitality",
		bonusSpiritPower: 7,
		passiveEffect: "Passive: Your Spirit Damage reduces the enemy's Incoming Healing. If an enemy hero dies under this effect, you receive a large heal. [Ability Duration 8s, Heal Amp Receive Penalty Percent -35, Heal On Kill 275]",
		itemDuration: 8
	}),
	healingBooster: new Item({
		name: "Healing Booster",
		cost: 1600,
		category: "Vitality",
		bonusHealthRegen: 3,
		bonusOutOfCombatRegen: 1,
		passiveEffect: "Passive: Increases the effectiveness of your healing. [Heal Amp Cast Percent 20]",
		buildsFrom: "extraRegen"
	}),
	reactiveBarrier: new Item({
		name: "Reactive Barrier",
		cost: 1600,
		category: "Vitality",
		bonusOutOfCombatRegen: 1,
		passiveEffect: "Passive: Gain a Barrier when you are Stunned, Chained, Immobilized, Slept or Silenced. [Ability Duration 10s, Vex Barrier Combat Barrier 325 (+1.8x spirit)]",
		itemPassiveCooldown: 55,
		itemDuration: 10,
		buildsFrom: "grit"
	}),
	restorativeLocket: new Item({
		name: "Restorative Locket",
		cost: 1600,
		category: "Vitality",
		type: "Active",
		bonusSpiritResistance: 0.08,
		passiveEffect: "Active: When an enemy uses an ability within 32m range from you, store one Restoration Stack. Consume all stacks to heal yourself and replenish up to 3 stamina based on how many stacks you have. [Max Stacks 25, Max Stamina Restore 3, Heal Per Stack 16]",
		itemActiveCooldown: 20,
		itemActiveCastRange: 32
	}),
	returnFire: new Item({
		name: "Return Fire",
		cost: 1600,
		category: "Vitality",
		type: "Active",
		passiveEffect: "Active: Automatically fire a bullet towards any attacker who damages you with their abilities or weapon. [Ability Duration 6.5s, Bullet Damage Reflected Pct 65, Spirit Damage Reflected Pct 25]",
		itemActiveCooldown: 23,
		itemDuration: 6.5
	}),
	spiritLifesteal: new Item({
		name: "Spirit Lifesteal",
		cost: 1600,
		category: "Vitality",
		bonusMaxHealth: 90,
		bonusSpiritPower: 6,
		bonusSpiritLifeSteal: 0.13
	}),
	spiritShielding: new Item({
		name: "Spirit Shielding",
		cost: 1600,
		category: "Vitality",
		bonusOutOfCombatRegen: 2.5,
		passiveEffect: "Passive: Gain a Barrier whenever you take significant Spirit Damage from enemy Heroes in a small time frame. [Damage Threshold 225, Damage Window 3.5s, Barrier Duration 8s, Combat Barrier 300, Spirit Resist 18]",
		itemPassiveCooldown: 45,
		buildsFrom: "grit"
	}),
	trophyCollector: new Item({
		name: "Trophy Collector",
		cost: 1600,
		category: "Vitality",
		bonusSprintSpeed: 2,
		bonusOutOfCombatRegen: 2,
		passiveEffect: "Also: Non Player Bonus Weapon Power -15 | Passive: Whenever you score an assist or kill, gain extra sprint, ability range and passive soul generation. This effect stacks and persists through death. [Max Stacks 16, Stacking Bonus Sprint Speed 0.15m, Stacking Spirit Range Multiplier 0.75, Stacking Gold Per Minute 16]",
		buildsFrom: "sprintBoots"
	}),
	weaponShielding: new Item({
		name: "Weapon Shielding",
		cost: 1600,
		category: "Vitality",
		bonusOutOfCombatRegen: 2.5,
		passiveEffect: "Passive: Gain a Barrier whenever you take significant Weapon Damage from enemy Heroes in a small time frame. [Damage Threshold 250, Damage Window 4s, Barrier Duration 8s, Combat Barrier 300, Bullet Resist 18]",
		itemPassiveCooldown: 35,
		buildsFrom: "grit"
	}),

	// ----- Vitality 3200 -----
	bulletResilience: new Item({
		name: "Bullet Resilience",
		cost: 3200,
		category: "Vitality",
		bonusOutOfCombatRegen: 3,
		bonusWeaponResistance: 0.3,
		passiveEffect: "Passive: When below 50% health, gain additional Bullet Resist. [Health Threshold 50, Bullet Resist Below Threshold 15]"
	}),
	counterspell: new Item({
		name: "Counterspell",
		cost: 3200,
		category: "Vitality",
		bonusMaxHealth: 50,
		bonusSpiritPower: 5,
		passiveEffect: "Passive: Your next parry protects you from the damage and effects of enemy abilities and items. On a successful spell parry Heal and gain Move Speed and Spirit. [Buff Duration 6s, Spell Parry Duration 0.8s, Heal On Success 150, Spirit Power 20, Bonus Move Speed 1.75m]",
		itemPassiveCooldown: 23
	}),
	dispelMagic: new Item({
		name: "Dispel Magic",
		cost: 3200,
		category: "Vitality",
		type: "Active",
		bonusSpiritResistance: 0.1,
		passiveEffect: "Active: Purge all non-ultimate negative effects currently applied to you. If any effects were removed, heal yourself and gain a move speed bonus. Cannot be used while Stunned or Slept. [Active Bonus Move Speed 2m, Buff Duration 3s, Heal On Activate 250]",
		itemActiveCooldown: 45
	}),
	fortitude: new Item({
		name: "Fortitude",
		cost: 3200,
		category: "Vitality",
		bonusMaxHealth: 375,
		passiveEffect: "Passive: After not taking damage for a period, gain health regen. [Restore Delay 10, Heal Life Percent Out Of Combat 2.25] | Passive: When you are above 75% health, you have bonus Move Speed. [Bonus Move Speed 1.5m]",
		buildsFrom: "extraHealth"
	}),
	furyTrance: new Item({
		name: "Fury Trance",
		cost: 3200,
		category: "Vitality",
		type: "Active",
		bonusWeaponLifeSteal: 0.14,
		bonusMaxHealth: 100,
		bonusWeaponDamage: 0.06,
		passiveEffect: "Active: Grants Fire Rate, Spirit Resistance and Move Speed, and removes the Move Speed penalty while shooting, but Silences you and disables stamina usage and regeneration. [Ability Duration 6.5s, Active Bonus Fire Rate 32, Active Bonus Move Speed 1m, Spirit Resist 40]",
		itemActiveCooldown: 18,
		itemDuration: 6.5,
		buildsFrom: "bulletLifesteal"
	}),
	healingNova: new Item({
		name: "Healing Nova",
		cost: 3200,
		category: "Vitality",
		type: "Active",
		bonusAbilityRange: 0.05,
		bonusSpiritPower: 8,
		passiveEffect: "Active: Heal yourself and nearby allies. [Regen Duration 2s, Aura Radius 18m, Total Health Regen 325]",
		itemActiveCooldown: 60,
		buildsFrom: "healingRite"
	}),
	lifestrike: new Item({
		name: "Lifestrike",
		cost: 3200,
		category: "Vitality",
		bonusMaxHealth: 125,
		bonusMeleeDamage: 0.16,
		passiveEffect: "Passive: Your Melee Attack applies Movement Slow and heals you for a percentage of the Melee Damage dealt plus a fixed amount. This heal is 40% effective vs non-heroes. Cooldown is 1.5x as long for Light Melee hits. [Slow Duration 2.5s, Slow Percent 48, Lifesteal Heal 120, Lifesteal Heal Percent 35]",
		itemPassiveCooldown: 4,
		buildsFrom: "meleeLifesteal"
	}),
	majesticLeap: new Item({
		name: "Majestic Leap",
		cost: 3200,
		category: "Vitality",
		type: "Active",
		passiveEffect: "Active: Launch yourself high into the air and grant yourself a Barrier. While in the air, you can use the active again to drop down faster. Cannot be used for 5s if attacked by enemy Hero. [Barrier Duration 8s, Air Control Percent Barrier 50, Combat Barrier 200, Interrupt Cooldown 5s]",
		itemActiveCooldown: 45
	}),
	metalSkin: new Item({
		name: "Metal Skin",
		cost: 3200,
		category: "Vitality",
		type: "Active",
		bonusWeaponResistance: 0.12,
		passiveEffect: "Active: Become immune to bullets. [Active Move Speed Penalty -1.5m, Ground Dash Reduction Percent -20, Ability Duration 5s]",
		itemActiveCooldown: 24,
		itemDuration: 5
	}),
	rescueBeam: new Item({
		name: "Rescue Beam",
		cost: 3200,
		category: "Vitality",
		type: "Active",
		bonusSprintSpeed: 0.75,
		bonusAbilityRange: 0.06,
		passiveEffect: "Active: Heals a target allied hero and yourself for a percentage of Max Health. Once while healing, you can Pull the target towards you. Can be self-cast. [Ability Channel Time 2.5, Ability Cast Range 35m, Heal Percent Amount 20]",
		itemActiveCooldown: 60,
		itemActiveCastRange: 35,
		buildsFrom: "healingRite"
	}),
	spiritResilience: new Item({
		name: "Spirit Resilience",
		cost: 3200,
		category: "Vitality",
		bonusOutOfCombatRegen: 3,
		bonusSpiritResistance: 0.3,
		passiveEffect: "Passive: When below 50% health, gain additional Spirit Resist. [Health Threshold 50, Spirit Resist Below Threshold 15]"
	}),
	staminaMastery: new Item({
		name: "Stamina Mastery",
		cost: 3200,
		category: "Vitality",
		bonusStamina: 2,
		bonusStaminaRecovery: 0.18,
		passiveEffect: "Also: Air Move Increase Percent 23 | Passive: Allows an additional use of Air Jump or Air Dash before landing.",
		buildsFrom: "extraStamina"
	}),
	veilWalker: new Item({
		name: "Veil Walker",
		cost: 3200,
		category: "Vitality",
		bonusMaxHealth: 125,
		bonusSpiritPower: 6,
		passiveEffect: "Passive: Walking through a cosmic veil grants you Stealth, Heal and increased Move Speed. [Invis Duration 8s, Bonus Move Speed 3.5m, Heal On Veil 85]",
		itemPassiveCooldown: 15,
		itemDuration: 16
	}),
	warpStone: new Item({
		name: "Warp Stone",
		cost: 3200,
		category: "Vitality",
		type: "Active",
		passiveEffect: "Active: Teleport straight ahead, gaining Bullet Resist. [Caster Buff Duration 6s, Ability Cast Range 11m, Bullet Resist 30]",
		itemActiveCooldown: 16,
		itemActiveCastRange: 11
	}),

	// ----- Vitality 6400 -----
	cheatDeath: new Item({
		name: "Cheat Death",
		cost: 6400,
		category: "Vitality",
		bonusMaxHealth: 200,
		bonusWeaponResistance: 0.15,
		passiveEffect: "Passive: When you would take lethal damage, instead become temporarily death immune and remove all non-stun debuffs. While death immune, you deal reduced damage and have reduced healing. [Death Immunity Damage Reduction -60, Heal Amp Receive Penalty Percent -60, Death Immunity Duration 4.5s]",
		itemPassiveCooldown: 90
	}),
	colossus: new Item({
		name: "Colossus",
		cost: 6400,
		category: "Vitality",
		type: "Active",
		bonusWeaponDamage: 0.15,
		bonusBaseHealth: 0.25,
		passiveEffect: "Active: Grow larger in size, gaining Bullet Resist, Spirit Resist, and Melee Damage. Nearby enemies suffer from Slow and have reduced dash speed. [Radius 14m, Ability Duration 7s, Model Scale Growth Tooltip 20, Buff Bullet Resist 35, Buff Spirit Resist 35, Bonus Melee Damage Percent 30, Slow Percent 24]",
		itemActiveCooldown: 37,
		itemDuration: 7,
		buildsFrom: "extraHealth"
	}),
	divineBarrier: new Item({
		name: "Divine Barrier",
		cost: 6400,
		category: "Vitality",
		type: "Active",
		bonusAbilityRange: 0.1,
		bonusOutOfCombatRegen: 1.5,
		passiveEffect: "Active: Remove all non-stun debuffs from the target and provide them with a Barrier and Move Speed. Can be self-cast. Cooldown is reduced by half when cast on someone else. [Buff Duration 6s, Ability Cast Range 40m, Combat Barrier 600, Bonus Move Speed 2.75m]",
		itemActiveCooldown: 45,
		itemActiveCastRange: 40,
		buildsFrom: "guardianWard"
	}),
	divinersKevlar: new Item({
		name: "Diviner's Kevlar",
		cost: 6400,
		category: "Vitality",
		bonusAbilityDuration: 0.15,
		passiveEffect: "Also: Ultimate Cooldown Reduction 10s | Passive: Upon casting an ultimate ability gain a Barrier and temporary Spirit Power. [Buff Duration 20s, Combat Barrier 1000, Spirit Power 40]",
		itemPassiveCooldown: 40
	}),
	healingTempo: new Item({
		name: "Healing Tempo",
		cost: 6400,
		category: "Vitality",
		bonusSpiritResistance: 0.1,
		bonusHealthRegen: 6,
		bonusOutOfCombatRegen: 4,
		bonusHealing: 0.25,
		passiveEffect: "Effect: Applying Heal to yourself or an ally grants the target Bonus Fire Rate and Bonus Move Speed. Does not apply on innate Regen or passive Bullet/Spirit Lifesteals. [Buff Duration 7, Bonus Fire Rate 35, Bonus Move Speed 1.25m]",
		itemPassiveCooldown: 1,
		buildsFrom: "healingBooster"
	}),
	indomitable: new Item({
		name: "Indomitable",
		cost: 6400,
		category: "Vitality",
		bonusOutOfCombatRegen: 2,
		bonusWeaponResistance: 0.1,
		bonusSpiritResistance: 0.1,
		passiveEffect: "Effect: The next Stun, Chain, Immobilize, Sleep or Silence is automatically cleansed. When this happens, you gain a barrier and all your ability cooldowns get reduced by 20%. [Ability Duration 10s, Vex Barrier Combat Barrier 325 (+2x spirit)]",
		itemPassiveCooldown: 55,
		itemDuration: 10,
		buildsFrom: "reactiveBarrier"
	}),
	infuser: new Item({
		name: "Infuser",
		cost: 6400,
		category: "Vitality",
		type: "Active",
		bonusSpiritLifeSteal: 0.13,
		bonusSpiritResistance: 0.1,
		bonusMaxHealth: 100,
		bonusSpiritPower: 6,
		passiveEffect: "Active: Gain Spirit Lifesteal and Spirit Power. [Ability Duration 7s, Ability Lifesteal Percent Hero 70, Bonus Spirit 30]",
		itemActiveCooldown: 30,
		itemDuration: 7,
		buildsFrom: "spiritLifesteal"
	}),
	inhibitor: new Item({
		name: "Inhibitor",
		cost: 6400,
		category: "Vitality",
		bonusWeaponDamage: 0.1,
		bonusMaxHealth: 150,
		passiveEffect: "Passive: Your bullets build up to reduce the target's outgoing damage and apply healing reduction. [Debuff Duration 5s, Build Up Per Shot 0.77, Outgoing Damage Penalty Percent -30, Heal Amp Receive Penalty Percent -40]"
	}),
	juggernaut: new Item({
		name: "Juggernaut",
		cost: 6400,
		category: "Vitality",
		bonusMovementSpeed: 2.5,
		bonusMeleeResist: 0.25,
		bonusHealthRegen: 8,
		passiveEffect: "Also: Slow Resistance Percent 50 | Effect: Enemies that shoot you have their Fire Rate slowed. [Fire Rate Slow Duration 4s, Fire Rate Slow 40]",
		buildsFrom: "enduringSpeed"
	}),
	leech: new Item({
		name: "Leech",
		cost: 6400,
		category: "Vitality",
		bonusMaxHealth: 180,
		bonusWeaponDamage: 0.12,
		bonusSpiritPower: 12,
		bonusSpiritLifeSteal: 0.28,
		bonusWeaponLifeSteal: 0.28,
		buildsFrom: "bulletLifesteal"
	}),
	phantomStrike: new Item({
		name: "Phantom Strike",
		cost: 6400,
		category: "Vitality",
		type: "Active",
		bonusWeaponDamage: 0.15,
		bonusSpiritPower: 8,
		passiveEffect: "Active: Teleport to an enemy target and pull them to the ground. Dealing damage, Move speed reduction and Disarm. [Ability Cast Range 25m, Slow Duration 3s, Slow Percent 40, Impact Damage 75 (+0.93x spirit)]",
		itemActiveCooldown: 35,
		itemActiveCastRange: 25
	}),
	platedArmor: new Item({
		name: "Plated Armor",
		cost: 6400,
		category: "Vitality",
		bonusMaxHealth: 130,
		passiveEffect: "Passive: Gain a chance to either deflect incoming bullets, preventing all Weapon Damage or prevent all on-hit effects from bullets. [Deflection Percent 30, Bullet Proc Deflection Percent 50]",
		itemPassiveCooldown: 1
	}),
	siphonBullets: new Item({
		name: "Siphon Bullets",
		cost: 6400,
		category: "Vitality",
		bonusWeaponDamage: 0.15,
		bonusWeaponResistance: 0.1,
		passiveEffect: "Passive: Your bullets temporarily steal Max HP from enemies. Enemies regain their stolen health when the debuff expires. [Steal Duration 17s, Proc Cooldown 1.2s, Health Steal Pct Hero 2.5]"
	}),
	spellbreaker: new Item({
		name: "Spellbreaker",
		cost: 6400,
		category: "Vitality",
		bonusMaxHealth: 90,
		bonusSpiritResistance: 0.18,
		bonusDebuffResistance: 0.25,
		passiveEffect: "Passive: The next instance of high Spirit Damage you take is significantly reduced. [Damage Threshold 175, Spirit Damage Reduction Proc 65]",
		itemPassiveCooldown: 9,
		buildsFrom: "debuffReducer"
	}),
	unstoppable: new Item({
		name: "Unstoppable",
		cost: 6400,
		category: "Vitality",
		type: "Active",
		bonusDebuffResistance: 0.25,
		bonusMaxHealth: 125,
		passiveEffect: "Active: Temporarily suppress negative status effects and become immune to Stun, Silence, Sleep, Root, and Disarm. Cannot be used while Stunned or Slept. [Ability Duration 5.5s]",
		itemActiveCooldown: 60,
		itemDuration: 5.5,
		buildsFrom: "debuffReducer"
	}),
	vampiricBurst: new Item({
		name: "Vampiric Burst",
		cost: 6400,
		category: "Vitality",
		type: "Active",
		bonusWeaponLifeSteal: 0.13,
		bonusWeaponResistance: 0.1,
		bonusMaxHealth: 100,
		bonusWeaponDamage: 0.06,
		passiveEffect: "Active: Grants Lifesteal, Fire Rate, and Ammo. This added Ammo is not limited by your max magazine size. [Active Reload Percent 75, Ability Duration 5s, Active Bonus Lifesteal 70, Active Bonus Fire Rate 34]",
		itemActiveCooldown: 30,
		itemDuration: 5,
		buildsFrom: "bulletLifesteal"
	}),
	witchmail: new Item({
		name: "Witchmail",
		cost: 6400,
		category: "Vitality",
		bonusSpiritResistance: 0.22,
		bonusSpiritPower: 14,
		passiveEffect: "Effect: Taking heavy hits of Spirit Damage from an enemy reduces a random ability cooldown. [Damage Threshold 75, Cooldown Reduction Per Hit 4s]",
		itemPassiveCooldown: 1
	})

};
//---Build Math---
function isAbsorbed(key, build) {
	return build.some(otherKey => SHOP_ITEMS[otherKey].buildsFrom === key);
}
function buildBonuses(build) {
	const totals = { cost: 0, categorySouls: { Weapon:0, Spirit:0, Vitality:0 } };
	const ADDED = [...PERCENT_BASED_BONUSES, ...FLAT_BONUSES];

	for (const stat of ADDED) totals[stat] = 0;
	for (const stat of MULTIPLIED_BONUSES) totals[stat] = 1;

	for (const key of build) {
		if (isAbsorbed(key, build)) continue;
		const item = SHOP_ITEMS[key];
		totals.cost += item.cost;
		totals.categorySouls[item.category] += item.cost;
		for (const stat of ADDED) totals[stat] += item[stat];
		for (const stat of MULTIPLIED_BONUSES) totals[stat] *= (1 - item[stat]);
	}

	for (const stat of MULTIPLIED_BONUSES) totals[stat] = (1 - totals[stat]);
	return totals;
}
function buildStats(hero, build) {
	const b = buildBonuses(build);
	const boons = soulsToBoons(b.cost);

	
	
	const weaponInvest = findShopInvestmentBonus(b.categorySouls.Weapon, WEAPON_SHOP_INVEST_BONUS);
	const spiritInvest = findShopInvestmentBonus(b.categorySouls.Spirit, SPIRIT_SHOP_INVEST_BONUS);
	const vitalityInvest = findShopInvestmentBonus(b.categorySouls.Vitality, VITALITY_SHOP_INVEST_BONUS);

	
	const totalWeaponPct = b.bonusWeaponDamage + weaponInvest;
	const heroSpirit = hero.spiritPower + boons * hero.boonSpiritScaling;
	const spirit = (b.bonusSpiritPower + spiritInvest + heroSpirit) * boostMultiplier(b.bonusSpiritPowerPercent);
	

	const meleeMult = boostMultiplier(b.bonusMeleeDamage + halfWpnBonusForMelee(totalWeaponPct));
	
	
	
	const stats = hero.statsAt(boons, spirit - heroSpirit);
	stats.souls = b.cost;
	
	stats.hp = stats.hp * boostMultiplier(b.bonusBaseHealth + vitalityInvest) + b.bonusMaxHealth;
	stats.ammo = Math.ceil((stats.ammo + b.bonusAmmo) * boostMultiplier(b.bonusAmmoPercent));
	stats.bulletResist = stackPercents(stats.bulletResist, b.bonusWeaponResistance);
	stats.spiritResist = stackPercents(stats.spiritResist, b.bonusSpiritResistance);
	stats.lightMelee = Math.ceil(stats.lightMelee * meleeMult);
	stats.heavyMelee = Math.ceil(stats.heavyMelee * meleeMult);
	stats.bulletDmg *= boostMultiplier(totalWeaponPct);
	stats.bulletPerSec *= boostMultiplier(b.bonusFireRate);
	stats.weaponPct = totalWeaponPct;

	//---Spirit Stats---
	stats.cooldownReduction = b.bonusAbilityCooldown
	stats.abilityDuration = b.bonusAbilityDuration
	stats.abilityRange = b.bonusAbilityRange
	stats.abilityCharge = b.bonusAbilityCharges
	stats.spiritLifesteal = b.bonusSpiritLifeSteal
	stats.debuffResistance = b.bonusDebuffResistance

	
	
	return stats;
}
function timeToKill(attacker, hero, target) {
	const dps = attacker.bulletDmg * hero.pelletCount * attacker.bulletPerSec
	const effectiveHP = target.hp / (1 - target.bulletResist)
	return { dps, effectiveHP, ttk: effectiveHP / dps };
}