(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("ArmPadL"))
            .setTransform(-15.75, -17.3);
        this.addTimedChild(instance1);
    });

    var Graphic2 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Sprite(fromFrame("SkateCuff4"))
            .setTransform(-8.2, -13.4);
        this.addTimedChild(instance1);
    });

    var Graphic3 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("ArmStrapL2"))
            .setTransform(-9.45, -9.25);
        this.addTimedChild(instance1);
    });

    var Graphic4 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("AboveArm1"));
        var instance2 = new Sprite(fromFrame("AboveArm2"));
        var instance3 = new Sprite(fromFrame("AboveArm4"));
        var instance4 = new Sprite(fromFrame("AboveArm6"));
        var instance5 = new Sprite(fromFrame("AboveArm8"));
        var instance6 = new Sprite(fromFrame("AboveArm10"));
        var instance7 = new Sprite(fromFrame("AboveArm12"));
        var instance8 = new Sprite(fromFrame("AboveArm13"));
        var instance9 = new Sprite(fromFrame("AboveArm14"));
        var instance10 = new Sprite(fromFrame("AboveArm16"));
        var instance11 = new Sprite(fromFrame("AboveArm18"));
        var instance12 = new Sprite(fromFrame("AboveArm22"));
        var instance13 = new Sprite(fromFrame("AboveArm24"));
        var instance14 = new Sprite(fromFrame("AboveArm26"));
        var instance15 = new Sprite(fromFrame("AboveArm27"))
            .setTransform(-17.65, 23.8);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -11.4,
                    y: 17.35
                }
            })
            .addTimedChild(instance2, 1, 2, {
                "1": {
                    x: -9.55,
                    y: 8.6
                }
            })
            .addTimedChild(instance3, 3, 2, {
                "3": {
                    x: -9.5,
                    y: 6.4
                }
            })
            .addTimedChild(instance4, 5, 2, {
                "5": {
                    x: -9.35,
                    y: 5.55
                }
            })
            .addTimedChild(instance5, 7, 2, {
                "7": {
                    x: -10.45,
                    y: 14.05
                }
            })
            .addTimedChild(instance6, 9, 2, {
                "9": {
                    x: -17.25,
                    y: 9.2
                }
            })
            .addTimedChild(instance7, 11, 1, {
                "11": {
                    x: -51.05,
                    y: 11.9
                }
            })
            .addTimedChild(instance8, 12, 1, {
                "12": {
                    x: -101.7,
                    y: 13.6
                }
            })
            .addTimedChild(instance9, 13, 2, {
                "13": {
                    x: -122.45,
                    y: -0.65
                }
            })
            .addTimedChild(instance10, 15, 2, {
                "15": {
                    x: -130.2,
                    y: -20.6
                }
            })
            .addTimedChild(instance11, 17, 4, {
                "17": {
                    x: -130.1,
                    y: -23.6
                }
            })
            .addTimedChild(instance12, 21, 2, {
                "21": {
                    x: -119.8,
                    y: -6.95
                }
            })
            .addTimedChild(instance13, 23, 2, {
                "23": {
                    x: -110.5,
                    y: 7.05
                }
            })
            .addTimedChild(instance14, 25, 1, {
                "25": {
                    x: -66.7,
                    y: 12
                }
            })
            .addTimedChild(instance15, 26, 1);
    });

    var Graphic5 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("ApronReg2"));
        var instance2 = new Sprite(fromFrame("ApronReg3"));
        var instance3 = new Sprite(fromFrame("ApronReg5"));
        var instance4 = new Sprite(fromFrame("ApronReg6"));
        var instance5 = new Sprite(fromFrame("ApronReg7"));
        var instance6 = new Sprite(fromFrame("ApronReg9"));
        var instance7 = new Sprite(fromFrame("ApronReg11"));
        var instance8 = new Sprite(fromFrame("ApronReg12"));
        var instance9 = new Sprite(fromFrame("ApronReg13"));
        var instance10 = new Sprite(fromFrame("ApronReg14"));
        var instance11 = new Sprite(fromFrame("ApronReg16"));
        var instance12 = new Sprite(fromFrame("ApronReg17"));
        var instance13 = new Sprite(fromFrame("ApronReg19"));
        var instance14 = new Sprite(fromFrame("ApronReg20"));
        var instance15 = new Sprite(fromFrame("ApronReg21"));
        var instance16 = new Sprite(fromFrame("ApronReg23"));
        var instance17 = new Sprite(fromFrame("ApronReg25"));
        var instance18 = new Sprite(fromFrame("ApronReg26"));
        var instance19 = new Sprite(fromFrame("ApronReg27"));
        var instance20 = new Sprite(fromFrame("ApronReg1"))
            .setTransform(-60, -71.65);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -60,
                    y: -71.65
                }
            })
            .addTimedChild(instance2, 1, 2, {
                "1": {
                    x: -60,
                    y: -71.65
                }
            })
            .addTimedChild(instance3, 3, 1, {
                "3": {
                    x: -60,
                    y: -71.65
                }
            })
            .addTimedChild(instance4, 4, 1, {
                "4": {
                    x: -60,
                    y: -71.65
                }
            })
            .addTimedChild(instance5, 5, 2, {
                "5": {
                    x: -60,
                    y: -71.65
                }
            })
            .addTimedChild(instance6, 7, 2, {
                "7": {
                    x: -60,
                    y: -71.65
                }
            })
            .addTimedChild(instance7, 9, 1, {
                "9": {
                    x: -59.35,
                    y: -71.65
                }
            })
            .addTimedChild(instance8, 10, 1, {
                "10": {
                    x: -59.35,
                    y: -71.65
                }
            })
            .addTimedChild(instance9, 11, 1, {
                "11": {
                    x: -58.3,
                    y: -71.95
                }
            })
            .addTimedChild(instance10, 12, 2, {
                "12": {
                    x: -58.3,
                    y: -71.95
                }
            })
            .addTimedChild(instance11, 14, 1, {
                "14": {
                    x: -58.3,
                    y: -71.95
                }
            })
            .addTimedChild(instance12, 15, 2, {
                "15": {
                    x: -58.3,
                    y: -71.95
                }
            })
            .addTimedChild(instance13, 17, 1, {
                "17": {
                    x: -58.3,
                    y: -71.95
                }
            })
            .addTimedChild(instance14, 18, 1, {
                "18": {
                    x: -58.3,
                    y: -71.95
                }
            })
            .addTimedChild(instance15, 19, 2, {
                "19": {
                    x: -58.3,
                    y: -71.95
                }
            })
            .addTimedChild(instance16, 21, 2, {
                "21": {
                    x: -58.3,
                    y: -71.95
                }
            })
            .addTimedChild(instance17, 23, 1, {
                "23": {
                    x: -59.35,
                    y: -71.65
                }
            })
            .addTimedChild(instance18, 24, 1, {
                "24": {
                    x: -59.35,
                    y: -71.65
                }
            })
            .addTimedChild(instance19, 25, 1, {
                "25": {
                    x: -60,
                    y: -71.65
                }
            })
            .addTimedChild(instance20, 26, 1);
    });

    var Graphic6 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Sprite(fromFrame("LegPadR"))
            .setTransform(-10, -11.5);
        this.addTimedChild(instance1);
    });

    var Graphic7 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 7, loop: false });
        var instance1 = new Sprite(fromFrame("Skate34R2"));
        var instance2 = new Sprite(fromFrame("Skate34R1"));
        var instance3 = new Sprite(fromFrame("Skate34R2"));
        var instance4 = new Sprite(fromFrame("Skate34R1"));
        var instance5 = new Sprite(fromFrame("Skate34R2"));
        var instance6 = new Sprite(fromFrame("Skate34R3"));
        var instance7 = new Sprite(fromFrame("Skate34R1"))
            .setTransform(0, 0.25);
        this.addTimedChild(instance1, 0, 1)
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    y: 0.25
                }
            })
            .addTimedChild(instance3, 2, 1)
            .addTimedChild(instance4, 3, 1, {
                "3": {
                    y: 0.25
                }
            })
            .addTimedChild(instance5, 4, 1)
            .addTimedChild(instance6, 5, 1)
            .addTimedChild(instance7, 6, 1);
    });

    var Graphic8 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Sprite(fromFrame("CuffSm"))
            .setTransform(-12.3, -9.6);
        this.addTimedChild(instance1);
    });

    var Graphic9 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("AboveLeg1"));
        var instance2 = new Sprite(fromFrame("AboveLeg2"));
        var instance3 = new Sprite(fromFrame("AboveLeg4"));
        var instance4 = new Sprite(fromFrame("AboveLeg8"));
        var instance5 = new Sprite(fromFrame("AboveLeg10"));
        var instance6 = new Sprite(fromFrame("AboveLeg12"));
        var instance7 = new Sprite(fromFrame("AboveLeg13"));
        var instance8 = new Sprite(fromFrame("AboveLeg14"));
        var instance9 = new Sprite(fromFrame("AboveLeg16"));
        var instance10 = new Sprite(fromFrame("AboveLeg18"));
        var instance11 = new Sprite(fromFrame("AboveLeg22"));
        var instance12 = new Sprite(fromFrame("AboveLeg24"));
        var instance13 = new Sprite(fromFrame("AboveLeg26"));
        var instance14 = new Sprite(fromFrame("AboveLeg27"))
            .setTransform(-75.85, 98.1);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -105.75,
                    y: 89.15
                }
            })
            .addTimedChild(instance2, 1, 2, {
                "1": {
                    x: -109.2,
                    y: 84.15
                }
            })
            .addTimedChild(instance3, 3, 4, {
                "3": {
                    x: -109.4,
                    y: 83.7
                }
            })
            .addTimedChild(instance4, 7, 2, {
                "7": {
                    x: -108.25,
                    y: 87
                }
            })
            .addTimedChild(instance5, 9, 2, {
                "9": {
                    x: -104.05,
                    y: 91.2
                }
            })
            .addTimedChild(instance6, 11, 1, {
                "11": {
                    x: -98.25,
                    y: 98.75
                }
            })
            .addTimedChild(instance7, 12, 1, {
                "12": {
                    x: -63.7,
                    y: 99.4
                }
            })
            .addTimedChild(instance8, 13, 2, {
                "13": {
                    x: -37.15,
                    y: 101.6
                }
            })
            .addTimedChild(instance9, 15, 2, {
                "15": {
                    x: -36.35,
                    y: 97.05
                }
            })
            .addTimedChild(instance10, 17, 4, {
                "17": {
                    x: -36.05,
                    y: 92.95
                }
            })
            .addTimedChild(instance11, 21, 2, {
                "21": {
                    x: -34.3,
                    y: 102.45
                }
            })
            .addTimedChild(instance12, 23, 2, {
                "23": {
                    x: -34,
                    y: 106.5
                }
            })
            .addTimedChild(instance13, 25, 1, {
                "25": {
                    x: -70.15,
                    y: 103.9
                }
            })
            .addTimedChild(instance14, 26, 1);
    });

    var Graphic10 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("TorsoSkate3"));
        var instance2 = new Sprite(fromFrame("TorsoSkate2"));
        var instance3 = new Sprite(fromFrame("TorsoSkate1"));
        var instance4 = new Sprite(fromFrame("TorsoSkate2"));
        var instance5 = new Sprite(fromFrame("TorsoSkate3"))
            .setTransform(-135.3, -71.65);
        this.addTimedChild(instance1, 0, 9, {
                "0": {
                    x: -135.3,
                    y: -71.65
                }
            })
            .addTimedChild(instance2, 9, 2, {
                "9": {
                    x: -134.85,
                    y: -71.65
                }
            })
            .addTimedChild(instance3, 11, 12, {
                "11": {
                    x: -134.85,
                    y: -71.65
                }
            })
            .addTimedChild(instance4, 23, 2, {
                "23": {
                    x: -134.85,
                    y: -71.65
                }
            })
            .addTimedChild(instance5, 25, 2);
    });

    var Graphic11 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("TieLoop2"));
        var instance2 = new Sprite(fromFrame("TieLoop3"));
        var instance3 = new Sprite(fromFrame("TieLoop1"));
        var instance4 = new Sprite(fromFrame("TieLoop2"));
        var instance5 = new Sprite(fromFrame("TieLoop3"));
        var instance6 = new Sprite(fromFrame("TieLoop1"));
        var instance7 = new Sprite(fromFrame("TieLoop2"));
        var instance8 = new Sprite(fromFrame("TieLoop3"));
        var instance9 = new Sprite(fromFrame("TieLoop1"));
        var instance10 = new Sprite(fromFrame("TieLoop2"));
        var instance11 = new Sprite(fromFrame("TieLoop3"));
        var instance12 = new Sprite(fromFrame("TieLoop1"));
        var instance13 = new Sprite(fromFrame("TieLoop2"));
        var instance14 = new Sprite(fromFrame("TieLoop3"));
        var instance15 = new Sprite(fromFrame("TieLoop1"));
        var instance16 = new Sprite(fromFrame("TieLoop2"));
        var instance17 = new Sprite(fromFrame("TieLoop3"));
        var instance18 = new Sprite(fromFrame("TieLoop1"));
        var instance19 = new Sprite(fromFrame("TieLoop2"));
        var instance20 = new Sprite(fromFrame("TieLoop3"));
        var instance21 = new Sprite(fromFrame("TieLoop1"));
        var instance22 = new Sprite(fromFrame("TieLoop2"));
        var instance23 = new Sprite(fromFrame("TieLoop3"));
        var instance24 = new Sprite(fromFrame("TieLoop1"));
        var instance25 = new Sprite(fromFrame("TieLoop2"));
        var instance26 = new Sprite(fromFrame("TieLoop1"))
            .setTransform(-1, 9.35);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -1.2,
                    y: 10.1
                }
            })
            .addTimedChild(instance2, 1, 1, {
                "1": {
                    x: -1.05,
                    y: 9.65
                }
            })
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    x: -1,
                    y: 9.35
                }
            })
            .addTimedChild(instance4, 3, 1, {
                "3": {
                    x: -1.2,
                    y: 10.1
                }
            })
            .addTimedChild(instance5, 4, 1, {
                "4": {
                    x: -1.05,
                    y: 9.65
                }
            })
            .addTimedChild(instance6, 5, 1, {
                "5": {
                    x: -1,
                    y: 9.35
                }
            })
            .addTimedChild(instance7, 6, 1, {
                "6": {
                    x: -1.2,
                    y: 10.1
                }
            })
            .addTimedChild(instance8, 7, 1, {
                "7": {
                    x: -1.05,
                    y: 9.65
                }
            })
            .addTimedChild(instance9, 8, 1, {
                "8": {
                    x: -1,
                    y: 9.35
                }
            })
            .addTimedChild(instance10, 9, 1, {
                "9": {
                    x: -1.2,
                    y: 10.1
                }
            })
            .addTimedChild(instance11, 10, 1, {
                "10": {
                    x: -1.05,
                    y: 9.65
                }
            })
            .addTimedChild(instance12, 11, 1, {
                "11": {
                    x: -1,
                    y: 9.35
                }
            })
            .addTimedChild(instance13, 12, 1, {
                "12": {
                    x: -1.2,
                    y: 10.1
                }
            })
            .addTimedChild(instance14, 13, 1, {
                "13": {
                    x: -1.05,
                    y: 9.65
                }
            })
            .addTimedChild(instance15, 14, 1, {
                "14": {
                    x: -1,
                    y: 9.35
                }
            })
            .addTimedChild(instance16, 15, 1, {
                "15": {
                    x: -1.2,
                    y: 10.1
                }
            })
            .addTimedChild(instance17, 16, 1, {
                "16": {
                    x: -1.05,
                    y: 9.65
                }
            })
            .addTimedChild(instance18, 17, 1, {
                "17": {
                    x: -1,
                    y: 9.35
                }
            })
            .addTimedChild(instance19, 18, 1, {
                "18": {
                    x: -1.2,
                    y: 10.1
                }
            })
            .addTimedChild(instance20, 19, 1, {
                "19": {
                    x: -1.05,
                    y: 9.65
                }
            })
            .addTimedChild(instance21, 20, 1, {
                "20": {
                    x: -1,
                    y: 9.35
                }
            })
            .addTimedChild(instance22, 21, 1, {
                "21": {
                    x: -1.2,
                    y: 10.1
                }
            })
            .addTimedChild(instance23, 22, 1, {
                "22": {
                    x: -1.05,
                    y: 9.65
                }
            })
            .addTimedChild(instance24, 23, 1, {
                "23": {
                    x: -1,
                    y: 9.35
                }
            })
            .addTimedChild(instance25, 24, 1, {
                "24": {
                    x: -1.2,
                    y: 10.1
                }
            })
            .addTimedChild(instance26, 25, 2);
    });

    var Graphic12 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("CollarFR"));
        this.addTimedChild(instance1);
    });

    var Graphic13 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("PupilL"));
        this.addTimedChild(instance1);
    });

    var Graphic14 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("PupilR"));
        this.addTimedChild(instance1);
    });

    var Graphic15 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("Bitmap 1"))
            .setTransform(-93.25, -61.05);
        this.addTimedChild(instance1);
    });

    var Graphic16 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("StrapL"))
            .setTransform(-12.6, -88.2);
        this.addTimedChild(instance1);
    });

    var Graphic17 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("EyeL1"));
        this.addTimedChild(instance1);
    });

    var Graphic18 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("EyeR1"))
            .setTransform(-0.1);
        this.addTimedChild(instance1);
    });

    var Graphic19 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("GlassesArmL"));
        this.addTimedChild(instance1);
    });

    var Graphic20 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("GlassesMid"));
        this.addTimedChild(instance1);
    });

    var Graphic21 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("Nose"));
        this.addTimedChild(instance1);
    });

    var Graphic22 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("EarL"))
            .setTransform(1.45);
        this.addTimedChild(instance1);
    });

    var Graphic23 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("Hair"))
            .setTransform(129.3, 130.05);
        this.addTimedChild(instance1);
    });

    var Graphic24 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("Mouth3"))
            .setTransform(-1.75, -1.4);
        this.addTimedChild(instance1);
    });

    var Graphic25 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("BrowL1"))
            .setTransform(2.25, -0.1);
        this.addTimedChild(instance1);
    });

    var Graphic26 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("BrowR1"));
        this.addTimedChild(instance1);
    });

    var Graphic27 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("Head1"))
            .setTransform(-0.6);
        this.addTimedChild(instance1);
    });

    var Graphic28 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("StrapR"))
            .setTransform(-7.5, -73.95);
        this.addTimedChild(instance1);
    });

    var Graphic29 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("CollarBK"));
        this.addTimedChild(instance1);
    });

    var Graphic30 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Sprite(fromFrame("ArmStrapR21"))
            .setTransform(-7.7, -8.8);
        this.addTimedChild(instance1);
    });

    var Graphic31 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 26, loop: false });
        var instance1 = new Sprite(fromFrame("SkateCuff3"));
        var instance2 = new Sprite(fromFrame("SkateCuff4"));
        var instance3 = new Sprite(fromFrame("SkateCuff3"));
        var instance4 = new Sprite(fromFrame("SkateCuff5"))
            .setTransform(-8.65, -14.6);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -8.9,
                    y: -17.8
                }
            })
            .addTimedChild(instance2, 1, 8, {
                "1": {
                    x: -8.2,
                    y: -13.4
                }
            })
            .addTimedChild(instance3, 9, 2, {
                "9": {
                    x: -8.9,
                    y: -17.8
                }
            })
            .addTimedChild(instance4, 11, 15);
    });

    var Graphic32 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("ArmBack1"));
        var instance2 = new Sprite(fromFrame("ArmBack2"));
        var instance3 = new Sprite(fromFrame("ArmBack4"));
        var instance4 = new Sprite(fromFrame("ArmBack6"));
        var instance5 = new Sprite(fromFrame("ArmBack8"));
        var instance6 = new Sprite(fromFrame("ArmBack10"));
        var instance7 = new Sprite(fromFrame("ArmBack12"));
        var instance8 = new Sprite(fromFrame("ArmBack13"));
        var instance9 = new Sprite(fromFrame("ArmBack14"));
        var instance10 = new Sprite(fromFrame("ArmBack16"));
        var instance11 = new Sprite(fromFrame("ArmBack18"));
        var instance12 = new Sprite(fromFrame("ArmBack22"));
        var instance13 = new Sprite(fromFrame("ArmBack24"));
        var instance14 = new Sprite(fromFrame("ArmBack26"));
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -103.25,
                    y: 9.75
                }
            })
            .addTimedChild(instance2, 1, 2, {
                "1": {
                    x: -119.45,
                    y: -1.95
                }
            })
            .addTimedChild(instance3, 3, 2, {
                "3": {
                    x: -119.6,
                    y: -3.65
                }
            })
            .addTimedChild(instance4, 5, 2, {
                "5": {
                    x: -119.7,
                    y: -4.2
                }
            })
            .addTimedChild(instance5, 7, 2, {
                "7": {
                    x: -115.6,
                    y: -0.85
                }
            })
            .addTimedChild(instance6, 9, 2, {
                "9": {
                    x: -95.35,
                    y: 7.8
                }
            })
            .addTimedChild(instance7, 11, 1, {
                "11": {
                    x: -9.55,
                    y: 58.15
                }
            })
            .addTimedChild(instance8, 12, 1, {
                "12": {
                    x: 9.4,
                    y: 19.1
                }
            })
            .addTimedChild(instance9, 13, 2, {
                "13": {
                    x: 12.3,
                    y: 11.35
                }
            })
            .addTimedChild(instance10, 15, 2, {
                "15": {
                    x: 9.65,
                    y: 3.5
                }
            })
            .addTimedChild(instance11, 17, 4, {
                "17": {
                    x: 9.7,
                    y: 1.35
                }
            })
            .addTimedChild(instance12, 21, 2, {
                "21": {
                    x: 11.6,
                    y: 11.3
                }
            })
            .addTimedChild(instance13, 23, 2, {
                "23": {
                    x: 11.7,
                    y: 14.4
                }
            })
            .addTimedChild(instance14, 25, 1, {
                "25": {
                    x: 8.2,
                    y: 18.1
                }
            });
    });

    var Graphic33 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Sprite(fromFrame("ArmPadR22"))
            .setTransform(-8.6, -9.15);
        this.addTimedChild(instance1);
    });

    lib.Graphic34 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("LegPadR"))
            .setTransform(-10, -11.5);
        this.addChild(instance1);
    });

    var Graphic35 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 11, loop: false });
        var instance1 = new Sprite(fromFrame("Skate34R1"));
        var instance2 = new Sprite(fromFrame("Skate34R2"));
        var instance3 = new Sprite(fromFrame("Skate34R3"));
        var instance4 = new Sprite(fromFrame("Skate34R1"))
            .setTransform(0, 0.25);
        this.addTimedChild(instance1, 0, 4, {
                "0": {
                    y: 0.25
                }
            })
            .addTimedChild(instance2, 4, 1)
            .addTimedChild(instance3, 5, 1)
            .addTimedChild(instance4, 6, 5);
    });

    var Graphic36 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 3, loop: false });
        var instance1 = new Sprite(fromFrame("CuffSmall"))
            .setTransform(-11.95, -7.5);
        this.addTimedChild(instance1);
    });

    var Graphic37 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 27, loop: false });
        var instance1 = new Sprite(fromFrame("LegBack1"));
        var instance2 = new Sprite(fromFrame("LegBack2"));
        var instance3 = new Sprite(fromFrame("LegBack4"));
        var instance4 = new Sprite(fromFrame("LegBack8"));
        var instance5 = new Sprite(fromFrame("LegBack10"));
        var instance6 = new Sprite(fromFrame("LegBack12"));
        var instance7 = new Sprite(fromFrame("LegBack13"));
        var instance8 = new Sprite(fromFrame("LegBack14"));
        var instance9 = new Sprite(fromFrame("LegBack16"));
        var instance10 = new Sprite(fromFrame("LegBack18"));
        var instance11 = new Sprite(fromFrame("LegBack22"));
        var instance12 = new Sprite(fromFrame("LegBack24"));
        var instance13 = new Sprite(fromFrame("LegBack26"));
        var instance14 = new Sprite(fromFrame("LegBack27"))
            .setTransform(-41.85, 111.35);
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    x: -24.55,
                    y: 102.2
                }
            })
            .addTimedChild(instance2, 1, 2, {
                "1": {
                    x: -23.9,
                    y: 88.8
                }
            })
            .addTimedChild(instance3, 3, 4, {
                "3": {
                    x: -23.7,
                    y: 90.4
                }
            })
            .addTimedChild(instance4, 7, 2, {
                "7": {
                    x: -25.35,
                    y: 90.75
                }
            })
            .addTimedChild(instance5, 9, 2, {
                "9": {
                    x: -25.35,
                    y: 90.75
                }
            })
            .addTimedChild(instance6, 11, 1, {
                "11": {
                    x: -57.85,
                    y: 107
                }
            })
            .addTimedChild(instance7, 12, 1, {
                "12": {
                    x: -62.35,
                    y: 110.2
                }
            })
            .addTimedChild(instance8, 13, 2, {
                "13": {
                    x: -79.4,
                    y: 102.35
                }
            })
            .addTimedChild(instance9, 15, 2, {
                "15": {
                    x: -80.4,
                    y: 95.5
                }
            })
            .addTimedChild(instance10, 17, 4, {
                "17": {
                    x: -80.8,
                    y: 91.95
                }
            })
            .addTimedChild(instance11, 21, 2, {
                "21": {
                    x: -80.3,
                    y: 92.25
                }
            })
            .addTimedChild(instance12, 23, 2, {
                "23": {
                    x: -77.05,
                    y: 96.3
                }
            })
            .addTimedChild(instance13, 25, 1, {
                "25": {
                    x: -61.7,
                    y: 104.4
                }
            })
            .addTimedChild(instance14, 26, 1);
    });

    var Graphic38 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 12, loop: false });
        var instance1 = new Sprite(fromFrame("LegPadR"))
            .setTransform(-10, -11.5);
        this.addTimedChild(instance1);
    });

    var Graphic39 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 24, loop: false });
        var instance1 = new Sprite(fromFrame("SkateCuff4"));
        var instance2 = new Sprite(fromFrame("SkateCuff1"));
        var instance3 = new Sprite(fromFrame("SkateCuff2"));
        var instance4 = new Sprite(fromFrame("SkateCuff3"));
        var instance5 = new Sprite(fromFrame("SkateCuff1"))
            .setTransform(-12.15, -17.3);
        this.addTimedChild(instance1, 0, 8, {
                "0": {
                    x: -8.2,
                    y: -13.4
                }
            })
            .addTimedChild(instance2, 8, 1, {
                "8": {
                    x: -12.15,
                    y: -17.3
                }
            })
            .addTimedChild(instance3, 9, 1, {
                "9": {
                    x: -9.2,
                    y: -16.25
                }
            })
            .addTimedChild(instance4, 10, 2, {
                "10": {
                    x: -8.9,
                    y: -17.8
                }
            })
            .addTimedChild(instance5, 12, 12);
    });

    var Graphic40 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 12, loop: false });
        var instance1 = new Sprite(fromFrame("LegPadR"))
            .setTransform(-10, -11.5);
        this.addTimedChild(instance1);
    });

    var Graphic41 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 9, loop: false });
        var instance1 = new Sprite(fromFrame("CuffSmall"))
            .setTransform(-11.95, -7.5);
        this.addTimedChild(instance1);
    });

    var Graphic42 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 19, loop: false });
        var instance1 = new Sprite(fromFrame("Skate34R1"));
        var instance2 = new Sprite(fromFrame("Skate34R2"));
        var instance3 = new Sprite(fromFrame("Skate34R1"));
        var instance4 = new Sprite(fromFrame("Skate34R2"));
        var instance5 = new Sprite(fromFrame("Skate34R1"));
        var instance6 = new Sprite(fromFrame("Skate34R2"));
        var instance7 = new Sprite(fromFrame("Skate34R3"));
        var instance8 = new Sprite(fromFrame("Skate34R1"));
        var instance9 = new Sprite(fromFrame("Skate34R3"));
        var instance10 = new Sprite(fromFrame("Skate34R1"));
        var instance11 = new Sprite(fromFrame("Skate34R2"));
        var instance12 = new Sprite(fromFrame("Skate34R3"));
        var instance13 = new Sprite(fromFrame("Skate34R1"));
        var instance14 = new Sprite(fromFrame("Skate34R2"));
        var instance15 = new Sprite(fromFrame("Skate34R3"));
        var instance16 = new Sprite(fromFrame("Skate34R1"));
        var instance17 = new Sprite(fromFrame("Skate34R3"));
        this.addTimedChild(instance1, 0, 1, {
                "0": {
                    y: 0.25
                }
            })
            .addTimedChild(instance2, 1, 1)
            .addTimedChild(instance3, 2, 1, {
                "2": {
                    y: 0.25
                }
            })
            .addTimedChild(instance4, 3, 1)
            .addTimedChild(instance5, 4, 3, {
                "4": {
                    y: 0.25
                }
            })
            .addTimedChild(instance6, 7, 1)
            .addTimedChild(instance7, 8, 1)
            .addTimedChild(instance8, 9, 1, {
                "9": {
                    y: 0.25
                }
            })
            .addTimedChild(instance9, 10, 1)
            .addTimedChild(instance10, 11, 1, {
                "11": {
                    y: 0.25
                }
            })
            .addTimedChild(instance11, 12, 1)
            .addTimedChild(instance12, 13, 1)
            .addTimedChild(instance13, 14, 1, {
                "14": {
                    y: 0.25
                }
            })
            .addTimedChild(instance14, 15, 1)
            .addTimedChild(instance15, 16, 1)
            .addTimedChild(instance16, 17, 1, {
                "17": {
                    y: 0.25
                }
            })
            .addTimedChild(instance17, 18, 1);
    });

    var Graphic43 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 14, loop: false });
        var instance1 = new Sprite(fromFrame("Skate34R2"));
        var instance2 = new Sprite(fromFrame("Skate34R1"))
            .setTransform(0, 0.25);
        this.addTimedChild(instance1, 0, 1)
            .addTimedChild(instance2, 1, 13);
    });

    var Graphic44 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 14, loop: false });
        var instance1 = new Sprite(fromFrame("ArmStrapR21"))
            .setTransform(-7.7, -8.8);
        this.addTimedChild(instance1);
    });

    var Graphic45 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new Sprite(fromFrame("ArmPadR21"));
        var instance2 = new Sprite(fromFrame("ArmPadR22"))
            .setTransform(-8.6, -9.15);
        this.addTimedChild(instance1, 0, 14, {
                "0": {
                    x: -14.2,
                    y: -14.9
                }
            })
            .addTimedChild(instance2, 14, 1);
    });

    var Graphic46 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 15, loop: false });
        var instance1 = new Sprite(fromFrame("CuffSm"))
            .setTransform(-12.3, -9.6);
        this.addTimedChild(instance1);
    });

    var Graphic47 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 13, loop: false });
        var instance1 = new Sprite(fromFrame("CuffSmall"))
            .setTransform(-11.95, -7.5);
        this.addTimedChild(instance1);
    });

    var Graphic48 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 14, loop: false });
        var instance1 = new Sprite(fromFrame("LegPadR"))
            .setTransform(-10, -11.5);
        this.addTimedChild(instance1);
    });

    var Graphic49 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 12, loop: false });
        var instance1 = new Sprite(fromFrame("LegPadR"))
            .setTransform(-10, -11.5);
        this.addTimedChild(instance1);
    });

    var Graphic50 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 2, loop: false });
        var instance1 = new Sprite(fromFrame("Skate34R1"))
            .setTransform(0, 0.25);
        this.addTimedChild(instance1);
    });

    lib.Graphic51 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("Skate34R1"))
            .setTransform(0, 0.25);
        this.addChild(instance1);
    });

    lib.Graphic52 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Sprite(fromFrame("CuffSm"))
            .setTransform(-12.3, -9.6);
        this.addChild(instance1);
    });

    lib.sample2 = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 27,
            framerate: 24
        });
        var instance37 = new Graphic37(MovieClip.SYNCHED)
            .setTransform(410, 260);
        var instance41 = new Graphic41(MovieClip.SYNCHED);
        var instance46 = new Graphic46(MovieClip.SYNCHED);
        var instance50 = new Graphic50(MovieClip.SYNCHED);
        var instance48 = new Graphic48(MovieClip.SYNCHED);
        var instance43 = new Graphic43(MovieClip.SYNCHED);
        var instance38 = new Graphic38(MovieClip.SYNCHED);
        var instance36 = new Graphic36(MovieClip.SYNCHED);
        var instance35 = new Graphic35(MovieClip.SYNCHED);
        var instance34 = new lib.Graphic34();
        var instance33 = new Graphic33(MovieClip.SYNCHED);
        var instance45 = new Graphic45(MovieClip.SYNCHED);
        var instance32 = new Graphic32(MovieClip.SYNCHED)
            .setTransform(410, 260);
        var instance31 = new Graphic31(MovieClip.SYNCHED);
        var instance30 = new Graphic30(MovieClip.SYNCHED);
        var instance44 = new Graphic44(MovieClip.SYNCHED);
        var instance29 = new Graphic29(MovieClip.SYNCHED);
        var instance28 = new Graphic28(MovieClip.SYNCHED);
        var instance27 = new Graphic27(MovieClip.SYNCHED);
        var instance26 = new Graphic26(MovieClip.SYNCHED);
        var instance25 = new Graphic25(MovieClip.SYNCHED);
        var instance24 = new Graphic24(MovieClip.SYNCHED);
        var instance23 = new Graphic23(MovieClip.SYNCHED);
        var instance22 = new Graphic22(MovieClip.SYNCHED);
        var instance21 = new Graphic21(MovieClip.SYNCHED);
        var instance20 = new Graphic20(MovieClip.SYNCHED);
        var instance19 = new Graphic19(MovieClip.SYNCHED);
        var instance18 = new Graphic18(MovieClip.SYNCHED);
        var instance17 = new Graphic17(MovieClip.SYNCHED);
        var instance16 = new Graphic16(MovieClip.SYNCHED);
        var instance15 = new Graphic15(MovieClip.SYNCHED);
        var instance14 = new Graphic14(MovieClip.SYNCHED);
        var instance13 = new Graphic13(MovieClip.SYNCHED);
        var instance12 = new Graphic12(MovieClip.SYNCHED);
        var instance11 = new Graphic11(MovieClip.SYNCHED);
        var instance10 = new Graphic10(MovieClip.SYNCHED);
        var instance9 = new Graphic9(MovieClip.SYNCHED)
            .setTransform(410, 260);
        var instance8 = new Graphic8(MovieClip.SYNCHED);
        var instance47 = new Graphic47(MovieClip.SYNCHED);
        var instance52 = new lib.Graphic52()
            .setTransform(336.85, 383.55, 0.846, 0.846, 0, 0.365, 2.777);
        var instance51 = new lib.Graphic51()
            .setTransform(324.1, 419.95, 0.852, 0.84, 0, 4.242, -1.101);
        var instance49 = new Graphic49(MovieClip.SYNCHED);
        var instance42 = new Graphic42(MovieClip.SYNCHED);
        var instance40 = new Graphic40(MovieClip.SYNCHED);
        var instance7 = new Graphic7(MovieClip.SYNCHED);
        var instance6 = new Graphic6(MovieClip.SYNCHED);
        var instance5 = new Graphic5(MovieClip.SYNCHED);
        var instance4 = new Graphic4(MovieClip.SYNCHED)
            .setTransform(410, 260);
        var instance39 = new Graphic39(MovieClip.SYNCHED);
        var instance3 = new Graphic3(MovieClip.SYNCHED);
        var instance2 = new Graphic2(MovieClip.SYNCHED);
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        this.addTimedChild(instance37)
            .addTimedChild(instance41, 3, 9, {
                "3": {
                    x: 394.6,
                    y: 436.9,
                    sx: 0.847,
                    sy: 0.848,
                    kx: 0.061,
                    ky: 3.142
                },
                "7": {
                    x: 393.55
                },
                "9": {
                    x: 390.85
                },
                "11": {
                    x: 363,
                    y: 433.5,
                    sx: 1.124,
                    sy: 0.849,
                    kx: -0.025,
                    ky: -3.035
                }
            })
            .addTimedChild(instance46, 12, 15, {
                "12": {
                    x: 349.35,
                    y: 411.15,
                    sx: 0.794,
                    sy: 0.794,
                    kx: 1.051,
                    ky: 2.091
                },
                "13": {
                    x: 332.35,
                    y: 387.9,
                    sx: 0.845,
                    sy: 0.845,
                    kx: 0.305,
                    ky: 2.836
                },
                "15": {
                    x: 331.55,
                    y: 386.05,
                    kx: 0.291,
                    ky: 2.85
                },
                "17": {
                    x: 331.15,
                    y: 385.6,
                    kx: 0.286,
                    ky: 2.855
                },
                "21": {
                    x: 331.55,
                    y: 386,
                    sx: 0.843,
                    sy: 0.848,
                    kx: 0.297,
                    ky: 2.854
                },
                "23": {
                    x: 334.1,
                    y: 387.7,
                    sx: 0.845,
                    sy: 0.845,
                    kx: 0.269,
                    ky: 2.872
                },
                "25": {
                    x: 350.45,
                    y: 397.85,
                    sx: 0.844,
                    sy: 0.844,
                    kx: 0.129,
                    ky: 3.013
                },
                "26": {
                    x: 366.85,
                    y: 421.95,
                    sx: 0.815,
                    sy: 0.815,
                    kx: 1.229,
                    ky: 1.913
                }
            })
            .addTimedChild(instance50, 25, 2, {
                "25": {
                    x: 318.6,
                    y: 404.75,
                    sx: 0.73,
                    sy: 0.7,
                    kx: 3.327,
                    ky: -0.185
                },
                "26": {
                    x: 356,
                    y: 455.35,
                    sx: 0.727,
                    sy: 0.727,
                    kx: 4.344,
                    ky: -1.202
                }
            })
            .addTimedChild(instance48, 13, 14, {
                "13": {
                    x: 352.25,
                    y: 402.15,
                    sx: 0.771,
                    sy: 0.771,
                    kx: 4.614,
                    ky: -1.472
                },
                "15": {
                    x: 350.85,
                    y: 400.5,
                    sx: 0.77,
                    sy: 0.77,
                    kx: 4.563,
                    ky: -1.421
                },
                "17": {
                    x: 350.45,
                    y: 400.1,
                    kx: 4.558,
                    ky: -1.416
                },
                "21": {
                    x: 351.05,
                    y: 400.5,
                    sx: 0.769,
                    sy: 0.772,
                    ky: -1.428
                },
                "23": {
                    x: 354.15,
                    y: 401.75,
                    sx: 0.77,
                    sy: 0.77,
                    kx: 4.611,
                    ky: -1.47
                },
                "25": {
                    x: 382.3,
                    y: 411.7,
                    sx: 0.769,
                    sy: 0.769,
                    kx: -0.745,
                    ky: -2.396
                },
                "26": {
                    x: 388.4,
                    y: 409.85,
                    sx: 0.771,
                    sy: 0.771,
                    kx: -0.395,
                    ky: -2.747
                }
            })
            .addTimedChild(instance43, 11, 14, {
                "11": {
                    x: 405.7,
                    y: 437.25,
                    sx: 0.932,
                    sy: 0.704,
                    kx: -0.025,
                    ky: -3.035
                },
                "12": {
                    x: 357.15,
                    y: 444.8,
                    sx: 0.742,
                    sy: 0.665,
                    kx: -1.443,
                    ky: -1.698
                },
                "13": {
                    x: 305.2,
                    y: 405.5,
                    sx: 0.718,
                    sy: 0.734,
                    kx: 3.68,
                    ky: -0.538
                },
                "15": {
                    x: 302.95,
                    y: 402.3,
                    sx: 0.717,
                    kx: 3.626,
                    ky: -0.485
                },
                "17": {
                    x: 302,
                    y: 401.15,
                    sy: 0.733,
                    kx: 3.603,
                    ky: -0.462
                },
                "21": {
                    x: 302.95,
                    y: 401.5,
                    sx: 0.714,
                    sy: 0.737,
                    kx: 3.613,
                    ky: -0.464
                },
                "23": {
                    x: 304.4,
                    y: 403.15,
                    sx: 0.717,
                    sy: 0.733,
                    kx: 3.577,
                    ky: -0.435
                }
            })
            .addTimedChild(instance38, 1, 12, {
                "1": {
                    x: 403,
                    y: 408.6,
                    sx: 0.847,
                    sy: 0.847,
                    kx: 0.046,
                    ky: 3.142
                },
                "3": {
                    x: 403.55,
                    sy: 0.848,
                    kx: 0.061
                },
                "7": {
                    x: 402.8,
                    sy: 0.847,
                    kx: 0.043
                },
                "9": {
                    x: 400.7,
                    y: 408.85,
                    sx: 0.846,
                    kx: -0.019,
                    ky: -3.08
                },
                "11": {
                    x: 386.15,
                    y: 409.85,
                    sx: 0.844,
                    sy: 0.845,
                    kx: -0.334,
                    ky: -2.764
                },
                "12": {
                    x: 375.95,
                    y: 410.6,
                    sx: 0.77,
                    sy: 0.842,
                    kx: -0.347,
                    ky: -2.752
                }
            })
            .addTimedChild(instance36, 0, 3, {
                "0": {
                    x: 390.6,
                    y: 436.9,
                    sx: 0.847,
                    sy: 0.847,
                    kx: 0,
                    ky: 3.142
                },
                "1": {
                    x: 393.9,
                    kx: 0.046
                }
            })
            .addTimedChild(instance35, 0, 11, {
                "0": {
                    x: 423.45,
                    y: 435.95,
                    sx: 0.719,
                    sy: 0.735,
                    ky: 3.142
                },
                "1": {
                    x: 426.95
                },
                "3": {
                    x: 427.75
                },
                "7": {
                    x: 427.15,
                    sx: 0.726
                },
                "9": {
                    x: 424.5
                }
            })
            .addTimedChild(instance34, 0, 1, {
                "0": {
                    x: 401,
                    y: 408.6,
                    sx: 0.847,
                    sy: 0.847,
                    ky: 3.142
                }
            })
            .addTimedChild(instance33, 0, 11, {
                "0": {
                    x: 360.9,
                    y: 269.05,
                    sx: 0.844,
                    sy: 0.844,
                    r: 0.555
                },
                "1": {
                    x: 361.85,
                    y: 255.6,
                    sx: 0.845,
                    sy: 0.845,
                    r: 0.795
                },
                "3": {
                    x: 362.15,
                    y: 253.9,
                    r: 0.822
                },
                "5": {
                    x: 362.65,
                    y: 253.35,
                    r: 0.835
                },
                "7": {
                    x: 361.65,
                    y: 257.95,
                    r: 0.72
                },
                "9": {
                    x: 363.05,
                    y: 270.45,
                    sx: 0.844,
                    sy: 0.844,
                    r: 0.449
                }
            })
            .addTimedChild(instance45, 12, 15, {
                "12": {
                    x: 436,
                    y: 314.35,
                    sx: 0.842,
                    sy: 0.842,
                    r: -1.667
                },
                "13": {
                    x: 458.8,
                    y: 305,
                    sx: 0.843,
                    sy: 0.843,
                    r: -2
                },
                "15": {
                    x: 462.15,
                    y: 299.75,
                    r: -2.131
                },
                "17": {
                    x: 462.85,
                    y: 297.85,
                    r: -2.172
                },
                "21": {
                    x: 459.8,
                    y: 304.3,
                    r: -2.074
                },
                "23": {
                    x: 455.8,
                    y: 307.6,
                    sx: 0.842,
                    sy: 0.842,
                    r: -1.96
                },
                "25": {
                    x: 432.4,
                    y: 315,
                    sx: 0.841,
                    sy: 0.841,
                    r: -1.591
                },
                "26": {
                    x: 383.5,
                    y: 304.15,
                    sx: 0.842,
                    sy: 0.842,
                    r: -0.137
                }
            })
            .addTimedChild(instance32)
            .addTimedChild(instance31, 0, 26, {
                "0": {
                    x: 325.75,
                    y: 288.4,
                    sx: 0.852,
                    sy: 0.704,
                    kx: -1.366,
                    ky: 1.417,
                    r: 0
                },
                "1": {
                    x: 312.7,
                    y: 270.65,
                    sx: 0.643,
                    sy: 0.625,
                    kx: 0,
                    ky: 0,
                    r: -0.814
                },
                "3": {
                    x: 312.3,
                    y: 267.8,
                    sy: 0.626,
                    r: -0.764
                },
                "5": {
                    x: 312.7,
                    y: 266.65,
                    r: -0.758
                },
                "7": {
                    x: 316.5,
                    y: 278,
                    sx: 0.642,
                    sy: 0.625,
                    r: -1.108
                },
                "9": {
                    x: 330.35,
                    y: 301.85,
                    sx: 0.852,
                    sy: 0.704,
                    kx: -1.335,
                    ky: 1.386,
                    r: 0
                },
                "11": {
                    x: 404.9,
                    y: 328.95,
                    sx: 0.677,
                    sy: 0.601,
                    kx: 0.251,
                    ky: -0.443
                },
                "12": {
                    x: 459.9,
                    y: 321.4,
                    sx: 0.641,
                    sy: 0.627,
                    kx: 0.883,
                    ky: -0.955
                },
                "13": {
                    x: 491.95,
                    y: 305.1,
                    sx: 0.691,
                    sy: 0.675,
                    kx: 1.045,
                    ky: -1.117
                },
                "15": {
                    x: 496.2,
                    y: 287.25,
                    sx: 0.692,
                    sy: 0.676,
                    kx: 1.427,
                    ky: -1.499
                },
                "17": {
                    x: 495.95,
                    y: 285.1,
                    kx: 1.473,
                    ky: -1.54
                },
                "21": {
                    x: 494.25,
                    y: 295.7,
                    sx: 0.69,
                    sy: 0.689,
                    kx: 1.535,
                    ky: -1.537
                },
                "23": {
                    x: 486.7,
                    y: 306.7,
                    sx: 0.689,
                    sy: 0.688,
                    kx: 1.177,
                    ky: -1.179
                },
                "25": {
                    x: 455.2,
                    y: 323.25,
                    sx: 0.688,
                    sy: 0.687,
                    kx: 0.854,
                    ky: -0.856
                }
            })
            .addTimedChild(instance30, 0, 11, {
                "0": {
                    x: 364,
                    y: 276.3,
                    sx: 0.844,
                    sy: 0.844,
                    r: 0.489
                },
                "1": {
                    x: 363.1,
                    y: 263.4,
                    sx: 0.845,
                    sy: 0.845,
                    r: 0.729
                },
                "3": {
                    x: 363.2,
                    y: 261.7,
                    r: 0.756
                },
                "5": {
                    x: 363.55,
                    y: 261.25,
                    r: 0.77
                },
                "7": {
                    x: 363.5,
                    y: 265.65,
                    r: 0.655
                },
                "9": {
                    x: 366.85,
                    y: 277.4,
                    sx: 0.844,
                    sy: 0.844,
                    r: 0.383
                }
            })
            .addTimedChild(instance44, 12, 14, {
                "12": {
                    x: 436.4,
                    y: 314.4,
                    sx: 0.842,
                    sy: 0.842,
                    kx: 0,
                    ky: 0,
                    r: 1.514
                },
                "13": {
                    x: 459.2,
                    y: 304.95,
                    sx: 0.843,
                    sy: 0.843,
                    r: 1.072
                },
                "15": {
                    x: 462.55,
                    y: 299.6,
                    sx: 0.844,
                    sy: 0.844,
                    r: 0.976
                },
                "17": {
                    x: 463.25,
                    y: 297.7,
                    r: 0.935
                },
                "21": {
                    x: 460.2,
                    y: 304.15,
                    r: 1.033
                },
                "23": {
                    x: 456.2,
                    y: 307.8,
                    sx: 0.843,
                    sy: 0.843,
                    r: 1.103
                },
                "25": {
                    x: 433.3,
                    y: 314.6,
                    sx: 0.842,
                    sy: 0.842,
                    kx: 4.619,
                    ky: 1.664,
                    r: 0
                }
            })
            .addTimedChild(instance29, 0, 27, {
                "0": {
                    x: 456.6,
                    y: 235.9,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 456.8,
                    y: 228.25,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 457,
                    y: 226,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 456.55,
                    y: 231.3,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 455.4,
                    y: 233.7,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 454.8,
                    y: 235.5,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 454.4,
                    y: 241.1,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 453.55,
                    y: 233.7,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 452.85,
                    y: 223.5,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 452.35,
                    y: 222.3,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 452.75,
                    y: 227.05,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 453.45,
                    y: 230.05,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 454.4,
                    y: 234.35,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 455.95,
                    y: 244.25,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance28, 0, 27, {
                "0": {
                    x: 471.55,
                    y: 199.6,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 474.2,
                    y: 192.15,
                    kx: 0.007,
                    ky: 3.133
                },
                "3": {
                    x: 476.55,
                    y: 190.05,
                    sx: 0.789,
                    sy: 0.806,
                    kx: 0.036,
                    ky: 3.103
                },
                "5": {
                    x: 477.35,
                    sx: 0.79,
                    kx: 0.048,
                    ky: 3.09
                },
                "7": {
                    x: 476.7,
                    y: 195,
                    kx: 0.067,
                    ky: 3.071
                },
                "9": {
                    x: 474.8,
                    y: 197,
                    kx: 0.089,
                    ky: 3.048
                },
                "11": {
                    x: 472.2,
                    y: 198.55,
                    sy: 0.807,
                    kx: 0.084,
                    ky: 3.054
                },
                "12": {
                    x: 469.5,
                    y: 204.05,
                    sx: 0.789,
                    sy: 0.806,
                    kx: 0.061,
                    ky: 3.08
                },
                "13": {
                    x: 465.25,
                    y: 196.3,
                    kx: 0.031,
                    ky: 3.111
                },
                "15": {
                    x: 462.85,
                    y: 185.85,
                    kx: 0.039,
                    ky: 3.104
                },
                "17": {
                    x: 459.05,
                    y: 184.65,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.002,
                    ky: -3.136
                },
                "19": {
                    x: 458.45,
                    y: 184.6,
                    kx: -0.011,
                    ky: -3.126
                },
                "21": {
                    x: 459.3,
                    y: 189.35,
                    kx: -0.024,
                    ky: -3.114
                },
                "23": {
                    x: 461.3,
                    y: 192.55,
                    kx: -0.025,
                    ky: -3.113
                },
                "25": {
                    x: 464.2,
                    y: 197.1,
                    kx: -0.03,
                    ky: -3.109
                },
                "26": {
                    x: 470.3,
                    y: 207.8,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance27, 0, 27, {
                "0": {
                    x: 486.55,
                    y: 84.6,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 487.5,
                    y: 77.1,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 488.4,
                    y: 75.05,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 485.95,
                    y: 79.85,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 481.4,
                    y: 81.7,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 478.15,
                    y: 83.1,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 476.35,
                    y: 88.45,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 472.75,
                    y: 80.6,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 468.75,
                    y: 70.05,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 466.8,
                    y: 68.75,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 469.05,
                    y: 73.6,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 471.95,
                    y: 76.95,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 476.35,
                    y: 81.65,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 483.25,
                    y: 92.5,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance26, 0, 27, {
                "0": {
                    x: 486.1,
                    y: 129,
                    sx: 0.789,
                    sy: 0.805,
                    kx: -0.173,
                    ky: -2.962
                },
                "1": {
                    x: 486.85,
                    y: 121.55,
                    kx: -0.178,
                    ky: -2.957
                },
                "3": {
                    x: 487.55,
                    y: 119.45,
                    kx: -0.183,
                    ky: -2.952
                },
                "7": {
                    x: 485.65,
                    y: 124.3,
                    kx: -0.169,
                    ky: -2.966
                },
                "9": {
                    x: 482.15,
                    y: 126.1,
                    kx: -0.147,
                    ky: -2.988
                },
                "11": {
                    x: 479.65,
                    y: 127.45,
                    sy: 0.806,
                    kx: -0.129,
                    ky: -3.006
                },
                "12": {
                    x: 478.25,
                    y: 132.8,
                    kx: -0.12,
                    ky: -3.015
                },
                "13": {
                    x: 475.45,
                    y: 124.9,
                    kx: -0.102,
                    ky: -3.033
                },
                "15": {
                    x: 472.4,
                    y: 114.35,
                    sy: 0.805,
                    kx: -0.081,
                    ky: -3.055
                },
                "17": {
                    x: 470.85,
                    y: 113,
                    kx: -0.071,
                    ky: -3.064
                },
                "21": {
                    x: 472.55,
                    y: 117.9,
                    kx: -0.084,
                    ky: -3.051
                },
                "23": {
                    x: 474.8,
                    y: 121.3,
                    sy: 0.806,
                    kx: -0.098,
                    ky: -3.037
                },
                "25": {
                    x: 478.25,
                    y: 126,
                    kx: -0.12,
                    ky: -3.015
                },
                "26": {
                    x: 483.6,
                    y: 136.9,
                    kx: -0.155,
                    ky: -2.98
                }
            })
            .addTimedChild(instance25, 0, 27, {
                "0": {
                    x: 419.35,
                    y: 119.95,
                    sx: 0.787,
                    sy: 0.804,
                    kx: -0.04,
                    ky: -3.1
                },
                "1": {
                    x: 420.15,
                    y: 112.15,
                    kx: -0.045,
                    ky: -3.096
                },
                "3": {
                    x: 420.85,
                    y: 109.75,
                    kx: -0.05,
                    ky: -3.091
                },
                "7": {
                    x: 418.9,
                    y: 115.5,
                    kx: -0.037,
                    ky: -3.104
                },
                "9": {
                    x: 415.15,
                    y: 118.8,
                    kx: -0.014,
                    ky: -3.127
                },
                "11": {
                    x: 412.55,
                    y: 121.3,
                    kx: 0.003,
                    ky: 3.139
                },
                "12": {
                    x: 411.05,
                    y: 127.3,
                    kx: 0.012,
                    ky: 3.13
                },
                "13": {
                    x: 408.25,
                    y: 120.6,
                    kx: 0.031,
                    ky: 3.112
                },
                "15": {
                    x: 405.05,
                    y: 111.45,
                    kx: 0.052,
                    ky: 3.09
                },
                "17": {
                    x: 403.5,
                    y: 110.75,
                    kx: 0.061,
                    ky: 3.081
                },
                "21": {
                    x: 405.25,
                    y: 114.8,
                    kx: 0.049,
                    ky: 3.093
                },
                "23": {
                    x: 407.55,
                    y: 117.25,
                    kx: 0.035,
                    ky: 3.108
                },
                "25": {
                    x: 411.05,
                    y: 120.5,
                    kx: 0.012,
                    ky: 3.13
                },
                "26": {
                    x: 416.65,
                    y: 129.05,
                    kx: -0.023,
                    ky: -3.118
                }
            })
            .addTimedChild(instance24, 0, 27, {
                "0": {
                    x: 451.05,
                    y: 199.8,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 451.4,
                    y: 192.2,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 451.75,
                    y: 189.95,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 450.85,
                    y: 195.25,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 448.9,
                    y: 197.8,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 447.65,
                    y: 199.75,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 446.9,
                    y: 205.4,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 445.45,
                    y: 198.05,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 443.95,
                    y: 188.1,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 443.1,
                    y: 187,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 443.9,
                    y: 191.55,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 445.1,
                    y: 194.55,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 446.9,
                    y: 198.6,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 449.75,
                    y: 208.35,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance23, 0, 27, {
                "0": {
                    x: 491.5,
                    y: 18.5,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 492.75,
                    y: 11,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 494,
                    y: 8.95,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 490.65,
                    y: 13.75,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 484.6,
                    y: 15.45,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 480.2,
                    y: 16.75,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 477.8,
                    y: 22.1,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 473,
                    y: 14.25,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 467.55,
                    y: 3.75,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 465,
                    y: 2.45,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 468.1,
                    y: 7.3,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 471.9,
                    y: 10.65,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 477.8,
                    y: 15.3,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 487,
                    y: 26.25,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance22, 0, 27, {
                "0": {
                    x: 380.65,
                    y: 154.45,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 381.2,
                    y: 146.55,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 381.8,
                    y: 143.9,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 380.25,
                    y: 150.15,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 377.3,
                    y: 154.35,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 375.3,
                    y: 157.55,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 374.25,
                    y: 163.85,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 372,
                    y: 157.8,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 369.65,
                    y: 149.45,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 368.45,
                    y: 149.05,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 369.75,
                    y: 152.7,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 371.55,
                    y: 154.65,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 374.25,
                    y: 157.05,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 378.55,
                    y: 164.25,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance21, 0, 27, {
                "0": {
                    x: 467.2,
                    y: 165.55,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 467.75,
                    y: 157.95,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 468.25,
                    y: 155.75,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 466.85,
                    y: 160.9,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 464.15,
                    y: 163.05,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 462.3,
                    y: 164.75,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 461.25,
                    y: 170.25,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 459.2,
                    y: 162.7,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 456.9,
                    y: 152.4,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 455.7,
                    y: 151.2,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 457,
                    y: 155.95,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 458.7,
                    y: 159.1,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 461.25,
                    y: 163.45,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 465.3,
                    y: 173.75,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance20, 0, 27, {
                "0": {
                    x: 464.05,
                    y: 157.8,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 464.6,
                    y: 150.2,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 465.15,
                    y: 148,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 463.7,
                    y: 153.15,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 460.75,
                    y: 155.45,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 458.8,
                    y: 157.2,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 457.65,
                    y: 162.7,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 455.45,
                    y: 155.2,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 453,
                    y: 145.05,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 451.75,
                    y: 143.9,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 453.15,
                    y: 148.55,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 454.95,
                    y: 151.7,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 457.65,
                    y: 155.9,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 461.95,
                    y: 166.1,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance19, 0, 27, {
                "0": {
                    x: 391.75,
                    y: 162.4,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 392.3,
                    y: 154.45,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 392.8,
                    y: 151.9,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 391.4,
                    y: 158.05,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 388.65,
                    y: 161.9,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 386.8,
                    y: 164.95,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 385.75,
                    y: 171.1,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 383.7,
                    y: 164.9,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 381.45,
                    y: 156.25,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 380.35,
                    y: 155.8,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 381.55,
                    y: 159.55,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 383.2,
                    y: 161.7,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 385.75,
                    y: 164.3,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 389.8,
                    y: 172,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance18, 0, 27, {
                "0": {
                    x: 485.35,
                    y: 144.8,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 486,
                    y: 137.35,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 486.6,
                    y: 135.25,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 484.95,
                    y: 140.1,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 481.75,
                    y: 141.95,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 479.55,
                    y: 143.3,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 478.3,
                    y: 148.6,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 475.8,
                    y: 140.7,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 473.05,
                    y: 130.1,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 471.7,
                    y: 128.8,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 473.2,
                    y: 133.7,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 475.2,
                    y: 137.15,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 478.3,
                    y: 141.8,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 483.1,
                    y: 152.75,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance17, 0, 27, {
                "0": {
                    x: 417.25,
                    y: 142.3,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 417.9,
                    y: 134.55,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 418.5,
                    y: 132.1,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 416.85,
                    y: 137.85,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 413.6,
                    y: 141.25,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 411.4,
                    y: 143.8,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 410.15,
                    y: 149.7,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 407.75,
                    y: 143.1,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 405.05,
                    y: 133.9,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 403.7,
                    y: 133.25,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 405.15,
                    y: 137.3,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 407.15,
                    y: 139.75,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 410.15,
                    y: 142.9,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 414.95,
                    y: 151.45,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance16, 0, 27, {
                "0": {
                    x: 371,
                    y: 175.2,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 374.75,
                    y: 167.2,
                    kx: 0.029,
                    ky: 3.11
                },
                "3": {
                    x: 379.25,
                    y: 164.5,
                    sx: 0.789,
                    sy: 0.806,
                    kx: 0.1,
                    ky: 3.035
                },
                "5": {
                    x: 380.1,
                    y: 164.55,
                    sx: 0.79,
                    kx: 0.117,
                    ky: 3.018
                },
                "7": {
                    x: 379.25,
                    y: 170.8,
                    kx: 0.139,
                    ky: 2.996
                },
                "9": {
                    x: 376.85,
                    y: 175,
                    kx: 0.161,
                    ky: 2.973
                },
                "11": {
                    x: 373.85,
                    y: 178.4,
                    kx: 0.153,
                    ky: 2.983
                },
                "12": {
                    x: 369.8,
                    y: 184.85,
                    sx: 0.789,
                    kx: 0.104,
                    ky: 3.035
                },
                "13": {
                    x: 362.95,
                    y: 179.1,
                    kx: 0.026,
                    ky: 3.117
                },
                "15": {
                    x: 358.75,
                    y: 170.75,
                    kx: 0.004,
                    ky: 3.14
                },
                "17": {
                    x: 355.6,
                    y: 170.2,
                    sx: 0.79,
                    kx: -0.032,
                    ky: -3.105
                },
                "19": {
                    x: 355.1,
                    y: 170.1,
                    kx: -0.041,
                    ky: -3.096
                },
                "21": {
                    x: 355.95,
                    y: 173.55,
                    kx: -0.058,
                    ky: -3.078
                },
                "23": {
                    x: 358.1,
                    y: 175.35,
                    kx: -0.059
                },
                "25": {
                    x: 362,
                    y: 177.7,
                    kx: -0.046,
                    ky: -3.092
                },
                "26": {
                    x: 369.25,
                    y: 185.15,
                    sy: 0.807,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance15, 0, 27, {
                "0": {
                    x: 418.35,
                    y: 106.3,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 419.15,
                    y: 98.5,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 419.95,
                    y: 96.1,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 417.75,
                    y: 101.85,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 413.75,
                    y: 105.2,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 410.9,
                    y: 107.75,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 409.3,
                    y: 113.7,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 406.2,
                    y: 107.1,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 402.75,
                    y: 97.95,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 401.05,
                    y: 97.3,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 403,
                    y: 101.35,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 405.45,
                    y: 103.75,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 409.3,
                    y: 106.9,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 415.4,
                    y: 115.4,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance14, 0, 27, {
                "0": {
                    x: 483,
                    y: 172.75,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 483.5,
                    y: 165.3,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 483.95,
                    y: 163.2,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 482.65,
                    y: 168.1,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 480.1,
                    y: 169.95,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 478.4,
                    y: 171.35,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 477.4,
                    y: 176.65,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 475.45,
                    y: 168.8,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 473.25,
                    y: 158.15,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 472.15,
                    y: 156.85,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 473.35,
                    y: 161.75,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 474.95,
                    y: 165.2,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 477.4,
                    y: 169.85,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 481.2,
                    y: 180.75,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance13, 0, 27, {
                "0": {
                    x: 415.6,
                    y: 167.85,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 416.15,
                    y: 160.05,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 416.65,
                    y: 157.6,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 415.3,
                    y: 163.4,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 412.65,
                    y: 166.8,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 410.9,
                    y: 169.35,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 409.85,
                    y: 175.3,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 407.9,
                    y: 168.65,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 405.75,
                    y: 159.5,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 404.65,
                    y: 158.75,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 405.8,
                    y: 162.85,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 407.4,
                    y: 165.3,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 409.85,
                    y: 168.5,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 413.75,
                    y: 177,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance12, 0, 27, {
                "0": {
                    x: 417,
                    y: 241.4,
                    sx: 0.79,
                    sy: 0.807,
                    kx: -0.027,
                    ky: -3.114
                },
                "1": {
                    x: 417.2,
                    y: 233.6,
                    kx: -0.032,
                    ky: -3.11
                },
                "3": {
                    x: 417.35,
                    y: 231.1,
                    kx: -0.037,
                    ky: -3.105
                },
                "7": {
                    x: 416.95,
                    y: 236.9,
                    kx: -0.023,
                    ky: -3.118
                },
                "9": {
                    x: 415.95,
                    y: 240.2,
                    kx: -0.001,
                    ky: -3.141
                },
                "11": {
                    x: 415.5,
                    y: 242.75,
                    kx: 0.017,
                    ky: 3.125
                },
                "12": {
                    x: 415.15,
                    y: 248.7,
                    kx: 0.026,
                    ky: 3.116
                },
                "13": {
                    x: 414.45,
                    y: 242.05,
                    kx: 0.044,
                    ky: 3.098
                },
                "15": {
                    x: 413.95,
                    y: 232.65,
                    kx: 0.066,
                    ky: 3.076
                },
                "17": {
                    x: 413.45,
                    y: 231.8,
                    kx: 0.075,
                    ky: 3.067
                },
                "21": {
                    x: 413.75,
                    y: 236,
                    kx: 0.062,
                    ky: 3.079
                },
                "23": {
                    x: 414.35,
                    y: 238.5,
                    kx: 0.048,
                    ky: 3.094
                },
                "25": {
                    x: 415.15,
                    y: 241.9,
                    kx: 0.026,
                    ky: 3.116
                },
                "26": {
                    x: 416.5,
                    y: 250.5,
                    kx: -0.009,
                    ky: -3.132
                }
            })
            .addTimedChild(instance11, 0, 27, {
                "0": {
                    x: 371.25,
                    y: 325.65,
                    sx: 0.849,
                    sy: 0.846,
                    kx: -0.297,
                    ky: -2.93
                },
                "1": {
                    y: 317.4
                },
                "3": {
                    y: 316
                },
                "7": {
                    y: 321.5
                },
                "9": {
                    y: 324.8
                },
                "11": {
                    y: 328.9
                },
                "12": {
                    y: 332.6
                },
                "13": {
                    y: 324.3
                },
                "15": {
                    y: 318.8
                },
                "17": {
                    y: 317.9
                },
                "21": {
                    y: 320.6
                },
                "23": {
                    y: 324.7
                },
                "25": {
                    y: 325.65
                },
                "26": {
                    y: 334.75
                }
            })
            .addTimedChild(instance10, 0, 27, {
                "0": {
                    x: 314.45,
                    y: 325.25,
                    sx: 0.847,
                    sy: 0.847,
                    ky: 3.142
                },
                "1": {
                    y: 317.8
                },
                "3": {
                    y: 315.75
                },
                "7": {
                    y: 320.4
                },
                "9": {
                    y: 323.15
                },
                "11": {
                    y: 326.3
                },
                "12": {
                    y: 330.2
                },
                "13": {
                    y: 322.3
                },
                "15": {
                    y: 316.5
                },
                "17": {
                    y: 315.75
                },
                "21": {
                    y: 319.65
                },
                "23": {
                    y: 323.55
                },
                "25": {
                    y: 325.9
                },
                "26": {
                    y: 334.55
                }
            })
            .addTimedChild(instance9)
            .addTimedChild(instance8, 0, 13, {
                "0": {
                    x: 307.3,
                    y: 368.25,
                    sx: 0.846,
                    sy: 0.846,
                    kx: 0.025,
                    ky: 3.117
                },
                "1": {
                    x: 304.2,
                    y: 363,
                    kx: -0.046,
                    ky: -3.095
                },
                "3": {
                    x: 304.05,
                    y: 361.95,
                    kx: -0.068,
                    ky: -3.073
                },
                "7": {
                    x: 305.6,
                    y: 363.9,
                    kx: -0.089,
                    ky: -3.053
                },
                "9": {
                    x: 308.65,
                    y: 367.05,
                    sx: 0.848,
                    sy: 0.845,
                    kx: -0.026,
                    ky: -3.093
                },
                "11": {
                    x: 316.05,
                    y: 378.35,
                    sx: 0.845,
                    kx: -0.209,
                    ky: -2.933
                },
                "12": {
                    x: 346.15,
                    y: 419.95,
                    sx: 0.843,
                    sy: 0.843,
                    kx: 1.3,
                    ky: 1.842
                }
            })
            .addTimedChild(instance47, 13, 13, {
                "13": {
                    x: 399.95,
                    y: 437.45,
                    sx: 0.931,
                    sy: 0.931,
                    kx: -0.11,
                    ky: -3.032
                },
                "15": {
                    x: 402.95
                },
                "17": {
                    x: 403.7
                },
                "21": {
                    x: 402.45
                },
                "23": {
                    x: 394.2,
                    sx: 0.923,
                    sy: 0.941,
                    kx: -0.187,
                    ky: -3.031
                },
                "25": {
                    x: 349.65,
                    y: 435.85,
                    sx: 0.93,
                    sy: 0.93,
                    kx: -0.234,
                    ky: -2.908
                }
            })
            .addTimedChild(instance52, 26, 1)
            .addTimedChild(instance51, 26, 1)
            .addTimedChild(instance49, 15, 12, {
                "15": {
                    x: 404.6,
                    y: 404.95,
                    sx: 0.845,
                    sy: 0.845,
                    kx: 0.173,
                    ky: 2.968
                },
                "17": {
                    x: 405.05,
                    y: 404.75,
                    kx: 0.183,
                    ky: 2.959
                },
                "21": {
                    x: 404.35,
                    y: 405.25,
                    sx: 0.847,
                    sy: 0.844,
                    kx: 0.173
                },
                "23": {
                    x: 399.15,
                    y: 406.65,
                    sx: 0.845,
                    sy: 0.845,
                    kx: 0.051,
                    ky: 3.09
                },
                "25": {
                    x: 366.6,
                    y: 408.25,
                    sx: 0.833,
                    sy: 0.858,
                    kx: -0.326,
                    ky: -2.888
                },
                "26": {
                    x: 355.4,
                    y: 400.25,
                    sx: 0.773,
                    sy: 0.773,
                    kx: 4.712,
                    ky: -1.571
                }
            })
            .addTimedChild(instance42, 7, 19, {
                "7": {
                    x: 269.3,
                    y: 368.4,
                    sx: 0.782,
                    sy: 0.841,
                    kx: 3.204,
                    ky: -0.063
                },
                "9": {
                    x: 271.5,
                    y: 369.75,
                    sx: 0.78,
                    sy: 0.844,
                    kx: 3.173,
                    ky: -0.01
                },
                "11": {
                    x: 277.1,
                    y: 375.55,
                    sx: 0.789,
                    sy: 0.841,
                    kx: 2.99,
                    ky: 0.152
                },
                "12": {
                    x: 339.55,
                    y: 457.5,
                    sx: 0.839,
                    sy: 0.839,
                    kx: 4.498,
                    ky: -1.357
                },
                "13": {
                    x: 436.9,
                    y: 435.65,
                    sx: 0.823,
                    sy: 0.823,
                    kx: 0,
                    ky: 3.142
                },
                "15": {
                    x: 439.8
                },
                "17": {
                    x: 440.5
                },
                "21": {
                    x: 439.25
                },
                "23": {
                    x: 431.95,
                    sx: 0.838
                },
                "25": {
                    x: 391.7,
                    y: 437.5,
                    sx: 0.943,
                    kx: -0.079,
                    ky: -3.063
                }
            })
            .addTimedChild(instance40, 3, 12, {
                "3": {
                    x: 317.2,
                    y: 382.3,
                    sx: 0.771,
                    sy: 0.771,
                    kx: 4.203,
                    ky: -1.062
                },
                "7": {
                    x: 319.4,
                    y: 384.1,
                    kx: 4.253,
                    ky: -1.111
                },
                "9": {
                    x: 323.65,
                    y: 386.65,
                    sx: 0.764,
                    sy: 0.778,
                    kx: 4.297,
                    ky: -1.17
                },
                "11": {
                    x: 341.5,
                    y: 402.05,
                    sx: 0.77,
                    sy: 0.77,
                    kx: -1.083,
                    ky: -2.059
                },
                "12": {
                    x: 366.65,
                    y: 412.05,
                    sx: 0.769,
                    sy: 0.769,
                    kx: -0.615,
                    ky: -2.527
                },
                "13": {
                    x: 402.4,
                    y: 405.55,
                    sx: 0.845,
                    sy: 0.845,
                    kx: 0.147,
                    ky: 2.994
                }
            })
            .addTimedChild(instance7, 0, 7, {
                "0": {
                    x: 277.2,
                    y: 386.75,
                    sx: 0.786,
                    sy: 0.841,
                    kx: 3.596,
                    ky: -0.454
                },
                "1": {
                    x: 268.45,
                    y: 370.3,
                    sx: 0.783,
                    sy: 0.842,
                    kx: 3.292,
                    ky: -0.15
                },
                "3": {
                    x: 267.9,
                    y: 367.3,
                    sx: 0.782,
                    kx: 3.239,
                    ky: -0.097
                }
            })
            .addTimedChild(instance6, 0, 3, {
                "0": {
                    x: 322.4,
                    y: 387.45,
                    sx: 0.771,
                    sy: 0.771,
                    kx: 4.333,
                    ky: -1.192
                },
                "1": {
                    x: 317.75,
                    y: 383.05,
                    kx: 4.225,
                    ky: -1.084
                }
            })
            .addTimedChild(instance5, 0, 27, {
                "0": {
                    x: 378.6,
                    y: 325.85,
                    sx: 0.847,
                    sy: 0.847,
                    ky: 3.142
                },
                "1": {
                    y: 317.9
                },
                "3": {
                    y: 315.75
                },
                "7": {
                    y: 320.1
                },
                "9": {
                    y: 323.7
                },
                "11": {
                    y: 326.55
                },
                "12": {
                    y: 330.85
                },
                "13": {
                    y: 322.95
                },
                "15": {
                    y: 317.2
                },
                "17": {
                    y: 316.5
                },
                "21": {
                    y: 320.8
                },
                "23": {
                    y: 324.4
                },
                "25": {
                    y: 326.55
                },
                "26": {
                    y: 334.45
                }
            })
            .addTimedChild(instance4)
            .addTimedChild(instance39, 3, 24, {
                "3": {
                    x: 490.3,
                    y: 287.65,
                    sx: 0.757,
                    sy: 0.736,
                    kx: -0.009,
                    ky: -3.133
                },
                "5": {
                    x: 490.45,
                    y: 286.45,
                    kx: 0,
                    ky: 3.142
                },
                "7": {
                    x: 487.65,
                    y: 300.85,
                    sx: 0.87,
                    kx: -0.166,
                    ky: -3.091
                },
                "9": {
                    x: 442.75,
                    y: 325.1,
                    sx: 0.868,
                    sy: 0.739,
                    kx: -0.44,
                    ky: -2.839
                },
                "11": {
                    x: 381.05,
                    y: 321,
                    sx: 0.869,
                    sy: 0.769,
                    kx: -1.175,
                    ky: -2.188
                },
                "12": {
                    x: 325.8,
                    y: 290.95,
                    sx: 0.802,
                    sy: 0.712,
                    kx: 4.006,
                    ky: -0.908
                },
                "13": {
                    x: 312.25,
                    y: 267,
                    sx: 0.794,
                    sy: 0.698,
                    kx: 4.34,
                    ky: 2.033
                },
                "15": {
                    x: 304.75,
                    y: 249.25,
                    sx: 0.809,
                    sy: 0.688,
                    kx: 3.686,
                    ky: 2.69
                },
                "17": {
                    x: 305.15,
                    y: 247.2,
                    sx: 0.81,
                    kx: 3.663,
                    ky: 2.712
                },
                "21": {
                    x: 315.3,
                    y: 267.3,
                    sx: 0.804,
                    sy: 0.691,
                    kx: 3.876,
                    ky: 2.504
                },
                "23": {
                    x: 321.2,
                    y: 292.1,
                    sx: 0.791,
                    sy: 0.701,
                    kx: 4.621,
                    ky: 1.739
                },
                "25": {
                    x: 353.15,
                    y: 317.1,
                    sx: 0.795,
                    sy: 0.72,
                    kx: 1.427,
                    ky: 1.651
                },
                "26": {
                    x: 441.25,
                    y: 330.05,
                    sx: 0.815,
                    sy: 0.705,
                    kx: -0.406,
                    ky: -2.824
                }
            })
            .addTimedChild(instance3, 0, 27, {
                "0": {
                    x: 430.85,
                    y: 306.9,
                    sx: 0.824,
                    sy: 0.845,
                    kx: 1.784,
                    ky: 1.346
                },
                "1": {
                    x: 434.2,
                    y: 301.5,
                    sx: 0.825,
                    sy: 0.844,
                    kx: 1.831,
                    ky: 1.297
                },
                "3": {
                    x: 435,
                    y: 298.3,
                    sx: 0.823,
                    sy: 0.846,
                    kx: 1.881,
                    ky: 1.255
                },
                "5": {
                    x: 435.4,
                    y: 297.85,
                    kx: 1.895,
                    ky: 1.24
                },
                "7": {
                    x: 431.65,
                    y: 305.85,
                    sx: 0.822,
                    kx: 1.864,
                    ky: 1.272
                },
                "9": {
                    x: 407.15,
                    y: 317.15,
                    sx: 0.819,
                    kx: 1.48,
                    ky: 1.677
                },
                "11": {
                    x: 367.95,
                    y: 295.6,
                    sx: 0.839,
                    sy: 0.828,
                    kx: 0.416,
                    ky: 2.755
                },
                "12": {
                    x: 364.6,
                    y: 276.85,
                    sx: 0.829,
                    sy: 0.833,
                    kx: 0.898,
                    ky: -0.871
                },
                "13": {
                    x: 361.5,
                    y: 265.5,
                    sx: 0.834,
                    sy: 0.829,
                    kx: 0.701,
                    ky: -0.674
                },
                "15": {
                    y: 254.75,
                    sx: 0.836,
                    sy: 0.827,
                    kx: 0.591,
                    ky: -0.566
                },
                "17": {
                    x: 361.8,
                    y: 252.85,
                    sx: 0.837,
                    kx: 0.55,
                    ky: -0.526
                },
                "21": {
                    x: 360.85,
                    y: 261.2,
                    sx: 0.834,
                    sy: 0.831,
                    kx: 0.718,
                    ky: -0.691
                },
                "23": {
                    x: 360.95,
                    y: 273.2,
                    sx: 0.831,
                    sy: 0.834,
                    kx: 0.863,
                    ky: -0.836
                },
                "25": {
                    x: 361.25,
                    y: 294.95,
                    sx: 0.843,
                    sy: 0.82,
                    kx: 0.036,
                    ky: 3.107
                },
                "26": {
                    x: 402.3,
                    y: 321.4,
                    sx: 0.783,
                    sy: 0.84,
                    kx: 1.336,
                    ky: 1.845
                }
            })
            .addTimedChild(instance2, 0, 3, {
                "0": {
                    x: 483.15,
                    y: 304.7,
                    sx: 0.787,
                    sy: 0.737,
                    kx: -0.223,
                    ky: -2.962
                },
                "1": {
                    x: 489.65,
                    y: 292.45,
                    sx: 0.757,
                    sy: 0.736,
                    kx: -0.074,
                    ky: -3.072
                }
            })
            .addTimedChild(instance1, 0, 27, {
                "0": {
                    x: 427.3,
                    y: 311.4,
                    sx: 0.678,
                    sy: 0.734,
                    kx: 1.811,
                    ky: 1.306
                },
                "1": {
                    x: 431.1,
                    y: 306.4,
                    sx: 0.679,
                    kx: 1.901,
                    ky: 1.212
                },
                "3": {
                    x: 432.2,
                    y: 303.35,
                    sx: 0.677,
                    sy: 0.736,
                    kx: 1.951,
                    ky: 1.169
                },
                "5": {
                    x: 432.7,
                    y: 302.95,
                    sy: 0.735,
                    kx: 1.965,
                    ky: 1.154
                },
                "7": {
                    x: 428.8,
                    y: 310.85,
                    sx: 0.676,
                    sy: 0.736,
                    kx: 1.934,
                    ky: 1.186
                },
                "9": {
                    x: 401.6,
                    y: 319.85,
                    sx: 0.673,
                    kx: 1.388,
                    ky: 1.761
                },
                "11": {
                    x: 363.8,
                    y: 293.75,
                    sx: 0.689,
                    sy: 0.72,
                    kx: 0.351,
                    ky: 2.806
                },
                "12": {
                    x: 361.6,
                    y: 272.75,
                    sx: 0.656,
                    sy: 0.702,
                    kx: 1.006,
                    ky: -0.933
                },
                "13": {
                    x: 359.45,
                    y: 260.9,
                    sx: 0.66,
                    sy: 0.698,
                    kx: 0.811,
                    ky: -0.736
                },
                "15": {
                    x: 359.95,
                    y: 250,
                    sx: 0.662,
                    sy: 0.697,
                    kx: 0.701,
                    ky: -0.626
                },
                "17": {
                    x: 360.45,
                    y: 248.05,
                    sx: 0.663,
                    sy: 0.696,
                    kx: 0.66,
                    ky: -0.587
                },
                "21": {
                    x: 358.65,
                    y: 256.7,
                    sx: 0.66,
                    sy: 0.7,
                    kx: 0.828,
                    ky: -0.753
                },
                "23": {
                    x: 358.1,
                    y: 268.9,
                    sx: 0.658,
                    sy: 0.703,
                    kx: 0.972,
                    ky: -0.898
                },
                "25": {
                    x: 356.5,
                    y: 290.8,
                    sx: 0.692,
                    sy: 0.712,
                    kx: -0.02,
                    ky: -3.134
                },
                "26": {
                    x: 396.9,
                    y: 324.5,
                    sx: 0.644,
                    sy: 0.728,
                    kx: 1.285,
                    ky: 1.891
                }
            });
    });

    lib.sample2.assets = {
        "sample2_atlas_1": "images/sample2_atlas_1.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.sample2,
        background: 0x0,
        width: 800,
        height: 500,
        framerate: 24,
        totalFrames: 27,
        library: lib
    };
}