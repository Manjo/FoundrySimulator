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
				stages[0].stats.sell = 375;
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
				stages[2].stats.buy = 1500;
				stages[2].stats.sell = 1125;
				stages[2].stats.attackdamage = 30;
				stages[2].effect1 = getItemEffect('piercing1');
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Coda Blade";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2500;
				stages[3].stats.sell = 1875;
				stages[3].stats.attackdamage = 50;
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
				stages[0].stats.sell = 190;
				stages[0].stats.attacklifesteal = 1;
				stages[0].stats.attackspeed = 4;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Cheetah's Claw";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 500;
				stages[1].stats.sell = 375;
				stages[1].stats.attacklifesteal = 3;
				stages[1].stats.attackspeed = 8;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Cheetah's Claw";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1000;
				stages[2].stats.sell = 750;
				stages[2].stats.attacklifesteal = 6;
				stages[2].stats.attackspeed = 15;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Cheetah's Claw";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 1750;
				stages[3].stats.sell = 1315;
				stages[3].stats.attacklifesteal = 12;
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
				stages[0].stats.sell = 190;
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
				stages[0].stats.sell = 375;
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
				stages[0].stats.sell = 375;
				stages[0].stats.attackdamage = 10;
				stages[0].tables = createItemTooltip(stages[0]);
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Lobo's Chain";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1250;
				stages[1].stats.sell = 940;
				stages[1].stats.health = 150;
				stages[1].stats.attackdamage = 20;
				stages[1].tables = createItemTooltip(stages[1]);
					
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Lobo's Chain";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;
				stages[2].stats.sell = 1690;
				stages[2].stats.health = 350;
				stages[2].stats.attackdamage = 30;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Lobo's Chain";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3500;
				stages[3].stats.sell = 2625;
				stages[3].stats.health = 500;
				stages[3].stats.attackdamage = 40;
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
				stages[0].stats.cdr = 20;
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
				stages[2].stats.movespeed = 10;
				stages[2].stats.attackspeed = 30;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Velocity 9 Implants";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3250;
				stages[3].stats.sell = 2440;
				stages[3].stats.criticalchance = 25;
				stages[3].stats.movespeed = 20;
				stages[3].stats.attackspeed = 50;
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
				stages[0].stats.buy = 1000;
				stages[0].stats.sell = 750;
				stages[0].stats.attackdamage = 10;
				stages[0].stats.attacklifesteal = 10;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Soultaker Katana';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2000;
				stages[1].stats.sell = 1500;
				stages[1].stats.attackdamage = 30;
				stages[1].stats.attacklifesteal = 15;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Soultaker Katana';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2750;		
				stages[2].stats.sell = 2065;		
				stages[2].stats.attackdamage = 40;
				stages[2].stats.attacklifesteal = 15;
				stages[2].effect1 = getItemEffect('attackdamagecollector');
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Soultaker Katana';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 3250;
				stages[3].stats.sell = 2440;
				stages[3].stats.attackdamage = 60;
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
				stages[0].stats.sell = 190;
				stages[0].stats.cdr = 6;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Atlantis Gambit';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 750;
				stages[1].stats.sell = 565;
				stages[1].stats.cdr = 10;
				stages[1].stats.attacklifesteal = 5;
				stages[1].effect1 = getItemEffect('investment');
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Atlantis Gambit';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1750;		
				stages[2].stats.sell = 1315;		
				stages[2].stats.cdr = 10;
				stages[2].stats.attacklifesteal = 5;
				stages[2].effect1 = getItemEffect('atlantisaura');
				stages[2].tables = createItemTooltip(stages[2]);
				
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
				stages[0].stats.sell = 375;
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
				stages[2].stats.criticalchance = 20;
				stages[2].stats.attackdamage = 30;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Zeiss Goggles';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2250;
				stages[3].stats.sell = 1690;
				stages[3].stats.criticalchance = 30;
				stages[3].stats.attackdamage = 40;
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
				stages[0].stats.sell = 190;
				stages[0].stats.attackdamage = 7;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Promethium Mace';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 500;
				stages[1].stats.sell = 375;
				stages[1].stats.attackdamage = 15;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Promethium Mace';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1000;	
				stages[2].stats.sell = 750;
				stages[2].stats.attackdamage = 30;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Promethium Mace';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 1500;
				stages[3].stats.sell = 1500;
				stages[3].stats.attackdamage = 45;
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
				stages[0].stats.sell = 375;
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
				stages[1].stats.attackspeed = 15;
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
				stages[3].stats.attackspeed = 50;
				stages[3].stats.cdr = 15;
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
				stages[0].stats.attackarmor = 10;
				stages[0].stats.attacklifesteal = 10;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Claw of Horus";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1500;
				stages[1].stats.sell = 1125;
				stages[1].stats.attackdamage= 10;
				stages[1].stats.attackarmor = 10;
				stages[1].stats.attacklifesteal = 15;
				stages[1].effect1 = getItemEffect('kineticarmor');
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Claw of Horus";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;	
				stages[2].stats.sell = 1690;	
				stages[2].stats.attackdamage= 20;
				stages[2].stats.attackarmor = 10;
				stages[2].stats.attacklifesteal = 15;
				stages[2].effect1 = getItemEffect('kineticarmor');
				stages[2].effect2 = getItemEffect('desperatestrength');
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
				stages[1].stats.buy = 2000;
				stages[1].stats.sell = 1500;
				stages[1].stats.health = 250;
				stages[1].stats.attackspeed = 15;
				stages[1].stats.cdr = 10;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Batman's Utility Belt";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 3000;
				stages[2].stats.sell = 2250;
				stages[2].stats.movespeed = 10;
				stages[2].stats.health = 300;				
				stages[2].stats.attackspeed = 30;
				stages[2].stats.cdr = 15;
				stages[2].tables = createItemTooltip(stages[2]);
				
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
				stages[2].stats.attackdamage = 60;
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
				stages[0].stats.sell = 375;
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
				stages[0].stats.health = 150;
				stages[0].stats.healthregen = 5;
				stages[0].stats.attackarmor = 15;
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
				stages[0].stats.sell = 190;
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
				stages[0].stats.sell = 190;
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
				stages[3].stats.sell = 1500;	
				stages[3].stats.health = 300;
				stages[3].stats.healthregen = 20;
				stages[3].stats.willregen = 10;
				stages[3].effect1 = getItemEffect('refundable');
				stages[3].effect2 = getItemEffect('medisys');
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
				stages[0].stats.sell = 190;
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
				stages[0].stats.sell = 375;
				stages[0].stats.health = 150;
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
				stages[0].stats.healthregen = 20;
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
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;
				stages[0].stats.powerarmor = 50;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name =  "Spear of Destiny";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2000;
				stages[1].stats.sell = 1500;
				stages[1].stats.criticalchance = 15;
				stages[1].stats.powerarmor = 50;
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
				stages[0].stats.sell = 375;
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
				stages[1].stats.health = 200;
				stages[1].stats.healthregen = 15;
				stages[1].effect1 = getItemEffect('healthcollector');
				stages[1].tables = createItemTooltip(stages[1]);
			
				
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = 'Ruby of Life';
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2250;
				stages[2].stats.sell = 1690;
				stages[2].stats.health = 475;
				stages[2].stats.healthregen = 30;
				stages[2].effect1 = getItemEffect('healthcollector');
				stages[2].tables = createItemTooltip(stages[2]);

		
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = 'Ruby of Life';
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2750;
				stages[3].stats.sell = 2065;
				stages[3].stats.health = 475;
				stages[3].stats.healthregen = 30;
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
				stages[1].stats.powerarmor = 60;
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
				stages[0].stats.sell = 190;
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
				stages[0].stats.sell = 190;
				stages[0].stats.health = 100;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Hawkman's Harness";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 500;
				stages[1].stats.sell = 375;
				stages[1].stats.health = 200;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Hawkman's Harness";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 750;	
				stages[2].stats.sell = 565;	
				stages[2].stats.health = 300;
				stages[2].tables = createItemTooltip(stages[2]);
				
				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Hawkman's Harness";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 1000;
				stages[3].stats.sell = 1000;
				stages[3].stats.health = 400;
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
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 190;
				stages[0].stats.will = 75;
				stages[0].stats.attackarmor = 5;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Steel's Breastplate";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.will = 200;
				stages[1].stats.attackarmor = 30;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Steel's Breastplate";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 2000;	
				stages[2].stats.sell = 1500;	
				stages[2].stats.will = 200;
				stages[2].stats.attackarmor = 30;
				stages[2].stats.movespeed = 20;
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
				stages[0].stats.buy = 375;
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
				stages[0].stats.health = 125;
				stages[0].stats.powerarmor = 30;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Fragment of Mogo";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 2000;
				stages[1].stats.sell = 1500;
				stages[1].stats.health = 200;
				stages[1].stats.powerarmor = 40;
				stages[1].stats.cdr = 15;
				stages[1].tables = createItemTooltip(stages[1]);
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Fragment of Mogo";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 3000;	
				stages[2].stats.sell = 2250;	
				stages[2].stats.powerarmor = 50;
				stages[2].stats.health = 300;
				stages[2].stats.cdr = 20;
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
		//	The Materioptikon
		//		
		case "The Materioptikon":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "The Materioptikon";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 190;
				stages[0].stats.willregen = 8;
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "The Materioptikon";
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
				stages[2].name = "The Materioptikon";
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
				stages[0].stats.sell = 190;
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
				stages[0].stats.sell = 190;
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
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 190;
				stages[0].stats.powerdamage = 3;
				stages[0].stats.cdr = 5;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Fatality's Energy Lance";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 500;
				stages[1].stats.sell = 375;
				stages[1].stats.powerdamage = 5;
				stages[1].stats.cdr = 10;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Fatality's Energy Lance";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1000;
				stages[2].stats.sell = 750;
				stages[2].stats.powerdamage = 20;
				stages[2].stats.cdr = 15;
				stages[2].tables = createItemTooltip(stages[2]);

				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Fatality's Energy Lance";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 1500;
				stages[3].stats.sell = 1125;
				stages[3].stats.powerdamage = 40;
				stages[3].stats.cdr = 20;
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
				stages[0].stats.sell = 375;
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
				stages[0].stats.sell = 375;
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
				stages[0].stats.sell = 190;
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
				stages[0].stats.sell = 190;
				stages[0].stats.powerdamage = 12;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Radion Shard";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 500;
				stages[1].stats.sell = 375;
				stages[1].stats.powerdamage = 25;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Radion Shard";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1000;
				stages[2].stats.sell = 750;
				stages[2].stats.powerdamage = 50;
				stages[2].tables = createItemTooltip(stages[2]);

				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Radion Shard";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 1500;
				stages[3].stats.sell = 1125;
				stages[3].stats.powerdamage = 75;
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
				stages[0].stats.buy = 250;
				stages[0].stats.sell = 190;
				stages[0].stats.will = 75;
				stages[0].stats.powerdamage = 5;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Neron's Contract";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 750;
				stages[1].stats.sell = 565;
				stages[1].stats.will = 100;
				stages[1].stats.powerdamage = 25;
				stages[1].tables = createItemTooltip(stages[1]);	
				
				stages[2] = new Object();
				stages[2].stats = new Object();
				stages[2].name = "Neron's Contract";
				stages[2].level = 3;
				stages[2].image = createItemImage(stages[2].name, stages[2].level);
				stages[2].stats.buy = 1500;
				stages[2].stats.sell = 1125;
				stages[2].stats.will = 200;
				stages[2].stats.powerdamage = 50;
				stages[2].tables = createItemTooltip(stages[2]);

				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Neron's Contract";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2500;
				stages[3].stats.sell = 1875;
				stages[3].stats.powerdamage = 80;
				stages[3].stats.will = 300;
				stages[3].stats.movespeed = 20;
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
				stages[0].stats.sell = 375;
				stages[0].stats.powerdamage = 20;
				stages[0].stats.cdr = 5;
				stages[0].tables = createItemTooltip(stages[0]);	
								
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = "Two Face's Coin";
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 1000;
				stages[1].stats.sell = 750;
				stages[1].stats.powerdamage = 20;
				stages[1].stats.cdr = 5;
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
				stages[0].stats.powerdamage = 10;
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
				stages[2].stats.powerdamage = 20;
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
				stages[0].stats.sell = 375;	
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
				stages[2].effect1 = getItemEffect('devastating1');
				stages[2].tables = createItemTooltip(stages[2]);

				stages[3] = new Object();
				stages[3].stats = new Object();
				stages[3].name = "Cosmic Staff";
				stages[3].level = 4;
				stages[3].image = createItemImage(stages[3].name, stages[3].level);
				stages[3].stats.buy = 2500;
				stages[3].stats.sell = 1875;
				stages[3].stats.powerdamage = 60;
				stages[3].effect1 = getItemEffect('disintegration');
				stages[3].effect2 = getItemEffect('devastating2');
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
				stages[0].stats.attackarmor = 5;
				stages[0].stats.healthregen = 5;
				stages[0].effect1 = getItemEffect('marauderburst1');
				stages[0].effect2 = getItemEffect('marauderedge');
				stages[0].tables = createItemTooltip(stages[0]);	
				
				stages[1] = new Object();
				stages[1].stats = new Object();
				stages[1].name = 'Marauder Shield';
				stages[1].level = 2;
				stages[1].image = createItemImage(stages[1].name, stages[1].level);
				stages[1].stats.buy = 750;
				stages[1].stats.sell = 565;
				stages[1].stats.health = 100;
				stages[1].stats.healthregen = 10;
				stages[1].stats.attackarmor = 10;
				stages[1].effect1 = getItemEffect('marauderburst3');
				stages[1].effect2 = getItemEffect('marauderedge');
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
				stages[1].effect1 = getItemEffect('marauderburst3');
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
				stages[2].effect1 = getItemEffect('marauderburst4');
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
				stages[0].stats.health = 150;
				stages[0].stats.attackdamage = 15;
				stages[0].effect1 = getItemEffect('attacksyphon');
				stages[0].tables = createItemTooltip(stages[0]);	
				return stages;
				
		case "Speed Force":
						
				stages[0] = new Object();
				stages[0].stats = new Object();
				stages[0].name = "Speed Force";
				stages[0].level = 1;
				stages[0].image = createItemImage(stages[0].name, stages[0].level);
				stages[0].stats.buy = 750;
				stages[0].stats.sell = 565;
				stages[0].stats.movespeed = 20;
				stages[0].tables = createItemTooltip(stages[0]);	
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
//item pictures are not appending in the correct spot
//revisit this
	var table = document.createElement('table');
	var itemnamerow = document.createElement('tr');
	
	var itemnamecell = document.createElement('td');
	itemnamecell.setAttribute('class', "itemname");
	itemnamecell.setAttribute('colspan', "3");
	itemnamecell.setAttribute('align', "center");
	var text = document.createElement('strong');
	
	text.innerHTML = item.name + "[" + item.level + "]";
	itemnamecell.appendChild(text);
	itemnamerow.appendChild(itemnamecell);
	table.appendChild(itemnamerow);
	
	var buyrow = document.createElement('tr');
	
	var imagecell = document.createElement('td');
	imagecell.appendChild(item.image);
	imagecell.setAttribute('rowspan', "2");
	
	
	
	var buycell = document.createElement('td');
	buycell.setAttribute('style', "color:#CCCC52");
	buycell.innerHTML = item.stats.buy;
	var buylabelcell = document.createElement('td');
	
	buylabelcell.innerHTML = "Buy Price";
	
	buyrow.appendChild(imagecell);
	buyrow.appendChild(buycell);
	buyrow.appendChild(buylabelcell);
	
	var sellrow = document.createElement('tr');
	var sellcell = document.createElement('td');
	sellcell.setAttribute('style', "color:#CCCC52");
	if (item.stats['sell'] != undefined) { sellcell.innerHTML = item.stats.sell; }
	var selllabelcell = document.createElement('td');
	selllabelcell.innerHTML = "Sell Price"
		
	sellrow.appendChild(sellcell);
	sellrow.appendChild(selllabelcell);
	table.appendChild(buyrow);
	table.appendChild(sellrow);
	return table;

}
function createItemTooltip(currentitem){
	
//Full Tooltip	
	var header = createItemHeader(currentitem);
	header.setAttribute('style', 'width: 100%')
	var stats = createStatSpan(currentitem.stats, false);
	//stats.setAttribute('class', 'tooltip');
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
		}
	}
	var complete = document.createElement('div');	
	complete.appendChild(header);
	var space = document.createElement('br');
	complete.appendChild(space);
	complete.appendChild(stats);
	complete.setAttribute('style', 'width: 100%');
	
	//return complete;

