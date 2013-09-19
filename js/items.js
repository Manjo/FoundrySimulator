function newitem(stats){
this.stats = stats;
this.prepareTooltip = prepareTooltip;
this.step = 0;
}


function createShopItem(name, step){
		item = new Object();
		item.step = step;
		item.stages = new createItem(name);
		item.currentstats = item.stages[step].stats;
}

function createItemImage(name, rank){
//Creates an dom object for the item name and rank specified

		urlprefix = "images/items/";
		urlsuffix = ".png"
		
		var image = document.createElement('img');
		var url = urlprefix + name + rank + urlsuffix;
		image.id = name;
		image.width ="64";
		image.height="64";
		image.src = url;
		return image;

}

function createItem(string){
	var stages = new Array();			
	switch(string){
	
		//
		//	Abin Sur's Lantern
		//
		case "Abin Sur's Lantern":

				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Abin Sur's Lantern";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.will = 100;
				stages[0].stats.willregen = 2;
				stages[0].stats.powerdamage = 10;
				stages[0].tables = createItemTooltip(stages[0]);
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Abin Sur's Lantern";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1250;
				stages[1].stats.sell = 940;
				stages[1].stats.will = 150;
				stages[1].stats.willregen = 5;
				stages[1].stats.powerdamage = 20;
				stages[1].effect1 = getItemEffect('willbattery');
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Abin Sur's Lantern";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;
				stages[2].stats.sell = 1690;
				stages[2].stats.will = 200;
				stages[2].stats.willregen = 5;
				stages[2].stats.powerdamage = 40;
				stages[2].effect1 = getItemEffect('willbattery');
				stages[2].effect2 = getItemEffect('willforce');
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Abin Sur's Lantern";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3250;
				stages[3].stats.sell = 2440;
				stages[3].stats.will = 400;
				stages[3].stats.willregen = 8;
				stages[3].stats.powerdamage = 80;
				stages[3].effect1 = getItemEffect('willbattery');
				stages[3].effect2 = getItemEffect('willforce');
				stages[3].tables = createItemTooltip(stages[3]);
				return stages;
			
		//
		//	Coda Blade
		//	
		case "Coda Blade":
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Coda Blade";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 375;
				stages[0].stats.attackdamage = 12;
				stages[0].tables = createItemTooltip(stages[0]);
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Coda Blade";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.attackdamage = 25;
				stages[1].tables = createItemTooltip(stages[1]);
					
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Coda Blade";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1750;
				stages[2].stats.sell = 1125;
				stages[2].stats.attackdamage = 40;
				stages[2].effect1 = getItemEffect('piercing1');
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Coda Blade";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2500;
				stages[3].stats.sell = 1875;
				stages[3].stats.attackdamage = 40;
				stages[3].effect1 = getItemEffect('wounding');
				stages[3].effect1 = getItemEffect('piercing2');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;
				
		//
		//	Cheetah's Claw
		//
				
		case "Cheetah's Claw":
				
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Cheetah's Claw";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.attacklifesteal = 1;
				stages[0].stats.attackspeed = 4;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Cheetah's Claw";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 750;
				stages[1].stats.sell = 565;
				stages[1].stats.attacklifesteal = 5;
				stages[1].stats.attackspeed = 10;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Cheetah's Claw";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1250;
				stages[2].stats.sell = 940;
				stages[2].stats.attacklifesteal = 10;
				stages[2].stats.attackspeed = 15;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Cheetah's Claw";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2000;
				stages[3].stats.sell = 1500;
				stages[3].stats.attacklifesteal = 15;
				stages[3].stats.attackspeed = 20;
				stages[3].effect1 = getItemEffect('desperatespeed');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;
		//
		//	Shade's Cane
		//
		case "Shade's Cane":
				
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Shade's Cane";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.attackdamage = 5;
				stages[0].effect1 = getItemEffect('powerburst');
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Shade's Cane";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.attackdamage = 20;
				stages[1].stats.powerdamage = 15;
				stages[1].effect1 = getItemEffect('powerburst');
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Shade's Cane";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2000;
				stages[2].stats.sell = 1500;
				stages[2].stats.attackdamage = 40;
				stages[2].stats.powerdamage = 30;
				stages[2].effect1 = getItemEffect('powerburst');
				stages[2].tables = createItemTooltip(stages[2]);	
				
				return stages;
				
		//
		//	Joker's Crowbar
		//
		case "Joker's Crowbar":
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Joker's Crowbar";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.attackdamage = 15;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Joker's Crowbar";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.attackdamage = 15;
				stages[1].effect1 = getItemEffect('attackharvest');
				stages[1].tables = createItemTooltip(stages[1]);	
				return stages;
		//
		//	Lobo's Chain
		//
		case "Lobo's Chain":	
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Lobo's Chain";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.attackdamage = 5;
				stages[0].stats.health = 100;
				stages[0].tables = createItemTooltip(stages[0]);
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Lobo's Chain";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1250;
				stages[1].stats.sell = 940;
				stages[1].stats.health = 200;
				stages[1].stats.attackdamage = 20;
				stages[1].tables = createItemTooltip(stages[1]);
					
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Lobo's Chain";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;
				stages[2].stats.sell = 1690;
				stages[2].stats.health = 300;
				stages[2].stats.attackdamage = 30;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Lobo's Chain";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3500;
				stages[3].stats.sell = 2625;
				stages[3].stats.health = 400;
				stages[3].stats.attackdamage = 30;
				stages[3].effect1 = getItemEffect('attackharrier');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;
				
		//
		//	Huntress' Crossbow
		//
		case "Huntress' Crossbow":	
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Huntress' Crossbow";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;
				stages[0].stats.attackdamage = 15;
				stages[0].stats.cdr = 5;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Huntress' Crossbow";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1500;
				stages[1].stats.sell = 1125;
				stages[1].stats.attackdamage = 30;
				stages[1].stats.cdr = 10;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Huntress' Crossbow";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2500;
				stages[2].stats.sell = 1875;
				stages[2].stats.attackdamage = 50;
				stages[2].stats.cdr = 20;
				stages[2].tables = createItemTooltip(stages[2]);	
				
				return stages;
		
		//
		//	Mega Rod
		//
		case "Mega Rod":	
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Mega Rod";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1000;
				stages[0].stats.sell = 750;
				stages[0].stats.attackdamage = 10;
				stages[0].stats.attackspeed = 10;
				stages[0].effect1 = getItemEffect('shockwave1');
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Mega Rod";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2000;
				stages[1].stats.sell = 1500;
				stages[1].stats.attackdamage = 20;
				stages[1].stats.attackspeed = 20;
				stages[1].effect1 = getItemEffect('shockwave2');
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Mega Rod";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 3000;
				stages[2].stats.sell = 2250;
				stages[2].stats.attackdamage = 30;
				stages[2].stats.attackspeed = 30;
				stages[2].effect1 = getItemEffect('shockwave3');
				stages[2].tables = createItemTooltip(stages[2]);	
				
				return stages;
		
		//
		//Velocity 9 Implants
		//
		case 'Velocity 9 Implants':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Velocity 9 Implants";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;
				stages[0].stats.attackspeed = 15;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Velocity 9 Implants";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1500;
				stages[1].stats.sell = 1125;
				stages[1].stats.attackspeed = 20;
				stages[1].stats.criticalchance = 10;
				stages[1].stats.movespeed = 10;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Velocity 9 Implants";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;	
				stages[2].stats.sell = 1690;			
				stages[2].stats.criticalchance = 15;
				stages[2].stats.movespeed = 15;
				stages[2].stats.attackspeed = 30;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Velocity 9 Implants";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3250;
				stages[3].stats.sell = 2440;
				stages[3].stats.criticalchance = 20;
				stages[3].stats.movespeed = 15;
				stages[3].stats.attackspeed = 50;
				stages[3].effect1 = getItemEffect('Attack Fervor');
				stages[3].tables = createItemTooltip(stages[3]);
				return stages;
		//
		//Soultaker Katana
		//
		case 'Soultaker Katana':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Soultaker Katana';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;
				stages[0].stats.attackdamage = 10;
				stages[0].stats.attacklifesteal = 5;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Soultaker Katana';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1500;
				stages[1].stats.sell = 1125;
				stages[1].stats.attackdamage = 20;
				stages[1].stats.attacklifesteal = 10;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Soultaker Katana';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;		
				stages[2].stats.sell = 1690;		
				stages[2].stats.attackdamage = 20;
				stages[2].stats.attacklifesteal = 10;
				stages[2].effect1 = getItemEffect('attackdamagecollector');
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Soultaker Katana';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3000;
				stages[3].stats.sell = 2250;
				stages[3].stats.attackdamage = 30;
				stages[3].stats.attacklifesteal = 15;
				stages[3].effect1 = getItemEffect('attackdamagecollector');
				stages[3].tables = createItemTooltip(stages[3]);
				return stages;
		//
		//Atomic Axe
		//
		case 'Atomic Axe':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Atomic Axe';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1500;
				stages[0].stats.sell =1125;
				stages[0].stats.attackdamage = 40;
				stages[0].effect1 = getItemEffect('razor1');
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Atomic Axe';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 3000;
				stages[1].stats.sell = 2250;
				stages[1].stats.attackdamage = 60;
				stages[1].effect1 = getItemEffect('razor2');
				stages[1].tables = createItemTooltip(stages[1]);
				return stages
				
		//		
		//Atlantis Gambit		
		//		
		case 'Atlantis Gambit':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Atlantis Gambit';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.attacklifesteal = 4;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Atlantis Gambit';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 750;
				stages[1].stats.sell = 565;
				stages[1].stats.attacklifesteal = 8;
				stages[1].effect1 = getItemEffect('investment');
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Atlantis Gambit';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1750;		
				stages[2].stats.sell = 1315;		
				stages[2].stats.attacklifesteal = 8;
				stages[2].effect1 = getItemEffect('atlantisaura');
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Atlantis Gambit';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2250;		
				stages[3].stats.sell = 1690;		
				stages[3].stats.attacklifesteal = 8;
				stages[3].effect1 = getItemEffect('atlantisaura');
				stages[3].effect2 = getItemEffect('Targeting System');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;
		//
		//	Zeiss Goggles
		//		
		case 'Zeiss Goggles':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Zeiss Goggles';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.criticalchance = 5;
				stages[0].stats.attackdamage = 10;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Zeiss Goggles';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.criticalchance = 10;
				stages[1].stats.attackdamage = 20;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Zeiss Goggles';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1500;	
				stages[2].stats.sell = 1125;
				stages[2].stats.criticalchance = 15;
				stages[2].stats.attackdamage = 30;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Zeiss Goggles';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2500;
				stages[3].stats.sell = 1875;
				stages[3].stats.criticalchance = 20;
				stages[3].stats.attackdamage = 40;
				stages[3].effect1 = getItemEffect('Frenzy');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;
				
		//
		//	Promethium Mace
		//		
		case 'Promethium Mace':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Promethium Mace';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.attackdamage = 6;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Promethium Mace';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 500;
				stages[1].stats.sell = 375;
				stages[1].stats.attackdamage = 12;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Promethium Mace';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1000;	
				stages[2].stats.sell = 750;
				stages[2].stats.attackdamage = 24;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Promethium Mace';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 1500;
				stages[3].stats.sell = 1500;
				stages[3].stats.attackdamage = 32;
				stages[3].effect1 = getItemEffect('refundable');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;
				
		//
		//	Rip Hunter's Time Pack
		//		
		case "Rip Hunter's Time Pack":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Rip Hunter's Time Pack";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.attackspeed = 5;
				stages[0].stats.cdr = 5;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Rip Hunter's Time Pack";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1250;
				stages[1].stats.sell = 940;
				stages[1].stats.attackspeed = 20;
				stages[1].stats.cdr = 10;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Rip Hunter's Time Pack";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2000;	
				stages[2].stats.sell = 1500;
				stages[2].stats.attackspeed = 30;
				stages[2].stats.cdr = 10;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Rip Hunter's Time Pack";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3000;
				stages[3].stats.sell = 2250;
				stages[3].stats.attackspeed = 40;
				stages[3].stats.cdr = 15;
				stages[3].effect1 = getItemEffect('Time Anchor');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;
				
		//
		//	Claw of Horus
		//		
		case "Claw of Horus":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Claw of Horus";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;
				stages[0].stats.attackarmor = 20;
				stages[0].stats.attackdamage = 10;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Claw of Horus";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1500;
				stages[1].stats.sell = 1125;
				stages[1].stats.attackdamage= 15;
				stages[1].stats.attackarmor = 25;
				stages[1].stats.attacklifesteal = 5;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Claw of Horus";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;	
				stages[2].stats.sell = 1690;	
				stages[2].stats.attackdamage= 20;
				stages[2].stats.attackarmor = 30;
				stages[2].stats.attacklifesteal = 5;
				stages[2].effect1 = getItemEffect('kineticarmor');
				stages[2].tables = createItemTooltip(stages[2]);
				
				return stages;
				
		//
		//	Batman's Utility Belt
		//		
		case "Batman's Utility Belt":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Batman's Utility Belt";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1000;
				stages[0].stats.sell = 750;
				stages[0].stats.health = 150;
				stages[0].stats.attackspeed = 10;
				stages[0].stats.cdr = 5;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Batman's Utility Belt";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1750;
				stages[1].stats.sell = 1500;
				stages[1].stats.health = 200;
				stages[1].stats.attackspeed = 15;
				stages[1].stats.cdr = 10;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Batman's Utility Belt";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2500;
				stages[2].stats.sell = 1910;
				stages[2].stats.movespeed = 5;
				stages[2].stats.health = 300;				
				stages[2].stats.attackspeed = 20;
				stages[2].stats.cdr = 15;
				stages[2].tables = createItemTooltip(stages[2]);
							
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Batman's Utility Belt";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3250;
				stages[3].stats.sell = 2440;
				stages[3].stats.movespeed = 5;
				stages[3].stats.health = 300;				
				stages[3].stats.attackspeed = 20;
				stages[3].stats.cdr = 15;
				stages[3].effect1 = getItemEffect('Purge');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;
				
		//
		//	Sword of Beowulf
		//
		case "Sword of Beowulf":
				
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Sword of Beowulf";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1000;
				stages[0].stats.sell = 750;
				stages[0].stats.attackdamage = 20;
				stages[0].stats.powerarmor = 10;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Sword of Beowulf";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2000;
				stages[1].stats.sell = 1500;
				stages[1].stats.attackdamage = 40;
				stages[1].stats.powerarmor = 20;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Sword of Beowulf";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 3000;
				stages[2].stats.sell = 2250;
				stages[2].stats.attackdamage = 50;
				stages[2].stats.powerarmor = 30;
				stages[2].effect1 = getItemEffect('responseshield');
				stages[2].effect2 = getItemEffect('desperateendurance');
				stages[2].tables = createItemTooltip(stages[2]);	
				
				return stages;
		//
		// Deadshot's Visor/
		//
				
				
		case "Deadshot's Visor":

				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Deadshot's Visor";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.will = 100;
				stages[0].stats.willregen = 2;
				stages[0].stats.attackdamage = 5;
				stages[0].tables = createItemTooltip(stages[0]);
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Deadshot's Visor";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1250;
				stages[1].stats.sell = 940;
				stages[1].stats.will = 150;
				stages[1].stats.willregen = 5;
				stages[1].stats.attackdamage = 10;
				stages[1].effect1 = getItemEffect('willbattery');
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Deadshot's Visor";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;
				stages[2].stats.sell = 1690;
				stages[2].stats.will = 200;
				stages[2].stats.willregen = 5;
				stages[2].stats.attackdamage = 20;
				stages[2].effect1 = getItemEffect('willbattery');
				stages[2].effect2 = getItemEffect('forceofwill');
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Deadshot's Visor";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3250;
				stages[3].stats.sell = 2440;
				stages[3].stats.will = 400;
				stages[3].stats.willregen = 8;
				stages[3].stats.attackdamage = 40;
				stages[3].effect1 = getItemEffect('willbattery');
				stages[3].effect2 = getItemEffect('forceofwill');
				stages[3].effect3 = getItemEffect('Intensity');
				stages[3].tables = createItemTooltip(stages[3]);
				return stages;
				
		//
		//Deathstroke's Claymore		
		//		
		case "Deathstroke's Claymore":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Deathstroke's Claymore";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1500;
				stages[0].stats.attackdamage = 25;
				stages[0].stats.attackspeed = 15;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Deathstroke's Claymore";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 3000;
				stages[1].stats.sell = 2250;
				stages[1].stats.attackdamage = 50;
				stages[1].stats.attackspeed = 25;
				stages[1].effect1 = getItemEffect('slayer');
				stages[1].tables = createItemTooltip(stages[1]);
				return stages
		//
		//  Nil Cloak
		//		
				
		case "Nil Cloak":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Nil Cloak";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 165;
				stages[0].stats.health = 125;
				stages[0].stats.healthregen = 15;
				stages[0].stats.attackarmor = 15;
				stages[0].effect1 = getItemEffect('Toughness');
				stages[0].tables = createItemTooltip(stages[0]);	
				return stages;
				
		//		
		// Oa Gambit		
		//		
		case 'Oa Gambit':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Oa Gambit';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.powerdamage = 6;
				stages[0].stats.powerarmor = 6;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Oa Gambit';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 750;
				stages[1].stats.sell = 565;
				stages[1].stats.powerdamage = 15;
				stages[1].stats.powerarmor = 20;
				stages[1].effect1 = getItemEffect('investment');
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Oa Gambit';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1750;	
				stages[2].stats.sell = 1315;		
				stages[2].stats.powerdamage = 50;
				stages[2].stats.powerarmor = 30;
				stages[2].effect1 = getItemEffect('oaaura');
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Oa Gambit';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2250;	
				stages[3].stats.sell = 1690;		
				stages[3].stats.powerdamage = 55;
				stages[3].stats.powerarmor = 35;
				stages[3].effect1 = getItemEffect('oaaura');
				stages[3].effect2 = getItemEffect('Protection Field');
				stages[3].tables = createItemTooltip(stages[2]);
				
				return stages;		
		//
		// The Medusa Mask
		//
		
		
		case 'The Medusa Mask':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'The Medusa Mask';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.health = 75;
				stages[0].stats.healthregen = 4;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'The Medusa Mask';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 500;
				stages[1].stats.sell = 375;
				stages[1].stats.health = 100;
				stages[1].stats.healthregen = 8;
				stages[1].stats.willregen = 4;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'The Medusa Mask';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1000;	
				stages[2].stats.sell = 750;	
				stages[2].stats.health = 200;
				stages[2].stats.healthregen = 10;
				stages[2].stats.willregen = 6;
				stages[2].effect1 = getItemEffect('medisys');
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'The Medusa Mask';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 1500;
				stages[3].stats.sell = 1125;	
				stages[3].stats.health = 300;
				stages[3].stats.healthregen = 20;
				stages[3].stats.willregen = 10;
				stages[3].effect1 = getItemEffect('medisys');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;	
		//
		//	Phantom Stranger's Necklace
		//
		case "Phantom Stranger's Necklace":
				
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name ="Phantom Stranger's Necklace";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.attackarmor = 6;
				stages[0].stats.powerarmor = 6;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Phantom Stranger's Necklace";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.attackarmor = 10;
				stages[1].stats.powerarmor = 10;
				stages[1].stats.cdr = 10;
				stages[1].effect1 = getItemEffect('armorcollector');
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Phantom Stranger's Necklace";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2000;
				stages[2].stats.sell = 1500;
				stages[2].stats.attackarmor = 30;
				stages[2].stats.powerarmor = 30;
				stages[2].stats.cdr = 15;
				stages[2].effect1 = getItemEffect('armorcollector');
				stages[2].tables = createItemTooltip(stages[2]);	
				
				return stages;
				
		//
		// The Crime Bible
		//
		
		
		case 'The Crime Bible':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'The Crime Bible';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.health = 100;
				stages[0].stats.healthregen = 20;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'The Crime Bible';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.health = 150;
				stages[1].stats.healthregen = 20;
				stages[1].effect1 = getItemEffect('healthharvest');
				stages[1].tables = createItemTooltip(stages[1]);
				return stages;
			
		//
		// Diana's Bracers
		//
			
		case "Diana's Bracers":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Diana's Bracers";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;
				stages[0].stats.resilience = 15;
				stages[0].stats.healthregen = 25;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name =  "Diana's Bracers";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1500;
				stages[1].stats.sell = 1125;
				stages[1].stats.resilience = 30;
				stages[1].stats.healthregen = 25;
				stages[1].effect1 = getItemEffect('healthbalance');
				stages[1].tables = createItemTooltip(stages[1]);
				return stages;
		//
		// Spear of Destiny
		//
			
		case "Spear of Destiny":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Spear of Destiny";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1000;
				stages[0].stats.sell = 750;
				stages[0].stats.attackdamage = 10;
				stages[0].stats.powerarmor = 35;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name =  "Spear of Destiny";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2250;
				stages[1].stats.sell = 1690;
				stages[1].stats.attackdamage = 20;
				stages[1].stats.powerarmor = 55;
				stages[1].effect1 = getItemEffect('enforcement');
				stages[1].tables = createItemTooltip(stages[1]);
				return stages;
		//
		// Ruby of Life
		//		
		case 'Ruby of Life':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Ruby of Life';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.health = 100;
				stages[0].stats.healthregen = 10;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Ruby of Life';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1250;
				stages[1].stats.sell = 940;
				stages[1].stats.health = 100;
				stages[1].stats.healthregen = 10;
				stages[1].effect1 = getItemEffect('healthcollector');
				stages[1].tables = createItemTooltip(stages[1]);
			
				
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Ruby of Life';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;
				stages[2].stats.sell = 1690;
				stages[2].stats.health = 400;
				stages[2].stats.healthregen = 25;
				stages[2].effect1 = getItemEffect('healthcollector');
				stages[2].tables = createItemTooltip(stages[2]);

		
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Ruby of Life';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2750;
				stages[3].stats.sell = 2065;
				stages[3].stats.health = 400;
				stages[3].stats.healthregen = 25;
				stages[3].stats.resilience = 15;
				stages[3].effect1 = getItemEffect('healthcollector');
				stages[3].tables = createItemTooltip(stages[3]);
				return stages;
		
			//
			// Entropy Aegis
			//
				case 'Entropy Aegis':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Entropy Aegis';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;
				stages[0].stats.will = 100;
				stages[0].stats.powerarmor = 25;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Entropy Aegis';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1500;
				stages[1].stats.sell = 1125;
				stages[1].stats.health = 100;
				stages[1].stats.will = 100;
				stages[1].stats.powerarmor = 50;
				stages[1].tables = createItemTooltip(stages[1]);
			
				
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Entropy Aegis';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;
				stages[2].stats.sell = 1690;
				stages[2].stats.health = 200;
				stages[2].stats.will = 100;
				stages[2].stats.powerarmor = 60;
				stages[2].effect1 = getItemEffect('skillblock');
				stages[2].tables = createItemTooltip(stages[2]);

		
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Entropy Aegis';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3000;
				stages[3].stats.sell = 2250;
				stages[3].stats.health = 300;
				stages[3].stats.will = 200;
				stages[3].stats.powerarmor = 70;
				stages[3].effect1 = getItemEffect('skillblock');
				stages[3].tables = createItemTooltip(stages[3]);
				return stages;
				
		//
		//	Ra's al Ghul's Robe
		//
		case "Ra's al Ghul's Robe":
				
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Ra's al Ghul's Robe";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1250;
				stages[0].stats.sell = 940;
				stages[0].stats.attackarmor = 30;
				stages[0].stats.powerarmor = 30;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Ra's al Ghul's Robe";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2750;
				stages[1].stats.sell = 2065;
				stages[1].stats.attackarmor = 60;
				stages[1].stats.powerarmor = 40;
				stages[1].effect1 = getItemEffect('Lazarus Effect');
				stages[1].tables = createItemTooltip(stages[1]);	
				
				return stages;
				
				
		//		
		// Olympus Gambit		
		//		
		case 'Olympus Gambit':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Olympus Gambit';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.health = 100;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Olympus Gambit';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 750;
				stages[1].stats.sell = 565;
				stages[1].stats.health = 250;
				stages[1].effect1 = getItemEffect('investment');
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Olympus Gambit';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1750;		
				stages[2].stats.sell = 1315;			
				stages[2].stats.health = 250;
				stages[2].stats.attackarmor = 15;
				stages[2].stats.powerarmor = 15;
				stages[2].effect1 = getItemEffect('olympusaura');
				stages[2].tables = createItemTooltip(stages[2]);
				
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Olympus Gambit';
				stages[3].level = 3;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2250;		
				stages[3].stats.sell = 1690;			
				stages[3].stats.health = 250;
				stages[3].stats.attackarmor = 20;
				stages[3].stats.powerarmor = 20;
				stages[3].effect1 = getItemEffect('olympusaura');
				stages[3].effect1 = getItemEffect('Bastion');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;		

				
		//
		//	Hawkman's Harness
		//		
		case "Hawkman's Harness":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Hawkman's Harness";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.health = 80;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Hawkman's Harness";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 500;
				stages[1].stats.sell = 375;
				stages[1].stats.health = 160;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Hawkman's Harness";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 750;	
				stages[2].stats.sell = 565;	
				stages[2].stats.health = 240;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Hawkman's Harness";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 1000;
				stages[3].stats.sell = 1000;
				stages[3].stats.health = 320;
				stages[3].effect1 = getItemEffect('refundable');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;		

		//
		//	Steel's Breastplate
		//		
		case "Steel's Breastplate":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Steel's Breastplate";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.will = 150;
				stages[0].stats.attackarmor = 10;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Steel's Breastplate";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1250;
				stages[1].stats.sell = 940;
				stages[1].stats.will = 300;
				stages[1].stats.attackarmor = 30;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Steel's Breastplate";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2000;	
				stages[2].stats.sell = 1500;	
				stages[2].stats.will = 300;
				stages[2].stats.attackarmor = 60;
				stages[2].stats.movespeed = 20;
				stages[2].effect1 = getItemEffect("Mercury's Gift");
				stages[2].tables = createItemTooltip(stages[2]);
				
				return stages;	

	
		//
		//	Amulet of Isis
		//		
		case "Amulet of Isis":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Amulet of Isis";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.buy = 450;
				stages[0].stats.health = 100;
				stages[0].stats.willregen = 2;
				stages[0].stats.cdr = 5;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Amulet of Isis";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.health = 200;
				stages[1].stats.willregen = 4;
				stages[1].stats.cdr = 10;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Amulet of Isis";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2000;	
				stages[2].stats.sell = 1500;	
				stages[2].stats.health = 300;
				stages[2].stats.willregen = 25;
				stages[2].stats.cdr = 15;
				stages[2].effect1 = getItemEffect("Mercury's Gift");
				stages[2].tables = createItemTooltip(stages[2]);
				
				return stages;			

		//
		//	Metallo's Heart
		//		
		case "Metallo's Heart":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Metallo's Heart";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1000;
				stages[0].stats.sell = 750;
				stages[0].stats.will = 150;
				stages[0].stats.attackarmor = 30;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Metallo's Heart";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2000;
				stages[1].stats.sell = 1500;
				stages[1].stats.will = 250;
				stages[1].stats.attackarmor = 40;
				stages[1].stats.cdr = 15;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Metallo's Heart";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 3000;	
				stages[2].stats.sell = 2250;	
				stages[2].stats.attackarmor = 50;
				stages[2].stats.will = 350;
				stages[2].stats.cdr = 20;
				stages[2].effect1 = getItemEffect('dampeningaura');
				stages[2].tables = createItemTooltip(stages[2]);
				
				return stages;			
				
				
		//
		//	Helm of Fate
		//		
		case "Helm of Fate":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Helm of Fate";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1000;
				stages[0].stats.sell = 750;
				stages[0].stats.powerdamage = 30;
				stages[0].stats.attackarmor = 20;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Helm of Fate";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2000;
				stages[1].stats.sell = 1500;
				stages[1].stats.powerdamage = 60;
				stages[1].stats.attackarmor = 35;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Helm of Fate";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 3000;	
				stages[2].stats.sell = 2250;	
				stages[2].stats.attackarmor = 50;
				stages[2].stats.powerdamage = 90;
				stages[2].effect1 = getItemEffect('Mystical Conversion');
				stages[2].tables = createItemTooltip(stages[2]);
				
				return stages;		


				
		//
		//	Suit of Sorrows
		//		
		case "Suit of Sorrows":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Suit of Sorrows";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;
				stages[0].stats.attackarmor = 35;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Suit of Sorrows";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1750;
				stages[1].stats.sell = 1315;
				stages[1].stats.attackarmor = 70;
				stages[1].effect1 = getItemEffect('mirrordefense1');
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Suit of Sorrows";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2500;	
				stages[2].stats.sell = 1875;	
				stages[2].stats.attackarmor = 100;
				stages[2].effect1 = getItemEffect('mirrordefense2');
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Suit of Sorrows";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3000;
				stages[3].stats.sell = 2250;
				stages[3].stats.attackarmor = 100;
				stages[3].effect1 = getItemEffect('mirrordefense3');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;	

		//
		//	Kryptonian War Armor
		//		
		case "Kryptonian War Armor":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Kryptonian War Armor";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;
				stages[0].stats.powerarmor = 25;
				stages[0].stats.healthregen = 10;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Kryptonian War Armor";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1500;
				stages[1].stats.sell = 1125;
				stages[1].stats.powerarmor = 50;
				stages[1].stats.healthregen = 20;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Kryptonian War Armor";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;	
				stages[2].stats.sell = 1690;	
				stages[2].stats.powerarmor = 60;
				stages[2].stats.movespeed = 10;
				stages[2].stats.healthregen = 30;
				stages[2].effect1 = getItemEffect('vitality');
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Kryptonian War Armor";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3000;
				stages[3].stats.sell = 2250;
				stages[3].stats.powerarmor = 70;
				stages[3].stats.healthregen = 40;
				stages[3].stats.movespeed = 30;
				stages[3].effect1 = getItemEffect('vitality');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;		
		//
		//	Fragment of Mogo
		//		
		case "Fragment of Mogo":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Fragment of Mogo";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1000;
				stages[0].stats.sell = 750;
				stages[0].stats.health = 200;
				stages[0].stats.attackarmor = 25;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Fragment of Mogo";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2000;
				stages[1].stats.sell = 1500;
				stages[1].stats.health = 250;
				stages[1].stats.attackarmor = 35;
				stages[1].stats.cdr = 15;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Fragment of Mogo";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 3000;	
				stages[2].stats.sell = 2250;	
				stages[2].stats.attackarmor = 45;
				stages[2].stats.health = 300;
				stages[2].stats.cdr = 15;
				stages[2].effect1 = getItemEffect('Burning Core');
				stages[2].tables = createItemTooltip(stages[2]);
				
				return stages;			
		//
		//  Nil Ring
		//		
				
		case "Nil Ring":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Nil Ring";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 165;
				stages[0].stats.health = 75;
				stages[0].stats.will = 75;
				stages[0].stats.willregen = 7;
				stages[0].stats.powerdamage = 15;
				stages[0].tables = createItemTooltip(stages[0]);	
				return stages;
		//
		//	Doctor Destiny's Dreamstone
		//		
		case "Doctor Destiny's Dreamstone":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Doctor Destiny's Dreamstone";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.willregen = 8;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Doctor Destiny's Dreamstone";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 750;
				stages[1].stats.sell = 565;
				stages[1].stats.willregen = 8;
				stages[1].stats.powerarmor = 20;
				stages[1].effect1 = getItemEffect('willbalance');
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Doctor Destiny's Dreamstone";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1750;	
				stages[2].stats.sell = 1315;	
				stages[2].stats.powerdamage = 30;
				stages[2].stats.powerarmor = 20;
				stages[2].stats.willregen = 16;
				stages[2].stats.cdr = 10;
				stages[2].effect1 = getItemEffect('willbalance');
				stages[2].tables = createItemTooltip(stages[2]);
				
				return stages;		

				
		//
		// Gorilla Grodd's Helmet
		//		
		case "Gorilla Grodd's Helmet":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Gorilla Grodd's Helmet";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.will = 75;
				stages[0].stats.willregen = 3;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Gorilla Grodd's Helmet";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 500;
				stages[1].stats.sell = 375;
				stages[1].stats.will = 100;
				stages[1].stats.willregen = 10;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Gorilla Grodd's Helmet";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1000;	
				stages[2].stats.sell = 750;	
				stages[2].stats.will = 150;
				stages[2].stats.willregen = 15;
				stages[2].stats.resilience = 10;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Gorilla Grodd's Helmet";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 1500;
				stages[3].stats.sell = 1125;
				stages[3].stats.will = 200;
				stages[3].stats.willregen = 25;
				stages[3].stats.resilience = 20;
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;						
				
				
		//
		//	The Logoz
		//		
		case "The Logoz":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "The Logoz";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.will = 50;
				stages[0].stats.powerdamage = 5;
				stages[0].effect1 = getItemEffect('willrestore');
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "The Logoz";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.will = 150;
				stages[1].stats.powerdamage = 20;
				stages[1].effect1 = getItemEffect('powerdamagecollector');
				stages[1].effect2 = getItemEffect('willrestore');
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "The Logoz";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2000;	
				stages[2].stats.sell = 1500;	
				stages[2].stats.powerdamage = 55;
				stages[2].stats.will = 300;
				stages[2].effect1 = getItemEffect('powerdamagecollector');
				stages[2].effect2 = getItemEffect('willrestore');
				stages[2].tables = createItemTooltip(stages[2]);
				
				return stages;		
		//
		//	Fatality's Energy Lance
		//
		case "Fatality's Energy Lance":	
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Fatality's Energy Lance";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.powerdamage = 25;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Fatality's Energy Lance";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.powerdamage = 40;
				stages[1].stats.cdr = 5;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Fatality's Energy Lance";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1500;
				stages[2].stats.sell = 1125;
				stages[2].stats.powerdamage = 60;
				stages[2].stats.cdr = 10;
				stages[2].tables = createItemTooltip(stages[2]);

				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Fatality's Energy Lance";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2250;
				stages[3].stats.sell = 1690;
				stages[3].stats.powerdamage = 60;
				stages[3].stats.cdr = 15;
				stages[3].effect1 = getItemEffect('Energy Blast');
				stages[3].tables = createItemTooltip(stages[3]);				
				
				return stages;
				
		//
		//	Eye of Ekron
		//
		case "Eye of Ekron":	
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Eye of Ekron";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.movespeed = 5;
				stages[0].stats.powerdamage = 10;
				stages[0].stats.will = 125;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Eye of Ekron";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.movespeed = 5;
				stages[1].stats.powerdamage = 10;
				stages[1].stats.will = 150;
				stages[1].stats.cdr = 10;
				stages[1].effect1 = getItemEffect('shrapnel');
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Eye of Ekron";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1750;
				stages[2].stats.sell = 1315;
				stages[2].stats.movespeed = 10;
				stages[2].stats.will = 200;
				stages[2].stats.powerdamage = 20;
				stages[2].stats.cdr = 20;
				stages[2].effect1 = getItemEffect('shrapnel');
				stages[2].tables = createItemTooltip(stages[2]);

				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Eye of Ekron";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2500;
				stages[3].stats.sell = 1875;
				stages[3].stats.will = 250;
				stages[3].stats.movespeed = 10;
				stages[3].stats.powerdamage = 50;
				stages[3].stats.cdr = 20;
				stages[3].effect1 = getItemEffect('shrapnel');
				stages[3].tables = createItemTooltip(stages[3]);				
				
				return stages;
				
		//
		//	Pandora's Box
		//
		case "Pandora's Box":	
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Pandora's Box";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.powerlifesteal = 5;
				stages[0].stats.cdr = 5;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Pandora's Box";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.powerlifesteal = 10;
				stages[1].stats.cdr = 10;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Pandora's Box";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1500;
				stages[2].stats.sell = 1125;
				stages[2].stats.powerlifesteal = 15;
				stages[2].stats.cdr = 15;
				stages[2].tables = createItemTooltip(stages[2]);

				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Pandora's Box";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2000;
				stages[3].stats.sell = 1500;
				stages[3].stats.powerlifesteal = 20;
				stages[3].stats.cdr = 20;
				stages[3].effect1 = getItemEffect('Blood Spirit');
				stages[3].tables = createItemTooltip(stages[3]);				
				
				return stages;	
		//
		//	Psi-Scimitar
		//
		case "Psi-Scimitar":
				
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Psi-Scimitar";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1000;
				stages[0].stats.sell = 750;
				stages[0].stats.attackdamage = 15;
				stages[0].stats.powerdamage = 20;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Psi-Scimitar";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2000;
				stages[1].stats.sell = 1500;
				stages[1].stats.attackdamage = 25;
				stages[1].stats.powerdamage = 40;
				stages[1].effect1 = getItemEffect('skilledattack1');
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Psi-Scimitar";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 3000;
				stages[2].stats.sell = 2250;
				stages[2].stats.attackdamage = 40;
				stages[2].stats.powerdamage = 60;
				stages[2].effect1 = getItemEffect('skilledattack2');
				stages[2].tables = createItemTooltip(stages[2]);	
				
				return stages;
		//		
		//The Book of Eternity 
		//
		case "The Book of Eternity":
				
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "The Book of Eternity";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1250;
				stages[0].stats.sell = 940;
				stages[0].stats.powerdamage = 50;
				stages[0].effect1 = getItemEffect('arcane1');
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "The Book of Eternity";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2500;
				stages[1].stats.sell = 1875;
				stages[1].stats.powerdamage = 80;
				stages[1].effect1 = getItemEffect('arcane2');
				stages[1].tables = createItemTooltip(stages[1]);	
				return stages;
		
		//
		//	The Starheart
		//
		case "The Starheart":	
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "The Starheart";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1000;
				stages[0].stats.sell = 750;
				stages[0].stats.powerdamage = 45;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "The Starheart";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2000;
				stages[1].stats.sell = 1500;
				stages[1].stats.powerdamage = 90;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "The Starheart";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 3000;
				stages[2].stats.sell = 2250;
				stages[2].stats.powerdamage = 135;
				stages[2].tables = createItemTooltip(stages[2]);

				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "The Starheart";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 4000;
				stages[3].stats.sell = 3000;
				stages[3].stats.powerdamage = 140;
				stages[3].effect1 = getItemEffect('powerfeedback');
				stages[3].tables = createItemTooltip(stages[3]);				
				
				return stages;		

		//		
		// Qward Gambit	
		//		
		case 'Qward Gambit':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Qward Gambit';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.willregen = 8;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Qward Gambit';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 750;
				stages[1].stats.sell = 565;
				stages[1].stats.willregen = 8;
				stages[1].stats.powerdamage = 20;
				stages[1].effect1 = getItemEffect('investment');
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Qward Gambit';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1750;		
				stages[2].stats.sell = 1315;			
				stages[2].stats.willregen = 8;		
				stages[2].stats.powerdamage = 40;
				stages[2].effect1 = getItemEffect('qwardaura');
				stages[2].tables = createItemTooltip(stages[2]);
								
								
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Qward Gambit';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2250;		
				stages[3].stats.sell = 1690;			
				stages[3].stats.willregen = 8;		
				stages[3].stats.powerdamage = 50;
				stages[3].effect1 = getItemEffect('qwardaura');
				stages[3].effect2 = getItemEffect('Scanning');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;	

		//
		//	Radion Shard
		//
		case "Radion Shard":	
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Radion Shard";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.powerdamage = 10;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Radion Shard";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 500;
				stages[1].stats.sell = 375;
				stages[1].stats.powerdamage = 20;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Radion Shard";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1000;
				stages[2].stats.sell = 750;
				stages[2].stats.powerdamage = 40;
				stages[2].tables = createItemTooltip(stages[2]);

				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Radion Shard";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 1500;
				stages[3].stats.sell = 1500;
				stages[3].stats.powerdamage = 60;
				stages[3].effect1 = getItemEffect('refundable');
				stages[3].tables = createItemTooltip(stages[3]);				
				
				return stages;		

		//
		//	Neron's Contract
		//
		case "Neron's Contract":	
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Neron's Contract";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.attackarmor = 15;
				stages[0].stats.powerdamage = 10;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Neron's Contract";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.attackarmor = 25;
				stages[1].stats.powerdamage = 25;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Neron's Contract";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1750;
				stages[2].stats.sell = 1315;
				stages[2].stats.movespeed = 5;
				stages[2].stats.attackarmor = 40;
				stages[2].stats.powerdamage = 40;
				stages[2].tables = createItemTooltip(stages[2]);

				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Neron's Contract";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2750;
				stages[3].stats.sell = 2065;
				stages[3].stats.powerdamage = 50;
				stages[3].stats.attackarmor = 50;
				stages[3].stats.movespeed = 10;
				stages[3].effect1 = getItemEffect('Stasis Field');
				stages[3].tables = createItemTooltip(stages[3]);				
				
				return stages;		

		//		
		//Two Face's Coin
		//
		case "Two Face's Coin":
				
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Two Face's Coin";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;
				stages[0].stats.powerdamage = 30;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Two Face's Coin";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.powerdamage = 30;
				stages[1].effect1 = getItemEffect('powerharvest');
				stages[1].tables = createItemTooltip(stages[1]);	
				return stages;
		//		
		// Blue Scarab
		//		
		case 'Blue Scarab':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Blue Scarab';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;
				stages[0].stats.attackspeed = 10;
				stages[0].stats.powerdamage = 15;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Blue Scarab';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1500;
				stages[1].stats.sell = 1125;
				stages[1].stats.attackspeed = 20;
				stages[1].stats.powerdamage = 15;
				stages[1].effect1 = getItemEffect('chargedarmor');
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Blue Scarab';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2500;		
				stages[2].stats.sell = 1875;			
				stages[2].stats.attackspeed = 40;		
				stages[2].stats.powerdamage = 15;
				stages[2].effect1 = getItemEffect('chargedarmor');
				stages[2].effect2 = getItemEffect('chargedattack');
				stages[2].tables = createItemTooltip(stages[2]);
				
				return stages;	
				
		//
		//	Cosmic Staff
		//
		case "Cosmic Staff":	
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Cosmic Staff";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 450;	
				stages[0].stats.powerdamage = 25;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Cosmic Staff";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.powerdamage = 50;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Cosmic Staff";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1500;
				stages[2].stats.sell = 1125;
				stages[2].stats.powerdamage = 60;
				stages[2].effect1 = getItemEffect('devastating');
				stages[2].tables = createItemTooltip(stages[2]);

				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Cosmic Staff";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2500;
				stages[3].stats.sell = 1875;
				stages[3].stats.powerdamage = 70;
				stages[3].effect1 = getItemEffect('disintegration');
				stages[3].effect2 = getItemEffect('devastating');
				stages[3].tables = createItemTooltip(stages[3]);				
				
				return stages;		
				
		//
		//	Atlantean Royal Seal
		//
		case "Atlantean Royal Seal":	
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Atlantean Royal Seal";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;		
				stages[0].stats.powerdamage = 20;
				stages[0].stats.health = 100;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Atlantean Royal Seal";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1500;
				stages[1].stats.sell = 1125;
				stages[1].stats.powerdamage = 30;
				stages[1].stats.health = 300;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Atlantean Royal Seal";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;
				stages[2].stats.sell = 1690;
				stages[2].stats.health = 400;
				stages[2].stats.powerdamage = 50;
				stages[2].tables = createItemTooltip(stages[2]);

				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Atlantean Royal Seal";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3000;
				stages[3].stats.sell = 2250;
				stages[3].stats.health = 400;
				stages[3].stats.powerdamage = 60;
				stages[3].effect1 = getItemEffect('skillharrier');
				stages[3].tables = createItemTooltip(stages[3]);				
				
				return stages;		
						
		//
		//	Eclipso's Diamond
		//
		case "Eclipso's Diamond":	
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Eclipso's Diamond";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1500;
				stages[0].stats.sell = 1125;
				stages[0].stats.powerlifesteal = 10;
				stages[0].stats.powerdamage = 50;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Eclipso's Diamond";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 3000;
				stages[1].stats.sell = 2250;
				stages[1].stats.powerlifesteal = 20;
				stages[1].stats.powerdamage = 100;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				return stages;	
				
						//
		//	Joe Chill's Revolver
		//		
		case "Joe Chill's Revolver":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Joe Chill's Revolver";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 1000;
				stages[0].stats.sell = 750;
				stages[0].stats.criticalchance = 10;
				stages[0].stats.attackdamage = 20;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Joe Chill's Revolver";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2000;
				stages[1].stats.sell = 1500;
				stages[1].stats.criticalchance = 15;
				stages[1].stats.attackdamage = 40;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Joe Chill's Revolver";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 3000;	
				stages[2].stats.sell = 2250;	
				stages[2].stats.criticalchance = 20;
				stages[2].stats.attackdamage = 60;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Joe Chill's Revolver";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 4000;
				stages[3].stats.sell = 3000;
				stages[3].stats.criticalchance = 25;
				stages[3].stats.attackdamage = 70;
				stages[3].effect1 = getItemEffect('deadly');
				stages[3].tables = createItemTooltip(stages[3]);
				
				return stages;
				
		//
		// Marauder Shield
		//		
		case 'Marauder Shield':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Marauder Shield';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.health = 75;
				stages[0].effect1 = getItemEffect('marauderburst1');
				stages[0].effect2 = getItemEffect('marauderdefense');
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Marauder Shield';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 750;
				stages[1].stats.sell = 565;
				stages[1].stats.health = 200;
				stages[1].stats.healthregen = 20;
				stages[1].effect1 = getItemEffect('marauderburst3');
				stages[1].effect2 = getItemEffect('marauderdefense');
				stages[1].tables = createItemTooltip(stages[1]);
			
				
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Marauder Shield';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1250;
				stages[2].stats.sell = 940;
				stages[2].stats.health = 200;
				stages[2].stats.healthregen = 20;
				stages[2].stats.resilience = 10;
				stages[2].effect1 = getItemEffect('marauderburst4');
				stages[2].tables = createItemTooltip(stages[2]);

		
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Marauder Shield';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2250;
				stages[3].stats.sell = 1690;
				stages[3].stats.health = 400;
				stages[3].stats.healthregen = 20;
				stages[3].stats.resilience = 30;
				stages[3].effect1 = getItemEffect('marauderburst4');
				stages[3].tables = createItemTooltip(stages[3]);
				return stages;
				
			//
		// Marauder Ring
		//		
		case 'Marauder Ring':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Marauder Ring';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.powerdamage = 10;
				stages[0].effect1 = getItemEffect('marauderburst2');
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Marauder Ring';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 750;
				stages[1].stats.sell = 565;
				stages[1].stats.willregen = 10;
				stages[1].stats.powerdamage = 20;
				stages[1].effect1 = getItemEffect('marauderburst4');
				stages[1].tables = createItemTooltip(stages[1]);
			
				
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Marauder Ring';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1250;
				stages[2].stats.sell = 940;
				stages[2].stats.powerdamage = 40;
				stages[2].stats.willregen = 10;
				stages[2].effect1 = getItemEffect('marauderburst4');
				stages[2].tables = createItemTooltip(stages[2]);

		
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Marauder Ring';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2250;
				stages[3].stats.sell = 1690;
				stages[3].stats.cdr = 15;
				stages[3].stats.powerdamage = 70;
				stages[3].stats.willregen = 10;
				stages[3].effect1 = getItemEffect('marauderburst4');
				stages[3].tables = createItemTooltip(stages[3]);
				return stages;
				
				//
		// Marauder Knife
		//		
		case 'Marauder Knife':
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = 'Marauder Knife';
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 225;
				stages[0].stats.attackdamage = 5;
				stages[0].effect1 = getItemEffect('marauderburst1');
				stages[0].effect2 = getItemEffect('marauderedge');
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Marauder Knife';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 750;
				stages[1].stats.sell = 565;
				stages[1].stats.attacklifesteal = 5;
				stages[1].stats.attackdamage = 10;
				stages[1].effect1 = getItemEffect('marauderburst2');
				stages[1].effect2 = getItemEffect('marauderedge');
				stages[1].tables = createItemTooltip(stages[1]);
			
				
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Marauder Knife';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1250;
				stages[2].stats.sell = 940;
				stages[2].stats.attackdamage = 20;
				stages[2].stats.attacklifesteal = 10;
				stages[2].effect1 = getItemEffect('marauderburst3');
				stages[2].effect2 = getItemEffect('marauderedge');
				stages[2].tables = createItemTooltip(stages[2]);

		
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Marauder Knife';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2250;
				stages[3].stats.sell = 1690;
				stages[3].stats.attackdamage = 50;
				stages[3].stats.attacklifesteal = 10;
				stages[3].effect1 = getItemEffect('marauderburst4');
				stages[3].effect2 = getItemEffect('marauderedge');
				stages[3].tables = createItemTooltip(stages[3]);
				return stages;
		//
		//  Nil Weapon
		//		
				
		case "Nil Weapon":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Nil Weapon";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 165;
				stages[0].stats.health = 75;
				stages[0].stats.attackdamage = 10;
				stages[0].effect1 = getItemEffect('attacksyphon');
				stages[0].tables = createItemTooltip(stages[0]);	
				return stages;
				
		case "Speed Force Battery":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Speed Force Battery";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;
				stages[0].stats.movespeed = 20;
				stages[0].tables = createItemTooltip(stages[0]);	
								
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Speed Force Battery";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2750;
				stages[1].stats.sell = 2065;
				stages[1].stats.movespeed = 20;
				stages[1].effect1 = getItemEffect('Blink Jump');
				stages[1].tables = createItemTooltip(stages[1]);	
				
				
				return stages;		
				
		case "Health Pack":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Health Pack";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 50;
				stages[0].stats.sell = 25;
				stages[0].effect1 = getItemEffect('healthpack');
				stages[0].tables = createItemTooltip(stages[0]);	
				return stages;				
				
		case "Will Pack":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Will Pack";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 50;
				stages[0].stats.sell = 25;
				stages[0].effect1 = getItemEffect('willpack');
				stages[0].tables = createItemTooltip(stages[0]);	
				return stages;			
				
		case "Bleed Portal":
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Bleed Portal";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 500;
				stages[0].stats.sell = 375;
				stages[0].effect1 = getItemEffect('Bleed Tunneling');
				stages[0].tables = createItemTooltip(stages[0]);	
				return stages;
				
		case "Tektite Vial":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Tektite Vial";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 125;
				stages[0].effect1 = getItemEffect('Tektite Vial');
				stages[0].tables = createItemTooltip(stages[0]);	
				return stages;		
				
		case "blank":
				stages[0] = new Object();
				stages[0].name = "blank";
				stages[0].stats = new Object();
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				return stages;
		}			
		
}

