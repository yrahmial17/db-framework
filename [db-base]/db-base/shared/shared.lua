DBFramework = {}
DBFramework.Ranks = {
    ['user'] = {
        rank = 1,
        label = "user",
    },
    ['admin'] = {
        rank = 2,
        label = "admin",
    },
    ['developer'] = {
        rank = 3,
        label = "developer",
    },
    ['owner'] = {
        rank = 4,
        label = "owner",
    }
}

DBFramework.Bloodtypes = {"A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"}

DBFramework.DefaultSettings = {
    spawnPosition = {x = 195.08, y = -933.86, z = 29.7},
    startCash = 2500,
    startBank = 2500,
    rank = DBFramework.Ranks['user']['label'],
    job = {name = 'unemployed', label='Unemployed', grade = '', callsign = '', payment = 10, onduty = true, isBoss = false},
    secondaryJob = "none",
    gang = "none"
}

DBFramework.Jobs = {
    ['unemployed'] = {
        Job = 'unemployed',
        label = 'Unemployed',
        grades = {
            [1] = {
                isBoss = false,
                grade = '',
                payment = 10,
            },
        }
    },
    ['lawyer'] = {
        Job = 'lawyer',
        label = 'Lawyer',
        grades = {
            [1] = {
                isBoss = false,
                grade = 'Lawyer',
                payment = 80,
            },
        }
    },
    ['judge'] = {
        Job = 'judge',
        label = 'Judge',
        grades = {
            [1] = {
                isBoss = false,
                grade = 'Judge',
                payment = 80,
            },
        }
    },
    ['police'] = {
        Job = 'police',
        label = 'Police Officer',
        onduty = true,
        grades = {
            [1] = {
                isBoss = false,
                grade = 'Cadet',
                payment = 90,
            },
            [2] = {
                isBoss = false,
                grade = 'Officer',
                payment = 150,
            },
            [3] = {
                isBoss = false,
                grade = 'S.Officer',
                payment = 150,
            },
            [4] = {
                isBoss = false,
                grade = 'Deputy',
                payment = 150,
            },
            [5] = {
                isBoss = false,
                grade = 'S.Deputy',
                payment = 150,
            },
            [6] = {
                isBoss = false,
                grade = 'Trooper',
                payment = 150,
            },
            [7] = {
                isBoss = false,
                grade = 'Corporal',
                payment = 150,
            },
            [8] = {
                isBoss = false,
                grade = 'Sergeant',
                payment = 190,
            },
            [9] = {
                isBoss = false,
                grade = 'Inspector',
                payment = 230,
            },
            [10] = {
                isBoss = false,
                grade = 'Lieutenant',
                payment = 270,
            },
            [11] = {
                isBoss = false,
                grade = 'Captain',
                payment = 310,
            },
            [12] = {
                isBoss = false,
                grade = 'Assistant Chief',
                payment = 480,
            },
            [13] = {
                isBoss = true,
                grade = 'Chief Of Police',
                payment = 550,
            },
            [14] = {
                isBoss = false,
                grade = 'Special Forces',
                payment = 350,
            },
            
        }
    },
    ['army'] = {
        Job = 'army',
        label = 'Army',
        onduty = true,
        grades = {
            [1] = {
                isBoss = false,
                grade = 'Solider',
                payment = 60,
            },
            [2] = {
                isBoss = false,
                grade = 'Sergant',
                payment = 100,
            },
            [3] = {
                isBoss = false,
                grade = 'Lieutenant',
                payment = 150,
            },
            [4] = {
                isBoss = true,
                grade = 'Commander',
                payment = 250,
            }
        }
    },
    ['ems'] = {
        Job = 'ems',
        label = 'EMS',
        onduty = true,
        grades = {
            [1] = {
                isBoss = false,
                grade = 'EMT',
                payment = 90,
            },
            [2] = {
                isBoss = false,
                grade = 'Paramedic',
                payment = 120,
            },
            [3] = {
                isBoss = false,
                grade = 'Lieutenant of EMS',
                payment = 150,
            },
            [4] = {
                isBoss = false,
                grade = 'Assistant Chief',
                payment = 200,
            },
            [5] = {
                isBoss = true,
                grade = 'EMS Boss',
                payment = 250,
            }
        }
    },
    ['burger'] = {
        Job = 'burger',
        label = 'BurgerShot',
        grades = {
            [1] = {
                isBoss = false,
                grade = 'worker',
                payment = 30,
            },
            [2] = {
                isBoss = true,
                grade = 'Boss',
                payment = 70,
            }
        }
    },
    ['realtor'] = {
        Job = 'realtor',
        label = 'Real Estate',
        grades = {
            [1] = {
                isBoss = false,
                grade = 'realtor',
                payment = 40,
            }
        }
    },
    ['pdm'] = {
        Job = 'pdm',
        label = "Car Dealer",
        grades = {
            [1] = {
                isBoss = false,
                grade = 'worker',
                payment = 50,
            },
        }
    },
    ['hayes'] = {
        Job = 'hayes_autos',
        label = "Hayes Mechanic",
        grades = {
            [1] = {
                isBoss = false,
                grade = 'worker',
                payment = 50,
            },
            [2] = {
                isBoss = true,
                grade = 'Boss',
                payment = 80,
            },
        }
    },
    ['news'] = {
        Job = 'news',
        label = "News",
        grades = {
            [1] = {
                grade = 'News Reporter',
                payment = 50,
            },
        }
    },
    ['whitewidow'] = {
        Job = 'whitewidow',
        label = "White Widow",
        grades = {
            [1] = {
                grade = 'Worker',
                payment = 50,
            },
            [2] = {
                isBoss = true,
                grade = 'Boss',
                payment = 80,
            },
        }
    },
    ["trucker"] = {
        Job = "trucker",
        label = "Delivery Job",
        grades = {
            [1] = {
                grade = "trucker",
                payment = 30,
            }
        }
    },
    ["barman"] = {
        Job = "barman",
        label = 'Barman',
        grades = {
            [1] = {
                grade = "worker",
                payment = 30,
            }
        }
    },
    ["garbage"] = {
        Job = "garbage",
        label = 'Garbage',
        grades = {
            [1] = {
                grade = "worker",
                payment = 35,
            }
        }
    },
    ["digitalden"] = {
        Job = "digitalden",
        label = 'Digital Den',
        grades = {
            [1] = {
                grade = "worker",
                payment = 60,
                isBoss = true,
            }
        }
    },
    ["pizzeria"] = {
        Job = "pizzeria",
        label = 'Pizzeria',
        grades = {
            [1] = {
                grade = "worker",
                payment = 30,
            }
        }
    },
    ["vanilla"] = {
        Job = "vanilla",
        label = 'Vanilla',
        grades = {
            [1] = {
                grade = "worker",
                payment = 60,
            }
        }
    },
    ["gallery"] = {
        Job = "gallery",
        label = 'Gallery',
        grades = {
            [1] = {
                grade = "worker",
                payment = 50,
            }
        }
    },
    ["taxi"] = {
        Job = "taxi",
        label = "Taxi",
        grades = {
            [1] = {
                grade = "Taxi Driver",
                payment = 60,
            }
        }
    }
}