//Condensed Tooltip
	var row = document.createElement('tr');
	row.setAttribute('id',currentitem.name + currentitem.id);
	var picture = document.createElement('td');
	var img = currentitem.image.cloneNode(false);
	picture.appendChild(img);
	row.appendChild(picture);
	
	var condensedStats = createStatSpan(currentitem.stats, true);
	if (currentitem.effect1 != undefined ){
		var space = document.createElement('br');
		var effect = createItemEffectSpan(currentitem.effect1, true);
		condensedStats.appendChild(effect);
		if (currentitem.effect2 != undefined ){
			var space2 = document.createElement('br');
			var effect2 = createItemEffectSpan(currentitem.effect2, true);
			condensedStats.appendChild(space2);
			condensedStats.appendChild(effect2);
		}
		

	}
	var condensedStatsData = document.createElement('td');
		condensedStatsData.appendChild(condensedStats);
		row.appendChild(condensedStatsData);
		var table = new Object();
		table.full = complete;
		table.condensed = row;
	
		return table;
}
function createStatSpan(stats, isCondensed){
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
	var table = document.createElement('table');
	var row = new Array();
	
	
	if ($("#coast_city").attr('checked')){
		var items = getCCItemList();
	} else if ($("#gotham_heights").attr('checked')) {
		var items = getGHItemList();
	}
	
	function isOdd(num) { 
		var temp = num % 2;
		if (temp == 1){ return true;}
		if (temp == 0){ return false;}
	}

	for (var i = 0; i < items.length; i++){
		row[i] = document.createElement('tr')
		for (var y = 0; y < items[i].length; y++){
			
			var iteminfo = createItem(items[i][y]);
			var isIncluded = filter(iteminfo);
			//var max = iteminfo.length;
			//max -= 1;
			//document.write(items[1][3]);
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
	$("table").delegate("img.shopitem","click", function(event){
			var newitem = createItem(event.target.id);
		 for (var i = 0; i < newitem.length; i++){
				newitem[i].image.setAttribute('id', newitem[i].name + newitem[i].level);
			}
		var newtable = createTable(newitem)
		$("#full").html("");
		$("#condensed").html("");
		$("#condensed").append(newtable);
		});
	return table;
			
			
}
function filter(item){
	var checks = new Array();
	if ($("#attackdamage").is(':checked')){
		if (checkItemStats(item, "attackdamage") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#attackpenetration").is(':checked')){
		if (checkItemStats(item, "attackpenetration") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#attackspeed").is(':checked')){
		if (checkItemStats(item, "attackspeed") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#attacklifesteal").is(':checked')){
		if (checkItemStats(item, "attacklifesteal") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#criticalchance").is(':checked')){
		if (checkItemStats(item, "criticalchance") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#health").is(':checked')){
		if (checkItemStats(item, "health") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#healthregen").is(':checked')){
		if (checkItemStats(item, "healthregen") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#attackarmor").is(':checked')){
		if (checkItemStats(item, "attackarmor") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#powerarmor").is(':checked')){
		if (checkItemStats(item, "powerarmor") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#resilience").is(':checked')){
		if (checkItemStats(item, "resilience") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}	
	
	if ($("#powerdamage").is(':checked')){
		if (checkItemStats(item, "powerdamage") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#powerpenetration").is(':checked')){
		if (checkItemStats(item, "powerpenetration") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#powerlifesteal").is(':checked')){
		if (checkItemStats(item, "powerlifesteal") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#will").is(':checked')){
		if (checkItemStats(item, "will") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#willregen").is(':checked')){
		if (checkItemStats(item, "willregen") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#movespeed").is(':checked')){
		if (checkItemStats(item, "movespeed") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	
	if ($("#cooldown").is(':checked')){
		if (checkItemStats(item, "cdr") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	if ($("#credits").is(':checked')){
		if (checkItemStats(item, "credits") == false){
		checks.push(false);
		}else{
		checks.push(true);
		}
	}
	var isIncluded = true;
	if (checks != undefined){
		for (var i = 0; i < checks.length; i++)
		{
			if (checks[i] == false){
				isIncluded = false;
			}
		}
	}
	return isIncluded;
}

function checkItemStats(item, statname){
	var match = false;
	for (var i = 0; i < item.length; i++){
		if(item[i].stats[statname] != undefined){
			match = true;
		}
		
		//effect check
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
items[5] = [	"Marauder Ring", 			"The Materioptikon", 	"Gorilla Grodd's Helmet", 	"The Logoz", 
				"Two Face's Coin", 			"Blue Scarab", 			"Cosmic Staff", 			"blank", 
				"Atlantean Royal Seal", 	"Eclipso's Diamond", 	"blank"
				];
				
items[6] = [	"Health Pack", 				"Will Pack",			"Speed Force",				"blank",
				"blank",					"blank",				"blank",					"blank",
				"blank",					"blank",				"blank"
				];

return items;
}

function getGHItemList(){
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
			
items[4] = [	"Nil Ring", 				"The Materioptikon", 	"Gorilla Grodd's Helmet", 	"The Logoz", 
				"Fatality's Energy Lance", 	"Eye of Ekron", 		"Pandora's Box", 			"Psi-Scimitar", 
				"Abin Sur's Lantern", 		"The Book of Eternity", "The Starheart"
				];
				
items[5] = [	"Qward Gambit", 			"Radion Shard", 		"Neron's Contract",  		"blank",			
				"Two Face's Coin", 			"Blue Scarab", 			"Cosmic Staff", 			"blank", 
				"Atlantean Royal Seal", 	"Eclipso's Diamond", 	"blank"
				];
				
items[6] = [	"Health Pack", 				"Will Pack",			"Speed Force",				"blank",
				"blank",					"blank",				"blank",					"blank",
				"blank",					"blank",				"blank"
				];

return items;
}

function createItemEffectSpan(effect, isCondensed){
		
		var name = document.createElement('strong');
		name.innerHTML = effect.name;
		name.setAttribute('style', "color:#CC00FF");
		
		line = document.createElement('span');
		line.appendChild(name);
		if (isCondensed == false){
		line.innerHTML += ":  " + effect.desc;
		line.setAttribute('style', "color:#FFFFFF");
		}
		return line;
		
	}	

function getItemEffect(string){
	var effect = new Object();
	var text = document.createElement('p');
	switch(string){
	
		case 'willbattery':
			effect.name = "Will Battery";
			effect.desc = "Gain 4 Max Will whenever you use a skill that costs will (3 second Cooldown). Bonus caps at +500 bonus Will.";
			effect.tags = ["will"];
			break;
		case 'willforce':
			effect.name = "Will Force";
			effect.desc = "Grants Power Damage equal to 3% of your Max Will.";
			effect.tags = ["powerdamage"];
			break;
		case 'marauderedge':
			effect.name = "Marauder Edge";
			effect.desc = "+10 Basic Attack Damage to Creatures (Bypasses Armor)";
			break;
		
		case 'marauderburst1':
			effect.name = "Marauder Burst 1";
			effect.desc = "+ 10% Damage to Creatures";
			break;
		
		case 'marauderburst2':
			effect.name = "Marauder Burst 2";
			effect.desc = "+ 15% Damage to Creatures";
			break;
		
		case 'marauderburst3':
			effect.name = "Marauder Burst 3";
			effect.desc = "+ 20% Damage to Creatures";
			break;
		
		case 'marauderburst4':
			effect.name = "Marauder Burst 4";
			effect.desc = "+ 25% Damage to Creatures";
			break;
		
		case 'deadly':
			effect.name = "Deadly";
			effect.desc = "+ 50% Critical Damage";
			break;
		
		case 'wounding':
			effect.name = "Wounding";
			effect.desc = " Targets hit by your Basic Attacks have their healing and regeneration reduced by 50% for 1.5 seconds";
			break;
		
		case 'piercing1':
			effect.name = "Piercing 1";
			effect.desc = "+ 10 Attack Penetration";
			effect.tags = ["attackpenetration"];
			break;

		case 'piercing2':
			effect.name = "Piercing 2";
			effect.desc = "+ 15 Attack Penetration";
			effect.tags = ["attackpenetration"];
			break;

		case 'desperatespeed':
			effect.name = "Desperate Speed";
			effect.desc = "Falling below 50% health gain 20% Attack Speed and 10 Movement Speed until you do not take or deal damage for 5 seconds";
			effect.tags = ["movespeed", "attackspeed"];
			break;

		case 'powerburst':
			effect.name = "Power Burst";
			effect.desc = "Gain 50 Power Damage for 3 seconds every 5th Basic Attack.";
			effect.tags = ["powerdamage"];
			break;

		case 'attackharvest':
			effect.name = "Attack Harvest";
			effect.desc = "Gain 2 Attack Damage each minute and with each Champion Kill or Assist (max 60 Attack Damage).";
			effect.tags = ["attackdamage"];
			break;

		case 'attackharrier':
			effect.name = "Attack Harrier";
			effect.desc = "Basic Attacks slow your target's Move Speed by 10% for 1.5 seconds (7% slow for Ranged Basic Attacks). Max 3 stacks.";
			break;
			
		case 'shockwave1':
			effect.name = "Shockwave 1";
			effect.desc = "Your Basic Attacks explode, dealing 10% of your Total Attack Damage to other enemies nearby.";
			break;
			
		case 'shockwave2':
			effect.name = "Shockwave 2";
			effect.desc = "Your Basic Attacks explode, dealing 5 damage + 30% of your Total Attack Damage to other enemies nearby.";
			break;
			
		case 'shockwave3':
			effect.name = "Shockwave 3";
			effect.desc = "Your Basic Attacks explode, dealing 10 damage + 50% of your Total Attack Damage to other enemies nearby.";
			break;
		
		case 'attackdamagecollector':
			effect.name = "Attack Damage Collector";
			effect.desc = "+1 Attack Damage and 0.2% Attack Lifesteal when you collect a coin (max 30 stacks, lose half on death).";
			effect.tags = ["attackdamage", "attacklifesteal"];
			break;
			
		case 'razor1':
			effect.name = "Razor 1";
			effect.desc = "+15% Attack Penetration";
			effect.tags = ["attackpenetration"];
			break;
			
		case 'razor2':
			effect.name = "Razor 2";
			effect.desc = "+35% Attack Penetration";
			effect.tags = ["attackpenetration"];
			break;
			
		case 'atlantisaura':
			effect.name = "Atlantis Aura";
			effect.desc = "+15% Attack Speed and +10% Attack Lifesteal for all nearby allies.";
			effect.tags = ["attackspeed", "attacklifesteal"];
			break;
			
		case 'refundable':
			effect.name = "Refundable";
			effect.desc = "You can sell this Artifact back for full value.";
			break;
			
		case 'kineticarmor':
			effect.name = "Kinetic Armor";
			effect.desc = "Your Basic Attacks steal 5 Attack Armor for 5 seconds (max 5 stacks).";
			effect.tags = ["attackarmor", "attackpenetration"];
			break;
						
		case 'desperatestrength':
			effect.name = "Desperate Strength";
			effect.desc = "Gain +1 Attack Damage for every 2% Health you are missing.";
			effect.tags = ["attackdamage"];
			break;
						
		case 'responseshield':
			effect.name = "Response Shield";
			effect.desc = "Gain a shield that blocks 200 damage for 5 seconds when you fall below 30% Health.";
			break;
						
		case 'desperateendurance':
			effect.name = "Desperate Endurance";
			effect.desc = "Falling below 30% health, gain 10% Attack and Power Lifesteal until you do not take or deal damage for 5 seconds.";
			effect.tags = ["attacklifesteal", "powerlifesteal"];
			break;
						
		case 'forceofwill':
			effect.name = "Force of Will";
			effect.desc = "Grants Attack Damage equal to 2% of your Max Will.";
			effect.tags = ["attackdamage"];
			break;
						
		case 'slayer':
			effect.name = "Slayer";
			effect.desc = "Your Basic Attacks deal 5% of you target's current Health as bonus Power Damage.";
			break;
						
		case 'oaaura':
			effect.name = "Oa Aura";
			effect.desc = "-15 Power Armor for all nearby enemies.";
			effect.tags = ["powerpenetration"];
			break;
						
		case 'investment':
			effect.name = "Investment (Stacking)";
			effect.desc = "Gain 5 gold every 10 seconds";
			effect.tags = ["credits"];
			break;		
			
		case 'refundable':
			effect.name = "Refundable";
			effect.desc = "You can sell this Artifact back for full value";
			break;
			
		case 'medisys':
			effect.name = "Medisys";
			effect.desc = "On leveling up, regain 150 Health and Will over 10 seconds.";
			effect.tags = ["healthregen", "willregen"];
			break;
						
		case 'armorcollector':
			effect.name = "Armor Collector";
			effect.desc = "+1 Attack and Power Armor when you collect a coin (max 30 Attack and Power Armor, lose half on death).";
			effect.tags = ["attackarmor", "powerarmor"];
			break;
						
		case 'healthharvest':
			effect.name = "Health Harvest";
			effect.desc = "Gain 15 Health each minute and with each Champion Kill or Assist (max 450 Health)."
			effect.tags = ["health"];
			break;
					
		case 'healthbalance':
			effect.name = "Health Balance";
			effect.desc = "Gain +1% Health Regen per 1% of Health you are missing.";
			effect.tags = ["healthregen"];
			break;
							
		case 'enforcement':
			effect.name = "Enforcement";
			effect.desc = "Gain 2% of your Max Health as additional Attack Damage.";
			effect.tags = ["health"];
			break;
						
		case 'healthcollector':
			effect.name = "Health Collector";
			effect.desc = "+7.5 Health and +1.5 Health Regen when you collect a coin (max 225 Health, 45 Health Regen, lose half on death).";
			effect.tags = ["health", "healthregen"];
			break;
						
		case 'skillblock':
			effect.name = "Skill Block";
			effect.desc = "Grants a Skill Shield that prevents the damage and effects of the next enemy skill. This effect has a 30 second cooldown.";
			break;
						
		case 'olympusaura':
			effect.name = "Olympus Aura";
			effect.desc = "+15 Attack Armor, +15 Power Armor, and +10 Health Regen per 10s for all nearby allies.";
			effect.tags = ["attackarmor", "powerarmor", "healthregen"];
			break;
						
		case 'dampeningaura':
			effect.name = "Dampening Aura";
			effect.desc = "-20% Attack Speed for all nearby enemies.";
			break;
						
		case 'mirrordefense1':
			effect.name = "Mirror Defense";
			effect.desc = "+10% Attack Reflect";
			break;
			
		case 'mirrordefense2':
			effect.name = "Mirror Defense";
			effect.desc = "+20% Attack Reflect";
			break;
			
		case 'mirrordefense3':
			effect.name = "Mirror Defense";
			effect.desc = "+30% Attack Reflect";
			break;
			
		case 'vitality':
			effect.name = "Vitality";
			effect.desc = "+20% Healing Received";
			break;
			
		case 'willbalance':
			effect.name = "Will Balance";
			effect.desc = "Gain +1% Will Regen per 1% of Will you are missing";
			effect.tags = ["willregen"];
			break;
			
		case 'powerdamagecollector':
			effect.name = "Power Damage Collector";
			effect.desc = "+1.5 Power Damage when you collect a coin (max 45 Power Damage, lose half on death).";
			effect.tags = ["powerdamage"];
			break;
			
		case 'willrestore':
			effect.name = "Will Restore";
			effect.desc = "Restores 8 Will when you collect a coin.";
			effect.tags = ["willregen"];
			break;
			
		case 'shrapnel':
			effect.name = "Shrapnel";
			effect.desc = "After skill use, your next Basic Attack damages enemies behind your target equal to 25 + 50% of Power Damage (2s cooldown).";
			break;
			
			
		case 'skilledattack1':
			effect.name = "Skilled Attack 1";
			effect.desc = "Placeholder";
			break;
			
		case 'skilledattack2':
			effect.name = "Skilled Attack 2";
			effect.desc = "After skill use, your next Basic Attack deals additional Power Damage equal to 50 + 75% of Power Damage(2s cooldown)";
			break;
			
		case 'arcane1':
			effect.name = "Arcane 1";
			effect.desc = "+15% Power Penetration";
			effect.tags = ["powerpenetration"];
			break;
			
		case 'arcane2':
			effect.name = "Arcane 2";
			effect.desc = "+35% Power Penetration";
			effect.tags = ["powerpenetration"];
			break;
		
		case 'powerfeedback':
			effect.name = "Power Feedback";
			effect.desc = "+30% Power Damage.";
			effect.tags = ["powerdamage"];
			break;
		
		case 'qwardaura':
			effect.name = "Qward Aura";
			effect.desc = "+20 Power Damage and +10% Power Lifesteal for all nearby allies.";
			effect.tags = ["powerdamage", "powerlifesteal"];
			break;
		
		case 'powerharvest':
			effect.name = "Power Harvest";
			effect.desc = "Gain 3 Power Damage each minute with each Champion Kill or Assist (max 90 Power Damage)";
			effect.tags = ["powerdamage"];
			break;
		
		case 'chargedarmor':
			effect.name = "Charged Armor";
			effect.desc = "Your Basic Attacks steal 5 Power Armor for 5 seconds(max 5 stacks)";
			effect.tags = ["powerpenetration", "powerarmor"];
			break;
		
		case 'chargedattack':
			effect.name = "Charged Attack";
			effect.desc = "Your Basic Attacks deal bonus Power Damage equal to 10 + 10% of your Power Damage.";
			break;
		
		case 'disintegration':
			effect.name = "Disintegration";
			effect.desc = "Dealing damage from skills applies an effect dealing 2% of the target's current Health per second for 3 seconds";
			break;
			
		case 'devastating1':
			effect.name = "Devastating 1";
			effect.desc = "+10 Power Penetration";
			effect.tags = ["powerpenetration"];
			break;
			
		case 'devastating2':
			effect.name = "Devastating 2";
			effect.desc = "+15 Power Penetration";
			effect.tags = ["powerpenetration"];
			break;
			
		case 'skillharrier':
			effect.name = "Skill Harrier";
			effect.desc = "Targets damaged by your skills lose 20% Move Speed for 1.5 seconds";
			break;
			
		case 'attacksyphon':
			effect.name = "Attack Syphon";
			effect.desc = "Autoattacks heal you for 5 health.";
			effect.tags = ["healthregen"];
			break;
		case 'willpack':
			effect.name = "Will Pack";
			effect.desc = "Restores 150 Will over 15 seconds.";
			effect.tags = ["willregen"];
			break;
		case 'healthpack':
			effect.name = "Health Pack";
			effect.desc = "Restores 150 Health over 15 seconds.";
			effect.tags = ["healthregen"];
			break;
			
			
	}
	return effect;
}
function createTable(item){
var table = document.createElement('table');
table.setAttribute('id', "Item Steps Container");
//table.setAttribute('style', 'border: 1px solid #FFFFFF');
table.setAttribute('valign', "top");
var len = item.length;

var itemname = document.createElement('h3')
itemname.setAttribute('id', 'itemname');
itemname.innerHTML = item[0].name;
itemname.setAttribute('style', 'color:#1EFDFF; text-align: center');
var titletr = document.createElement('tr')
var titletd = document.createElement('td')
titletd.setAttribute('colspan', "2");
titletd.appendChild(itemname);
titletr.appendChild(titletd);


table.appendChild(titletr);


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
	
	$("table").delegate("tr.condensedtip", "hover", function(event){
		var current = event.target;
		while ($(current).attr('class') != "condensedtip"){
		current = $(current).parent();
		}

		var string = $(current).attr('id');
		
		//document.write(string);
		var len = string.length;
		var level = string.substr(len-1, len);
		level = level - 1;
		string = string.substr(0, len-1);
		var newitem = createItem(string);
		$("#itemname").html(newitem[0].name + "[" + (level + 1) + "]"); 
		$("#full").html("");
		$("#full").append(newitem[level].tables.full);

		
  });
  table.setAttribute('style', 'width: 100%')
return table;
}