function createItemHeader(item){
//Creates the top half of the item description html - the table that contains the name, image, and gold values

	
	//Creates the Item name row 
	
	var itemNameRow = document.createElement('tr');
	var itemNameTD = document.createElement('td');
	itemNameTD.setAttribute('class', "itemname");
	itemNameTD.setAttribute('colspan', "3");
	itemNameTD.setAttribute('align', "center");
	
	var nameSpan = document.createElement('strong');
	nameSpan.innerHTML = item.name + "[" + item.level + "]";
	
	itemNameTD.appendChild(nameSpan);
	itemNameRow.appendChild(itemNameTD);
	
	
	
	//Creates the image, is Appending to the same row as Buy
	var imageTD = document.createElement('td');
	imageTD.appendChild(item.image);
	imageTD.setAttribute('rowspan', "2");
	
	//Buy row setup & appending
	
	var buyValueTD = document.createElement('td');
	buyValueTD.setAttribute('style', "color:#CCCC52");
	buyValueTD.innerHTML = item.stats.buy;
	var buyLabelTD = document.createElement('td');
	buyLabelTD.innerHTML = "Buy Price";
	
	var buyRow = document.createElement('tr');
	buyRow.appendChild(imageTD);				//Image is appended here
	buyRow.appendChild(buyValueTD);
	buyRow.appendChild(buyLabelTD);
	
	// Sell row setup & Appending
	
	var sellValueTD = document.createElement('td');
	sellValueTD.setAttribute('style', "color:#CCCC52");
	if (item.stats['sell'] != undefined) { sellValueTD.innerHTML = item.stats.sell; }
	var sellLabelTD = document.createElement('td');
	sellLabelTD.innerHTML = "Sell Price"
		
	var sellrow = document.createElement('tr');
	sellrow.appendChild(sellValueTD);
	sellrow.appendChild(sellLabelTD);
	
	//Table creation and appending the objects made above
	
	var table = document.createElement('table');
	table.appendChild(itemNameRow);
	table.appendChild(buyRow);
	table.appendChild(sellrow);
	
	return table;

}

