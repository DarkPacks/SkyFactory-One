/*
 * This file is used to register world presets. Topography searches for all scripts ending with Presets.js and executes them.
 */

//Registers world presets
registerPreset("void", "Void Worlds", "images/Basic_Tree", "Overworld/Nether/End as void dimensions with starting structures")//Registers preset
.registerDimension("overworld", "dimensions/overworld_void")//Registers script "overworld_void" to be used for generating dimension "overworld"
.registerDimension("the_nether", "dimensions/nether_void")//Registers script "nether_void" to be used for generating dimension "nether"
.registerDimension("the_end", "dimensions/end_void")//Registers script "end_void" to be used for generating dimension "end"
.registerDimension("topography:infinite_dark", "dimensions/infinite_dark")
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {//Registers a Forge event handler of type "BiomeLoadingEvent" 
	accept: function(event) {
		if (!Util.Biomes.test(event.getName(), BiomeDictionary.Type.END)) {
			Util.Features.clearFeatures(event);//Clears all feature generators
			
			if (Util.Biomes.test(event.getName(), BiomeDictionary.Type.OVERWORLD)) {
				
				/*
				* Adds a flower generator with all 1 tall flowers for the purpose of making bonemeal on grass function in the overworld
				*/
				Util.Features.addFeature(event, GenerationStage.Decoration.VEGETAL_DECORATION, function() {
				
					var BlockClusterFeatureConfig = Java.type("net.minecraft.world.gen.feature.BlockClusterFeatureConfig");
					var WeightedBlockStateProvider = Java.type("net.minecraft.world.gen.blockstateprovider.WeightedBlockStateProvider");
					var SimpleBlockPlacer = Java.type("net.minecraft.world.gen.blockplacer.SimpleBlockPlacer");
					
					/*
					* Flowers and their weights
					*/
					var flowers = {
						"minecraft:poppy": 10,
						"minecraft:dandelion": 10,
						"minecraft:blue_orchid": 10,
						"minecraft:allium": 10,
						"minecraft:azure_bluet": 10,
						"minecraft:red_tulip": 10,
						"minecraft:red_tulip": 10,
						"minecraft:white_tulip": 10,
						"minecraft:pink_tulip": 10,
						"minecraft:oxeye_daisy": 10,
						"minecraft:cornflower": 10,
						"minecraft:wither_rose": 10,
						"minecraft:lily_of_the_valley": 10
					}
					
					var blockProvider = new WeightedBlockStateProvider();
						
					for (var key in flowers) {
						blockProvider.func_227407_a_(Util.Blocks.getState(key), flowers[key]);
					}
					
					return Util.Features.buildConfiguredFeature("minecraft:flower", new BlockClusterFeatureConfig.Builder(blockProvider, SimpleBlockPlacer.field_236447_c_).func_227315_a_(0).func_227322_d_());
				});
			}
		}
		//Util.Features.clearStructures(event);//Clears all structure generators

        //event, structure resource location
        Util.Features.removeStructure(event, "buried_treasure");
        Util.Features.removeStructure(event, "desert_pyramid");
        //Util.Features.removeStructure(event, "endcity");
        //Util.Features.removeStructure(event, "bastion_remnant");
        //Util.Features.removeStructure(event, "fortress");
        Util.Features.removeStructure(event, "fossil");
        Util.Features.removeStructure(event, "igloo");
        Util.Features.removeStructure(event, "jungle_pyramid");
        Util.Features.removeStructure(event, "mansion");
        Util.Features.removeStructure(event, "mineshaft");
        Util.Features.removeStructure(event, "monument");
        //Util.Features.removeStructure(event, "nether_fossil");
        Util.Features.removeStructure(event, "ocean_ruin");
        Util.Features.removeStructure(event, "pillager_outpost");
        Util.Features.removeStructure(event, "ruined_portal");
        Util.Features.removeStructure(event, "shipwreck");
        Util.Features.removeStructure(event, "stronghold");
        Util.Features.removeStructure(event, "swamp_hut");
        Util.Features.removeStructure(event, "underwater_ruin");
        Util.Features.removeStructure(event, "village");
        Util.Features.removeStructure(event, "woodland_mansion");
        Util.Features.removeFeature(event, "void_start_platform");

        if (Util.Biomes.test(event.getName(), BiomeDictionary.Type.OVERWORLD) || event.getName().toString().equals("topography:infinite_dark")) {
			var EntityClassification = Java.type("net.minecraft.entity.EntityClassification");
			var Spawners = Java.type("net.minecraft.world.biome.MobSpawnInfo.Spawners");
			
			event.getSpawns().getSpawner(EntityClassification.WATER_AMBIENT).clear();
			event.getSpawns().getSpawner(EntityClassification.WATER_CREATURE).clear();
			event.getSpawns().getSpawner(EntityClassification.CREATURE).clear();
			event.getSpawns().getSpawner(EntityClassification.AMBIENT).clear();
			event.getSpawns().getSpawner(EntityClassification.MONSTER).clear();
			
			//Water ambients weight, min group, max group
			event.getSpawns().func_242575_a(EntityClassification.WATER_CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:squid")), 100, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.WATER_AMBIENT, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:salmon")), 100, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.WATER_AMBIENT, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:cod")), 100, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.WATER_AMBIENT, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:tropical_fish")), 100, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.WATER_CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:dolphin")), 70, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.WATER_AMBIENT, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:pufferfish")), 15, 1, 4));
			
			//Land ambients
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:sheep")), 200, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:pig")), 200, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:cow")), 200, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:chicken")), 200, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:horse")), 40, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:donkey")), 20, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:polar_bear")), 15, 1, 4));
			//event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:bee")), 10, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:cat")), 20, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:fox")), 20, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:llama")), 35, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:mule")), 20, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:mooshroom")), 60, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:ocelot")), 20, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:panda")), 20, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:parrot")), 20, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:rabbit")), 20, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:skeleton_horse")), 15, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:turtle")), 15, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:wolf")), 25, 1, 4));
			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:zombie_horse")), 15, 1, 4));
			
			//Air ambients
			event.getSpawns().func_242575_a(EntityClassification.AMBIENT, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:bat")), 65, 1, 4));
			
			//Hostiles
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:cave_spider")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:creeper")), 200, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:drowned")), 100, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:elder_guardian")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:enderman")), 150, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:evoker")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:guardian")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:husk")), 80, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:illusioner")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:phantom")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:pillager")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:ravager")), 10, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:silverfish")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:skeleton")), 200, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:slime")), 100, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:spider")), 200, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:stray")), 80, 1, 3));
			//event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:vindicator")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:witch")), 40, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:zombie")), 200, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("minecraft:zombie_villager")), 50, 1, 3));
			

			//tconstruct Entities
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("tconstruct:earth_slime")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("tconstruct:terracube")), 3, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("tconstruct:sky_slime")), 3, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("tconstruct:ender_slime")), 3, 1, 3));

			//Forcecraft Entities
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("forcecraft:red_chu_chu")), 40, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("forcecraft:green_chu_chu")), 40, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("forcecraft:blue_chu_chu")), 40, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("forcecraft:gold_chu_chu")), 40, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("forcecraft:creeper_tot")), 10, 1, 3));
			event.getSpawns().func_242575_a(EntityClassification.MONSTER, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("forcecraft:ender_tot")), 10, 1, 3));

			event.getSpawns().func_242575_a(EntityClassification.CREATURE, new Spawners(ForgeRegistries.ENTITIES.getValue(new ResourceLocation("forcecraft:fairy")), 35, 1, 2));

			/*
			Entities which aren't added:
			villager
			wandering_trader
			vex
			*/
		}
		if (event.getName().toString().equals("topography:infinite_dark")) {
			////           
			////
			//Features
			////
			////
			Util.Features.removeFeature(event, "caves");
			Util.Features.removeFeature(event, "ravines");
			
			////           
			////
			//Vanilla Ore
			////
			////
			//Coal Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:coal_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 16, 14, 50, 60, true, 2);
			});          
			//Iron Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:iron_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 18, 12, 35, 45, true, 2);
			});                      
			//Gold Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:gold_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 10, 5, 5, 15, true, 4);
			});
			//Lapis Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:lapis_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 12, 5, 15, 25, true, 4);
			});
			//Diamond Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:diamond_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 10, 3, 1, 10, true, 4);
			});
			//Redstone Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:redstone_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 10, 6, 15, 25, true, 3);
			});
			//Emerald Ore that's better than TP
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("minecraft:emerald_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 8, 3, 1, 10, true, 4);
			});

			////
			////
			//Modded Ores
			////
			////

			//Dimensional Shard
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("rftoolsbase:dimensionalshard_overworld"), Util.Features.Ores.BASE_STONE_OVERWORLD, 16, 3, 30, 50, true, 4);
			});
			//prosperity_ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("mysticalagriculture:prosperity_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 8, 3, 50, 60, true, 4);
			});
			//inferium_ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("mysticalagriculture:inferium_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 14, 10, 20, 30, true, 2);
			});
        	//power_ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("forcecraft:power_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 14, 10, 5, 15, true, 2);
			});

			////
			////
			//Thermal Ores
			////
			////
	
			//thermal:apatite_ore Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("thermal:apatite_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 14, 8, 15, 25, true, 4);
			});
			//thermal:cinnabar_ore Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("thermal:cinnabar_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 10, 8, 1, 10, true, 4);
			});
			//thermal:niter_ore Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("thermal:niter_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 8, 8, 40, 50, true, 4);
			});
			//thermal:sulfur_ore Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("thermal:sulfur_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 8, 8, 45, 55, true, 4);
			});
			//thermal:copper_ore Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("thermal:copper_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 14, 10, 50, 60, true, 2);
			});
			//thermal:tin_ore Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("thermal:tin_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 10, 9, 35, 45, true, 2);
			});
			//thermal:lead_ore Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("thermal:lead_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 8, 8, 20, 30, true, 3);
			});
			//thermal:silver_ore Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("thermal:silver_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 8, 5, 5, 15, true, 4);
			});
			//thermal:nickel_ore Ore
			Util.Features.Ores.addOre(event, function() {
				//block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
				return Util.Features.Ores.buildVerticalOre(Util.Blocks.getState("thermal:nickel_ore"), Util.Features.Ores.BASE_STONE_OVERWORLD, 12, 10, 40, 50, true, 3);
			});
			
			//Builders Plus	Basalt		
			Util.Features.Ores.addOre(event, function() {
			  return Util.Features.Ores.buildOreForOverworldStone(Util.Blocks.getState("buildersplus:basalt"), 55, 4, 75, true);
			});
			//Builders Plus Gabbro
			Util.Features.Ores.addOre(event, function() {
			  return Util.Features.Ores.buildOreForOverworldStone(Util.Blocks.getState("buildersplus:gabbro"), 55, 4, 75, true);
			});
			//Builders Plus Dacite
			Util.Features.Ores.addOre(event, function() {
			  return Util.Features.Ores.buildOreForOverworldStone(Util.Blocks.getState("buildersplus:dacite"), 55, 4, 75, true);
			});


			////
			////
			//Holes
			////
			////

            var BlockStateMatchRuleTest = Java.type("net.minecraft.world.gen.feature.template.BlockStateMatchRuleTest");

            Util.Features.Ores.addOre(event, function() {
                //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
                return Util.Features.Ores.buildOre(Util.Blocks.getState("minecraft:air"), new BlockStateMatchRuleTest(Util.Blocks.getState("minecraft:cobblestone")), 20, 16, 78, 81, true, 2);
            });




		}
	}
}).class)
.registerEventHandler("CheckSpawn", Java.extend(Consumer, {//Registers a Forge event handler of type "CheckSpawn" 
	accept: function(event) {
		var Result = Java.type("net.minecraftforge.eventbus.api.Event.Result");
		
		//Restrict all water creatures to spawning in 2 deep full water blocks
		var restrictToTwoBlocksWater = Java.to(
			[
				"minecraft:dolphin",
				"minecraft:squid",
				"minecraft:salmon",
				"minecraft:cod",
				"minecraft:tropical_fish",
				"minecraft:pufferfish"
			],
			"java.lang.String[]"
		);
		
		if (Util.Worlds.test(event.getWorld(), "minecraft:overworld")) {
			for (i = 0; i < restrictToTwoBlocksWater.length; i++) {
				if (Util.Entities.test(event.getEntityLiving(), restrictToTwoBlocksWater[i])) {
					//Allow squid in bubble columns
					if (Util.Worlds.getState(event.getWorld(), event.getX(), event.getY(), event.getZ()) == Util.Blocks.getState("minecraft:bubble_column") && Util.Entities.test(event.getEntityLiving(), "minecraft:squid")) {
						return;
					}
					//Block spawns which aren't in water
					if (Util.Worlds.getState(event.getWorld(), event.getX(), event.getY(), event.getZ()) != Util.Blocks.getState("minecraft:water")) {
						event.setResult(Result.DENY);
						return;
					}
					//Block spawns which do not have water either above or blow
					if (Util.Worlds.getState(event.getWorld(), event.getX(), event.getY() - 1, event.getZ()) != Util.Blocks.getState("minecraft:water")
							&& Util.Worlds.getState(event.getWorld(), event.getX(), event.getY() + 1, event.getZ()) != Util.Blocks.getState("minecraft:water")) {
						event.setResult(Result.DENY);
						return;
					}
					return;
				}
			}
		}
	}
}).class)
.registerEventHandler("FogColors", EventSide.CLIENT, Java.extend(Consumer, {
	accept: function(event) {
		if (Util.Worlds.test(Util.Client.getWorld(), "topography:infinite_dark")) {
			event.setRed(0);
			event.setGreen(0);
			event.setBlue(0);
		}
	}
}).class)
.registerEventHandler("SpecialSpawn", EventSide.SERVER, Java.extend(Consumer, {
	accept: function(event) {
		var Operation = Java.type("net.minecraft.entity.ai.attributes.AttributeModifier.Operation");
		var PlayerEntity = Java.type("net.minecraft.entity.player.PlayerEntity");
		
		if (Util.Worlds.test(event.getWorld(), "topography:infinite_dark") && !(event.getEntity() instanceof PlayerEntity)) {
			Util.Entities.modifyAttribute(event.getEntity(), "minecraft:generic.attack_damage", "dark_power", 1.0, Operation.MULTIPLY_TOTAL);
			Util.Entities.modifyAttribute(event.getEntity(), "minecraft:generic.max_health", "dark_resilience", 1.0, Operation.MULTIPLY_TOTAL);
			Util.Entities.healToMax(event.getEntityLiving());
		}
	}
}).class)
.registerEventHandler("LivingUpdateEvent", EventSide.SERVER, Java.extend(Consumer, {
	accept: function(event) {
		var PlayerEntity = Java.type("net.minecraft.entity.player.PlayerEntity");
		var entity = event.getEntityLiving();
		
		if (Util.Worlds.test(Util.Entities.getWorld(entity), "topography:infinite_dark") && entity instanceof PlayerEntity && !Util.Players.getGamemodeName(entity).equals("CREATIVE") && !Util.Players.getGamemodeName(entity).equals("SPECTATOR")) {
			if (Util.Worlds.getGameTime(Util.Entities.getWorld(entity)) % 20 == 0) {//Only check every 2 seconds
				var light = Util.Entities.getLight(entity);
				
				if (light == 0) {
					Util.Effects.addPotion(entity, "minecraft:slowness", 40, 1, false, false);//entity, effect, duration, amplification, ambient, particles
					Util.Effects.addPotion(entity, "minecraft:weakness", 40, 1, false, false);
					Util.Effects.addPotion(entity, "minecraft:blindness", 40, 0, false, false);
				} else {
					Util.Effects.addPotion(entity, "minecraft:speed", 40, 0, false, false);
					Util.Effects.addPotion(entity, "minecraft:resistance", 40, 0, false, false);
				}
			}
		}
	}
}).class);