//Creates both the full tooltip and the brief tooltip for display
function createItemTooltip(currentitem){
	
//Full Tooltip	
	var header = createItemHeader(currentitem);
	header.setAttribute('style', 'width: 100%')
	var stats = createStatSpan(currentitem.stats, false);
	
	//Checks and creates text spans for any item effects
	if (currentitem.effect1 != undefined ){
		var space = document.createElement('br');
		var effect = createItemEffectSpan(currentitem.effect1, false);
		stats.appendChild(space);
		stats.appendChild(effect);
		if (currentitem.effect2 != undefined ){
			var space2 = document.createElement('br');
			var effect2 = createItemEffectSpan(currentitem.effect2, false);
			stats.appendChild(space2);
			stats.appendChild(effect2);
			if (currentitem.effect3 != undefined ){
				var space3 = document.createElement('br');
				var effect3 = createItemEffectSpan(currentitem.effect3, false);
				stats.appendChild(space3);
				stats.appendChild(effect3);
			}
		}
	}
	var complete = document.createElement('div');	
	complete.appendChild(header);
	var space = document.createElement('br');
	complete.appendChild(space);
	complete.appendChild(stats);
	complete.setAttribute('style', 'width: 100%');
	

//Condensed Tooltip
	var row = document.createElement('tr');
	row.setAttribute('id',currentitem.name + currentitem.id);
	var picture = document.createElement('td');
	var img = currentitem.image.cloneNode(false);
	picture.appendChild(img);
	row.appendChild(picture);
	
	
	//TODO
	//This code should probably be rewritten to create the condensed tooltip while the full tooltip is running
	//The if statements are a bit redundant
	
	
	var condensedStats = createStatSpan(currentitem.stats, true);  
	
	//checks for any effects, and lists names of effects if present
	if (currentitem.effect1 != undefined ){
		var space = document.createElement('br');
		var effect = createItemEffectSpan(currentitem.effect1, true);
		condensedStats.appendChild(effect);
		if (currentitem.effect2 != undefined ){
			var space2 = document.createElement('br');
			var effect2 = createItemEffectSpan(currentitem.effect2, true);
			condensedStats.appendChild(space2);
			condensedStats.appendChild(effect2);
			if (currentitem.effect3 != undefined ){
				var space3 = document.createElement('br');
				var effect3 = createItemEffectSpan(currentitem.effect3, true);
				condensedStats.appendChild(space3);
				condensedStats.appendChild(effect3);
			}
		}
		

	}
	var condensedStatsData = document.createElement('td');
	condensedStatsData.appendChild(condensedStats);
	row.appendChild(condensedStatsData);
	
	//Creates a table object and stuffs both the full and condensed stat lists inside before returning it
	
	var table = new Object();
	table.full = complete;
	table.condensed = row;

	return table;
}
function createStatSpan(stats, isCondensed){
//Creates the block of text for item statistics. The order of the If statements ensures that the stats will be listed in the same order as in game.

		statistics = document.createElement('span');
		if ( stats['movespeed'] != undefined){
			var string = "+ " + stats.movespeed + " Move Speed"+ "<br>";
			statistics.innerHTML += string;
		}	
		
		if ( stats['resilience'] != undefined){
			if(isCondensed){var string = "+ " + stats.resilience + "% Resilience"+ "<br>";}
			else{
			var string = "+ " + stats.resilience + "% Resilience (Reduces the duration of Slow, Stun, Blind, Silence, and Knock-up.)"+ "<br>";}
			statistics.innerHTML += string;
		}
		
		if ( stats['health'] != undefined){
			var string = "+ " + stats.health + " Health" + "<br>";
			statistics.innerHTML += string;
		}
		
		if ( stats['will'] != undefined){
			var string = "+ " + stats.will + " Will" + "<br>";
			statistics.innerHTML += string;
		}
		
		if ( stats['healthregen'] != undefined){
			var string = "+ " + stats.healthregen + " Health Regen per 10s"+ "<br>";
			statistics.innerHTML += string;
		}
		
		if ( stats['willregen'] != undefined){
			var string = "+ " + stats.willregen + " Will Regen per 10s"+ "<br>";
			statistics.innerHTML += string;
		}
		
		if ( stats['attackdamage'] != undefined){
			var string = "+ " + stats.attackdamage + " Attack Damage" + "<br>";
			statistics.innerHTML += string;
		}
		
		if ( stats['criticalchance'] != undefined){
		var string = "+ " + stats.criticalchance + "% Critical Chance" + "<br>";
		statistics.innerHTML += string;
		}
		
		if ( stats['attackspeed'] != undefined){
			var string = "+ " + stats.attackspeed + "% Attack Speed"+ "<br>";
			statistics.innerHTML += string;
		}
				
		if ( stats['attackarmor'] != undefined){
			var string = "+ " + stats.attackarmor + " Attack Armor"+ "<br>";
			statistics.innerHTML += string;
		}		
		
		if ( stats['powerdamage'] != undefined){
			var string = "+ " + stats.powerdamage + " Power Damage" + "<br>";
			statistics.innerHTML += string;
		}
		if ( stats['powerarmor'] != undefined){
			var string = "+ " + stats.powerarmor + " Power Armor"+ "<br>";
			statistics.innerHTML += string;
		}
		if ( stats['attacklifesteal'] != undefined){
			var string = "+ " + stats.attacklifesteal + "% Attack Lifesteal"+ "<br>";
			statistics.innerHTML += string;
		}		
		if ( stats['cdr'] != undefined){
			var string = "+ " + stats.cdr + "% Cooldown Reduction"+ "<br>";
			statistics.innerHTML += string;
		}		
				
		if ( stats['powerlifesteal'] != undefined){
			var string = "+ " + stats.powerlifesteal + "% Power Lifesteal"+ "<br>";
			statistics.innerHTML += string;
		}
		
		return statistics;
}

function createShop(){
//Populates the shop based on what filters are active in the dom

	//creates the table and rows
	var table = document.createElement('table');
	var row = new Array();
	
	//Checking for which item shop list to retrieve
	if ($("#coast_city").attr('checked')){
		var items = getCCItemList();
	} else if ($("#gotham_heights").attr('checked')) {
		var items = getGHItemList();
	}
	
	//Small function to check is a number is odd - Used later for inserting a break every 2 rows
	function isOdd(num) { 
		var temp = num % 2;
		if (temp == 1){ return true;}
		if (temp == 0){ return false;}
	}

	//populates the table with items that are valid with the current filter settings
	for (var i = 0; i < items.length; i++){
		row[i] = document.createElement('tr')
		for (var y = 0; y < items[i].length; y++){
			
			var iteminfo = createItem(items[i][y]);
			var isIncluded = filter(iteminfo);
			if (isIncluded != true) {iteminfo = createItem("blank");}
			var pic = iteminfo[0].image.cloneNode(false);
			if (iteminfo[0].name == "blank"){
			pic.setAttribute('class', 'IGNOREME')
			}else{
				pic.setAttribute('class', 'shopitem');
				}
			pic.width ="50";
			pic.height="50";
			row[i].appendChild(pic);
			}
		table.appendChild(row[i]);
		
		//Adds a blank line to the table to space items every other row
		if (isOdd(i)){
			var databreak = document.createElement('td');
			var rowbreak = document.createElement('tr');
			var linebreak = document.createElement('br');
			databreak.appendChild(linebreak);
			rowbreak.appendChild(linebreak);
			table.appendChild(rowbreak);
		}
	}
	var space = document.createElement('br');
	table.appendChild(space);
	
	//Jquery is used to delegate click functions to each of the items in the table so that they can be identified later
	$("table").delegate("img.shopitem","click", function(event){
			var newitem = createItem(event.target.id);
		 for (var i = 0; i < newitem.length; i++){
				newitem[i].image.setAttribute('id', newitem[i].name + newitem[i].level);
			}
		var newtable = createCondensedTable(newitem)
		$("#full").html("");
		$("#condensed").html("");
		$("#condensed").append(newtable);
		});
	return table;
			
			
}
function filter(item){
	//This function checks the item passed into it against the active filters on the HTML page.
	var filterCheck = new Array();
	if ($("#attackdamage").is(':checked')){
		if (checkItemStats(item, "attackdamage") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#attackpenetration").is(':checked')){
		if (checkItemStats(item, "attackpenetration") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#attackspeed").is(':checked')){
		if (checkItemStats(item, "attackspeed") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#attacklifesteal").is(':checked')){
		if (checkItemStats(item, "attacklifesteal") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#criticalchance").is(':checked')){
		if (checkItemStats(item, "criticalchance") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#health").is(':checked')){
		if (checkItemStats(item, "health") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#healthregen").is(':checked')){
		if (checkItemStats(item, "healthregen") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#attackarmor").is(':checked')){
		if (checkItemStats(item, "attackarmor") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#powerarmor").is(':checked')){
		if (checkItemStats(item, "powerarmor") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#resilience").is(':checked')){
		if (checkItemStats(item, "resilience") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}	
	
	if ($("#powerdamage").is(':checked')){
		if (checkItemStats(item, "powerdamage") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#powerpenetration").is(':checked')){
		if (checkItemStats(item, "powerpenetration") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#powerlifesteal").is(':checked')){
		if (checkItemStats(item, "powerlifesteal") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#will").is(':checked')){
		if (checkItemStats(item, "will") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#willregen").is(':checked')){
		if (checkItemStats(item, "willregen") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#movespeed").is(':checked')){
		if (checkItemStats(item, "movespeed") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	if ($("#cooldown").is(':checked')){
		if (checkItemStats(item, "cdr") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	if ($("#credits").is(':checked')){
		if (checkItemStats(item, "credits") == false){
		filterCheck.push(false);
		}else{
		filterCheck.push(true);
		}
	}
	
	
	
	var isIncluded = true;
	if (filterCheck != undefined){
		for (var i = 0; i < filterCheck.length; i++)
		{
			if (filterCheck[i] == false){
				isIncluded = false;
			}
		}
	}
	
	return isIncluded;
}

function checkItemStats(item, statname){
//Checks for the presence of stats within an item

	var match = false;
	for (var i = 0; i < item.length; i++){
		if(item[i].stats[statname] != undefined){
			match = true;
		}
		
//Checks the effects for items that will affect the sent stat.
		if (item[i]['effect1'] != undefined){
			if (item[i].effect1['tags'] != undefined){
				for (var y = 0; y < item[i].effect1.tags.length; y++){
					if (item[i].effect1.tags[y] == statname){
						match = true;
					}
				}
			}
			
				if (item[i]['effect2'] != undefined){
					if (item[i].effect2['tags'] != undefined){
						for (var y = 0; y < item[i].effect2.tags.length; y++){
							if (item[i].effect2.tags[y] == statname){
								match = true;
							}
						}
					}
				}
		}
	}	

return match;
}
function getCCItemList(){
//A list of items in Coast City
//This section should eventually be in a different file once item conversions are done

var items = new Array();
items[0] = [	"Nil Weapon", 				"Atlantis Gambit", 		"Promethium Mace", 			"Zeiss Goggles", 
				"Joker's Crowbar", 			"Lobo's Chain", 		"Huntress' Crossbow",		"Mega Rod", 
				"Velocity 9 Implants", 		"Soultaker Katana", 	"Atomic Axe"
			];
items[1] = 	[ 	"Marauder Knife", 			"Coda Blade", 			"Cheetah's Claw", 			"Shade's Cane", 
				"Rip Hunter's Time Pack", 	"Claw of Horus", 		"Batman's Utility Belt", 	"Sword of Beowulf", 
				"Deadshot's Visor", 		"Joe Chill's Revolver", "Deathstroke's Claymore"
			];		
items[2] =  [	"Nil Cloak", 				"Olympus Gambit", 		"Hawkman's Harness", 		"Steel's Breastplate" ,
				"The Crime Bible", 			"Diana's Bracers", 		"Spear of Destiny", 		"blank",
				"Ruby of Life", 			"Entropy Aegis", 		"Ra's al Ghul's Robe"
			];
items[3] = [	"Marauder Shield", 			"Oa Gambit", 			"The Medusa Mask", 			"Phantom Stranger's Necklace", 
				"Amulet of Isis", 			"Metallo's Heart", 		"Helm of Fate", 			"blank", 
				"Suit of Sorrows", 			"Kryptonian War Armor", "Fragment of Mogo" 
			];
items[4] = [	"Nil Ring", 				"Qward Gambit", 		"Radion Shard", 			"Neron's Contract",  
				"Fatality's Energy Lance", 	"Eye of Ekron", 		"Pandora's Box", 			"Psi-Scimitar", 
				"Abin Sur's Lantern", 		"The Book of Eternity", "The Starheart"
				];
items[5] = [	"Marauder Ring", 			"Doctor Destiny's Dreamstone", 	"Gorilla Grodd's Helmet", 	"The Logoz", 
				"Two Face's Coin", 			"Blue Scarab", 			"Cosmic Staff", 			"blank", 
				"Atlantean Royal Seal", 	"Eclipso's Diamond", 	"blank"
				];
				
items[6] = [	"Health Pack", 				"Will Pack",			"Tektite Vial",				"blank",
				"Bleed Portal",				"blank",				"blank",					"blank",
				"Speed Force Battery",		"blank",				"blank"
				];

return items;
}

function getGHItemList(){

//A list of items in Gotham Heights
//This section should eventually be in a different file once item conversions are done

var items = new Array();
items[0] = [	"Nil Weapon", 				"Coda Blade", 			"Cheetah's Claw", 			"Shade's Cane", 	 
				"Joker's Crowbar", 			"Lobo's Chain", 		"Huntress' Crossbow",		"Mega Rod", 
				"Velocity 9 Implants", 		"Soultaker Katana", 	"Atomic Axe"
			];
			
			
items[1] = 	[ 	"Atlantis Gambit", 		"Promethium Mace", 			"Zeiss Goggles",			"blank", 
				"Rip Hunter's Time Pack", 	"Claw of Horus", 		"Batman's Utility Belt", 	"Sword of Beowulf", 
				"Deadshot's Visor", 		"Joe Chill's Revolver", "Deathstroke's Claymore"
			];		
			
items[2] =  [	"Nil Cloak", 				"Oa Gambit", 			"The Medusa Mask", 			"Phantom Stranger's Necklace", 		
				"The Crime Bible", 			"Diana's Bracers", 		"Spear of Destiny", 		"blank",
				"Ruby of Life", 			"Entropy Aegis", 		"Ra's al Ghul's Robe"
			];
			
items[3] = [	"Olympus Gambit", 			"Hawkman's Harness",	"Steel's Breastplate" , 	"blank",	
				"Amulet of Isis", 			"Metallo's Heart", 		"Helm of Fate", 			"blank", 
				"Suit of Sorrows", 			"Kryptonian War Armor", "Fragment of Mogo" 
			];
			
items[4] = [	"Nil Ring", 				"Doctor Destiny's Dreamstone", 	"Gorilla Grodd's Helmet", 	"The Logoz", 
				"Fatality's Energy Lance", 	"Eye of Ekron", 		"Pandora's Box", 			"Psi-Scimitar", 
				"Abin Sur's Lantern", 		"The Book of Eternity", "The Starheart"
				];
				
items[5] = [	"Qward Gambit", 			"Radion Shard", 		"Neron's Contract",  		"blank",			
				"Two Face's Coin", 			"Blue Scarab", 			"Cosmic Staff", 			"blank", 
				"Atlantean Royal Seal", 	"Eclipso's Diamond", 	"blank"
				];
				
items[6] = [	"Health Pack", 				"Will Pack",			"Tektite Vial",				"blank",
				"Bleed Portal",				"blank",				"blank",					"blank",
				"Speed Force Battery",		"blank",				"blank"
				];

return items;
}

function createItemEffectSpan(effect, isCondensed){
	//Formats the item effect description to match the colors in game.
	var name = document.createElement('strong');
	name.innerHTML = effect.name;
	var color;
	
	switch (effect.type){
			case "Consumable":
			case "Active":
				color = "color:#00FF00";
				break;
			case "Passive": 
				color = "color:#CC00FF";	
				break;
	}
	name.setAttribute('style', color);
	
	line = document.createElement('span');
	line.appendChild(name);
	if (isCondensed == false){
	line.innerHTML += ":  " + effect.desc;
	
	line.setAttribute('style', "color:#FFFFFF");
	if (effect.type == "Consumable")
		{
		warning = document.createElement('p');
		warning.setAttribute('style', 'color:#FF0000');
		warning.innerHTML = "Consumed after use.";
		line.appendChild(warning);
		}
	}
	
	
	
	return line;
	
}	

function getItemEffect(string){
//Library of defined Effect names.  Will be removed once items are converted to be read from a rails db.

	var effect = new Object();
	var text = document.createElement('p');
	switch(string){
		case "Toughness":
			effect.name = "Toughness";
			effect.desc = "Blocks 5 damage from Champion basic attacks."
			effect.type = "Passive"; 
			break;
	
		case "Burning Core":
			effect.name = "Burning Core";
			effect.desc = "Activate to deal 100 Power Damage to all nearby enemies and then, for 15s, deals 40-20 decaying Power Damage per second to enemies nearby (60s Cooldown)."
			effect.type = "Active"; 
			break;
	
		case "Attack Fervor":
			effect.name = "Attack Fervor";
			effect.desc = "Basic Attacks grant 10% Move Speed for 1.5 seconds"
			effect.type = "Passive"; 
			effect.tags = ["movespeed"];
			break;
			
	
		case "Frenzy":
			effect.name = "Frenzy";
			effect.desc = "Activate to gain 20 Attack Damage and 10% Attack Speed while increasing damage taken by 25% for 5s (60s Cooldown)."
			effect.type = "Active"; 
			effect.tags = ["attackspeed", "attackdamage"];
			break;
			
	
		case "Intensity":
			effect.name = "Intensity";
			effect.desc = "Toggle on to spend 3% of your current Will to deal bonus Attack Damage equal to 2 times the spent Will to all targets of single-target skills and basic attacks."
			effect.type = "Active"; 
			break;
			
		case "Time Anchor":
			effect.name = "Time Anchor";
			effect.desc = "Activate once to record a position. Activate again within 5 seconds to return to that position (60s Cooldown)."
			effect.type = "Active"; 
			break;
			
		case "Purge":
			effect.name = "Purge";
			effect.desc = "Activate to purge negative status effects (60s Cooldown)."
			effect.type = "Active"; 
			break;
		
		case  "Targeting System":
			effect.name = "Targeting System";
			effect.desc = "Activate on a target to slow them by 20% and mark them for 4s. Allies who basic attack marked targets are healed 10 each hit (60s Cooldown)."
			effect.type = "Active"; 
			effect.tags = ["healthregen"];
			break;
			
		case  "Mercury's Gift":
			effect.name = "Mercury's Gift";
			effect.desc = "Grant a 30% Move Speed buff to all nearby allies for 4s (60s Cooldown)."
			effect.type = "Active"; 
			effect.tags = ["movespeed"];
			break;
			
		case  'Lazarus Effect':
			effect.name = "Lazarus Effect";
			effect.desc = "If you would fall to 0 health, you instead become invulnerable and unable to act for 4 seconds before returning to life at 25% Health and 50% Will (5 minute cooldown)."
			effect.type = "Passive"; 
			break;
		
		case 'Bastion':
			effect.name = "Bastion";
			effect.desc = "Activate to reduce damage taken by 25% and reduce damage dealt by 25% for 3 seconds(60s Cooldown)."
			effect.type = "Active"; 
			break;	
	
		case 'Protection Field':
			effect.name = "Protection Field";
			effect.desc = "Grants a temporary 40 + 10 per level Health shield to you and nearby allies that lasts for 4s (60s Cooldown)."
			effect.type = "Active";
			break;	
			
		case 'Mystical Conversion':
			effect.name = "Mystical Conversion";
			effect.desc = "Activate to grant Power Armor equal to 25% of your Attack Armor for 3s (60s Cooldown)."
			effect.type = "Active";
			effect.tags = ["powerarmor"];
			break;	
	
		case 'Stasis Field':
			effect.name = "Stasis Field";
			effect.desc = "Activate to become invulnerable, untargetable, immobile, and unable to act for 2s (60s Cooldown)."
			effect.type = "Active";
			break;
	
	
		case 'Energy Blast':
			effect.name = "Energy Blast";
			effect.desc = "Activate to deal 15% of your target's current Health as Power Damage and increase further damage you deal to them by 10% for 5s (60s Cooldown)."
			effect.type = "Active";
			effect.tags = ["powerdamage"];
			break;
			
		case 'Blood Spirit':
			effect.name = "Blood Spirit";
			effect.desc = "Releases a restless spirit to seek out the nearest enemy champion, traveling up to 35m. If the spirit reaches them, the champion will be slowed and revealed for 5s. You can release 3 spirits before you must refill by returning to base.";
			effect.type = "Active";
			break;
		case 'Scanning':
			effect.name = "Scanning";
			effect.desc = "Place a device which reveals stealthed enemies and gives vision into stealth fields within the target area for 8s (60s cooldown).";
			effect.type = "Active";
			break;
		case 'Blink Jump':
			effect.name = "Blink Jump";
			effect.desc = "Activate to immediately blink to a nearby location up to 5m away (120s cooldown). Cannot be used for 3 seconds after taking damage.";
			effect.type = "Active";
			break;
			
		case 'Tektite Vial':
			effect.name = "Tektite Vial";
			effect.desc = "Restores 100 Health and 100 Will over 15 seconds. Each use consumes 1 of 3 charges. Charges are refreshed when returning to base.";
			effect.type = "Active";
			effect.tags = ["healthregen", "willregen"];
			break;
			
		case 'Bleed Tunneling':
			effect.name = "Bleed Tunneling";
			effect.desc = "Target an Enviromental Object to create an entrance.  Target a second Environmental Object to create an exit and open a connected portal for 15s. Allies can right click to use the entrance and travel to the exit.";
			effect.type = "Consumable";
			break;
			
		case 'willbattery':
			effect.name = "Will Battery";
			effect.desc = "Gain 4 Max Will whenever you use a skill that costs will (3 second Cooldown). Bonus caps at +500 bonus Will.";
			effect.type = "Passive"; 
			effect.tags = ["will"];
			break;
		case 'willforce':
			effect.name = "Will Force";
			effect.desc = "Grants Power Damage equal to 3% of your Max Will.";
			effect.tags = ["powerdamage"];
			effect.type = "Passive"; 
			break;
		case 'marauderedge':
			effect.name = "Marauder Edge";
			effect.desc = "+10 Basic Attack Damage to Creatures (Bypasses Armor)";
			effect.type = "Passive"; 
			break;
		
		case 'marauderburst1':
			effect.name = "Marauder Burst 1";
			effect.desc = "+ 10% Damage to Creatures";
			effect.type = "Passive"; 
			break;
		
		case 'marauderburst2':
			effect.name = "Marauder Burst 2";
			effect.desc = "+ 15% Damage to Creatures";
			effect.type = "Passive"; 
			break;
		
		case 'marauderburst3':
			effect.name = "Marauder Burst 3";
			effect.desc = "+ 20% Damage to Creatures";
			effect.type = "Passive"; 
			break;
		
		case 'marauderburst4':
			effect.name = "Marauder Burst 4";
			effect.desc = "+ 25% Damage to Creatures";
			effect.type = "Passive"; 
			break;
		
		case 'deadly':
			effect.name = "Deadly";
			effect.desc = "+ 50% Critical Damage";
			effect.type = "Passive"; 
			break;
		
		case 'wounding':
			effect.name = "Wounding";
			effect.desc = " Targets hit by your Basic Attacks have their healing and regeneration reduced by 50% for 1.5 seconds";
			effect.type = "Passive"; 
			break;
		
		case 'piercing1':
			effect.name = "Piercing 1";
			effect.desc = "+ 10 Attack Penetration";
			effect.tags = ["attackpenetration"];
			effect.type = "Passive"; 
			break;

		case 'piercing2':
			effect.name = "Piercing 2";
			effect.desc = "+ 15 Attack Penetration";
			effect.tags = ["attackpenetration"];
			effect.type = "Passive"; 
			break;

		case 'desperatespeed':
			effect.name = "Desperate Speed";
			effect.desc = "Falling below 50% health gain 20% Attack Speed and 10 Movement Speed until you do not take or deal damage for 5 seconds";
			effect.tags = ["movespeed", "attackspeed"];
			effect.type = "Passive"; 
			break;

		case 'powerburst':
			effect.name = "Power Burst";
			effect.desc = "Gain 50 Power Damage for 3 seconds every 5th Basic Attack.";
			effect.tags = ["powerdamage"];
			effect.type = "Passive"; 
			break;

		case 'attackharvest':
			effect.name = "Attack Harvest";
			effect.desc = "Gain 2 Attack Damage each minute and with each Champion Kill or Assist (max 60 Attack Damage).";
			effect.tags = ["attackdamage"];
			effect.type = "Passive"; 
			break;

		case 'attackharrier':
			effect.name = "Attack Harrier";
			effect.desc = "Basic Attacks slow your target's Move Speed by 30% decaying for 2 seconds (20% slow for Ranged Basic Attacks).";
			effect.type = "Passive"; 
			break;
			
		case 'shockwave1':
			effect.name = "Shockwave 1";
			effect.desc = "Your Basic Attacks explode, dealing 5 + 10% of your Total Attack Damage to other enemies nearby.";
			effect.type = "Passive"; 
			break;
			
		case 'shockwave2':
			effect.name = "Shockwave 2";
			effect.desc = "Your Basic Attacks explode, dealing 10 damage + 30% of your Total Attack Damage to other enemies nearby.";
			effect.type = "Passive"; 
			break;
			
		case 'shockwave3':
			effect.name = "Shockwave 3";
			effect.desc = "Your Basic Attacks explode, dealing 25 damage + 50% of your Total Attack Damage to other enemies nearby.";
			effect.type = "Passive"; 
			break;
		
		case 'attackdamagecollector':
			effect.name = "Attack Damage Collector";
			effect.desc = "+1 Attack Damage and 0.2% Attack Lifesteal when you collect a coin (max 30 stacks, lose half on death).";
			effect.type = "Passive"; 
			effect.tags = ["attackdamage", "attacklifesteal"];
			break;
			
		case 'razor1':
			effect.name = "Razor 1";
			effect.desc = "+15% Attack Penetration";
			effect.type = "Passive"; 
			effect.tags = ["attackpenetration"];
			break;
			
		case 'razor2':
			effect.name = "Razor 2";
			effect.desc = "+35% Attack Penetration";
			effect.type = "Passive"; 
			effect.tags = ["attackpenetration"];
			break;
			
		case 'atlantisaura':
			effect.name = "Atlantis Aura";
			effect.desc = "+15% Attack Speed and +10% Attack Lifesteal for all nearby allies.";
			effect.type = "Passive"; 
			effect.tags = ["attackspeed", "attacklifesteal"];
			break;
			
		case 'refundable':
			effect.name = "Refundable";
			effect.desc = "You can sell this Artifact back for full value.";
			effect.type = "Passive"; 
			break;
			
		case 'kineticarmor':
			effect.name = "Kinetic Armor";
			effect.desc = "Your Basic Attacks steal 5 Attack Armor for 5 seconds (max 5 stacks).";
			effect.type = "Passive"; 
			effect.tags = ["attackarmor", "attackpenetration"];
			break;
						
		case 'desperatestrength':
			effect.name = "Desperate Strength";
			effect.desc = "Gain +1 Attack Damage for every 2% Health you are missing.";
			effect.type = "Passive"; 
			effect.tags = ["attackdamage"];
			break;
						
		case 'responseshield':
			effect.name = "Response Shield";
			effect.desc = "Gain a shield that blocks 200 damage for 5 seconds when you fall below 30% Health.";
			effect.type = "Passive"; 
			break;
						
		case 'desperateendurance':
			effect.name = "Desperate Endurance";
			effect.desc = "Falling below 30% health, gain 10% Attack and Power Lifesteal until you do not take or deal damage for 5 seconds. (30s Cooldown).";
			effect.tags = ["attacklifesteal", "powerlifesteal"];
			effect.type = "Passive"; 
			break;
						
		case 'forceofwill':
			effect.name = "Force of Will";
			effect.desc = "Grants Attack Damage equal to 2% of your Max Will.";
			effect.type = "Passive"; 
			effect.tags = ["attackdamage"];
			break;
						
		case 'slayer':
			effect.name = "Slayer";
			effect.desc = "Your Basic Attacks deal 5% of you target's current Health as bonus Power Damage.";
			effect.type = "Passive"; 
			break;
						
		case 'oaaura':
			effect.name = "Oa Aura";
			effect.desc = "-15 Power Armor for all nearby enemies.";
			effect.type = "Passive"; 
			effect.tags = ["powerpenetration"];
			break;
						
		case 'investment':
			effect.name = "Investment (Stacking)";
			effect.desc = "Gain 3 gold every 10 seconds";
			effect.type = "Passive"; 
			effect.tags = ["credits"];
			break;		
			
		case 'refundable':
			effect.name = "Refundable";
			effect.desc = "You can sell this Artifact back for full value";
			effect.type = "Passive"; 
			break;
			
		case 'medisys':
			effect.name = "Medisys";
			effect.desc = "On leveling up, regain 150 Health and Will over 10 seconds.";
			effect.type = "Passive"; 
			effect.tags = ["healthregen", "willregen"];
			break;
						
		case 'armorcollector':
			effect.name = "Armor Collector";
			effect.desc = "+1 Attack and Power Armor when you collect a coin (max 30 Attack and Power Armor, lose half on death).";
			effect.type = "Passive"; 
			effect.tags = ["attackarmor", "powerarmor"];
			break;
						
		case 'healthharvest':
			effect.name = "Health Harvest";
			effect.desc = "Gain 15 Health each minute and with each Champion Kill or Assist (max 450 Health)."
			effect.type = "Passive"; 
			effect.tags = ["health"];
			break;
					
		case 'healthbalance':
			effect.name = "Health Balance";
			effect.desc = "Gain +1% Health Regen per 1% of Health you are missing.";
			effect.type = "Passive"; 
			effect.tags = ["healthregen"];
			break;
							
		case 'enforcement':
			effect.name = "Enforcement";
			effect.desc = "Gain 2% of your Max Health as additional Attack Damage.";
			effect.type = "Passive"; 
			effect.tags = ["health"];
			break;
						
		case 'healthcollector':
			effect.name = "Health Collector";
			effect.desc = "+7.5 Health and +1.5 Health Regen when you collect a coin (max 225 Health, 45 Health Regen, lose half on death).";
			effect.type = "Passive"; 
			effect.tags = ["health", "healthregen"];
			break;
						
		case 'skillblock':
			effect.name = "Skill Block";
			effect.desc = "Grants a Skill Shield that prevents the damage and effects of the next enemy skill(60s cooldown).";
			effect.type = "Passive"; 
			break;
						
		case 'olympusaura':
			effect.name = "Olympus Aura";
			effect.desc = "+15 Attack Armor, +15 Power Armor, and +10 Health Regen per 10s for all nearby allies.";
			effect.type = "Passive"; 
			effect.tags = ["attackarmor", "powerarmor", "healthregen"];
			break;
						
		case 'dampeningaura':
			effect.name = "Dampening Aura";
			effect.desc = "-20% Attack Speed for all nearby enemies.";
			effect.type = "Passive"; 
			break;
						
		case 'mirrordefense1':
			effect.name = "Mirror Defense";
			effect.desc = "+10% Attack Reflect";
			effect.type = "Passive"; 
			break;
			
		case 'mirrordefense2':
			effect.name = "Mirror Defense";
			effect.desc = "+20% Attack Reflect";
			effect.type = "Passive"; 
			break;
			
		case 'mirrordefense3':
			effect.name = "Mirror Defense";
			effect.desc = "+30% Attack Reflect";
			effect.type = "Passive"; 
			break;
			
		case 'vitality':
			effect.name = "Vitality";
			effect.desc = "+20% Healing Received";
			effect.type = "Passive"; 
			break;
			
		case 'willbalance':
			effect.name = "Will Balance";
			effect.desc = "Gain +1% Will Regen per 1% of Will you are missing";
			effect.type = "Passive"; 
			effect.tags = ["willregen"];
			break;
			
		case 'powerdamagecollector':
			effect.name = "Power Damage Collector";
			effect.desc = "+1.5 Power Damage when you collect a coin (max 45 Power Damage, lose half on death).";
			effect.type = "Passive"; 
			effect.tags = ["powerdamage"];
			break;
			
		case 'willrestore':
			effect.name = "Will Restore";
			effect.desc = "Restores 8 Will when you collect a coin.";
			effect.type = "Passive"; 
			effect.tags = ["willregen"];
			break;
			
		case 'shrapnel':
			effect.name = "Shrapnel";
			effect.desc = "After skill use, your next Basic Attack damages enemies behind your target equal to 25 + 50% of Power Damage (2s cooldown).";
			effect.type = "Passive"; 
			break;
			
			
		case 'skilledattack1':
			effect.name = "Skilled Attack 1";
			effect.desc = "After skill use, your next Basic Attack deals additional Power Damage equal to 25 + 50% of Power Damage or 100% base Attack Damage(2s cooldown). Activate to toggle.";
			effect.type = "Active";
			break;
			
		case 'skilledattack2':
			effect.name = "Skilled Attack 2";
			effect.desc = "After skill use, your next Basic Attack deals additional Power Damage equal to 50 + 75% of Power Damage or 150% base Attack Damage(2s cooldown). Activate to toggle.";
			effect.type = "Active";
			break;
			
		case 'arcane1':
			effect.name = "Arcane 1";
			effect.desc = "+15% Power Penetration";
			effect.tags = ["powerpenetration"];
			effect.type = "Passive"; 
			break;
			
		case 'arcane2':
			effect.name = "Arcane 2";
			effect.desc = "+35% Power Penetration";
			effect.tags = ["powerpenetration"];
			effect.type = "Passive"; 
			break;
		
		case 'powerfeedback':
			effect.name = "Power Feedback";
			effect.desc = "+30% Power Damage.";
			effect.tags = ["powerdamage"];
			effect.type = "Passive"; 
			break;
		
		case 'qwardaura':
			effect.name = "Qward Aura";
			effect.desc = "+20 Power Damage and +10% Power Lifesteal for all nearby allies.";
			effect.type = "Passive"; 
			effect.tags = ["powerdamage", "powerlifesteal"];
			break;
		
		case 'powerharvest':
			effect.name = "Power Harvest";
			effect.desc = "Gain 3 Power Damage each minute with each Champion Kill or Assist (max 90 Power Damage)";
			effect.type = "Passive"; 
			effect.tags = ["powerdamage"];
			break;
		
		case 'chargedarmor':
			effect.name = "Charged Armor";
			effect.desc = "Your Basic Attacks steal 5 Power Armor for 5 seconds(max 5 stacks)";
			effect.type = "Passive"; 
			effect.tags = ["powerpenetration", "powerarmor"];
			break;
		
		case 'chargedattack':
			effect.name = "Charged Attack";
			effect.desc = "Your Basic Attacks deal bonus Power Damage equal to 10 + 10% of your Power Damage.";
			effect.type = "Passive"; 
			break;
		
		case 'disintegration':
			effect.name = "Disintegration";
			effect.desc = "Dealing damage from skills applies an effect dealing 2% of the target's current Health per second for 3 seconds";
			effect.type = "Passive"; 
			break;
			
		case 'devastating':
			effect.name = "Devastating";
			effect.desc = "+15 Power Penetration";
			effect.type = "Passive"; 
			effect.tags = ["powerpenetration"];
			break;
			
		case 'skillharrier':
			effect.name = "Skill Harrier";
			effect.desc = "Targets damaged by your skills lose 20% Move Speed for 1.5 seconds";
			effect.type = "Passive"; 
			break;
			
		case 'attacksyphon':
			effect.name = "Attack Syphon";
			effect.desc = "Autoattacks heal you for 5 health.";
			effect.type = "Passive"; 
			effect.tags = ["healthregen"];
			break;
		case 'willpack':
			effect.name = "Will Pack";
			effect.desc = "Restores 150 Will over 15 seconds.";
			effect.type = "Consumable"; 
			effect.tags = ["willregen"];
			break;
		case 'healthpack':
			effect.name = "Health Pack";
			effect.desc = "Restores 150 Health over 15 seconds.";
			effect.type = "Consumable"; 
			effect.tags = ["healthregen"];
			break;
			
			
	}
	return effect;
}

function createCondensedTable(item){
//Creates a table of the condensed stats for each level of an item.

//Creates the table DOM object and sets attributes
	var table = document.createElement('table');
	table.setAttribute('id', "Item Steps Container");
	table.setAttribute('valign', "top");
	table.setAttribute('style', 'width: 100%')

//Creates and sets the header with the item name over the table

	var itemNameHeader = document.createElement('h3')
	itemNameHeader.setAttribute('id', 'itemname');
	itemNameHeader.innerHTML = item[0].name;
	itemNameHeader.setAttribute('style', 'color:#1EFDFF; text-align: center');
	var titleTR = document.createElement('tr')
	var titleTD = document.createElement('td')
	titleTD.setAttribute('colspan', "2");
	titleTD.appendChild(itemNameHeader);
	titleTR.appendChild(titleTD);

table.appendChild(titleTR);

// This loop populates the table with each level of item

	var len = item.length;
	for (var i = len-1; i > -1; i--){
		string = item[i].name + item[i].level;
		item[i].tables.condensed.setAttribute('id', string);
		item[i].tables.condensed.setAttribute('class', 'condensedtip');
		//document.write(item[i].name);

		table.appendChild(item[i].tables.condensed);
		if (i != 0) {
		var tr = document.createElement('tr')
		var td = document.createElement('td')
		td.setAttribute('colspan', "2");
		td.innerHTML = "<hr>";
		tr.appendChild(td);
		table.appendChild(tr);
		}
		
	}
	//Delegates a hover function to each section. Hovering over these sections brings up the full description.
	$("table").delegate("tr.condensedtip", "hover", function(event){
		var current = event.target;
		
		while ($(current).attr('class') != "condensedtip"){
			current = $(current).parent();
			}
		
		//extracts which version of the item the current dom object being hovered over is for
		var string = $(current).attr('id');
		var len = string.length;
		var level = string.substr(len-1, len);
		level = level - 1;
		string = string.substr(0, len-1);
		var newitem = createItem(string);
		$("#full").html("");
		$("#full").append(newitem[level].tables.full);
	});
  
return table;
}

