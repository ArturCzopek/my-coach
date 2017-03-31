import {Cycle, Exercise, ExerciseSession, Series, Set, Training} from "../get.entities";

export let CYCLES_LIST: Cycle[] = [
  new Cycle(
    1,
    [
      new Set(
        1,
        "Push",
        [
          new Exercise(
            1,
            "Wyciskanie leżąc",
            [
              new ExerciseSession(
                1,
                [
                  new Series(
                    1,
                    3.75,
                    12
                  ),
                  new Series(
                    2,
                    5,
                    12
                  ),
                  new Series(
                    3,
                    6.25,
                    12
                  )
                ]
              ),
              new ExerciseSession(
                10,
                [
                  new Series(
                    28,
                    5,
                    12
                  ),
                  new Series(
                    29,
                    6.25,
                    12
                  ),
                  new Series(
                    30,
                    7.5,
                    12
                  )
                ]
              )
            ],
          ),
          new Exercise(
            2,
            "Wyciskanie w skosie",
            [
              new ExerciseSession(
                2,
                [
                  new Series(
                    4,
                    1.25,
                    12
                  ),
                  new Series(
                    5,
                    2.5,
                    12
                  ),
                  new Series(
                    6,
                    3.75,
                    12
                  )
                ]
              ),
              new ExerciseSession(
                11,
                [
                  new Series(
                    31,
                    2.5,
                    12
                  ),
                  new Series(
                    32,
                    3.75,
                    12,
                    "Coś zakłuło w dupsku"
                  ),
                  new Series(
                    33,
                    5,
                    12
                  )
                ]
              )
            ]
          ),
          new Exercise(
            3,
            "Wyciskanie siedząc",
            [
              new ExerciseSession(
                3,
                [
                  new Series(
                    7,
                    3.75,
                    12
                  ),
                  new Series(
                    8,
                    5,
                    12
                  ),
                  new Series(
                    9,
                    6.25,
                    12,
                    "Ale chujoza"
                  )
                ]
              ),
              new ExerciseSession(
                12,
                [
                  new Series(
                    34,
                    5,
                    12
                  ),
                  new Series(
                    35,
                    6.25,
                    12
                  ),
                  new Series(
                    36,
                    7.5,
                    12
                  )
                ]
              )
            ]
          )
        ],
        [
          new Training(
            1,
            new Date(2016, 9, 9)
          ),
          new Training(
            4,
            new Date(2016, 9, 16)
          )
        ]
      ),
      new Set(
        2,
        "Pull",
        [
          new Exercise(
            4,
            "Wiosłowanie",
            [
              new ExerciseSession(
                4,
                [
                  new Series(
                    10,
                    0,
                    12
                  ),
                  new Series(
                    11,
                    1.25,
                    12
                  ),
                  new Series(
                    12,
                    2.5,
                    12
                  )
                ]
              ),
              new ExerciseSession(
                13,
                [
                  new Series(
                    37,
                    1.25,
                    12
                  ),
                  new Series(
                    38,
                    2.5,
                    12
                  ),
                  new Series(
                    39,
                    3.75,
                    12
                  )
                ]
              )
            ]
          ),
          new Exercise(
            5,
            "Podciąganie hantli",
            [
              new ExerciseSession(
                5,
                [
                  new Series(
                    13,
                    1.25,
                    12
                  ),
                  new Series(
                    14,
                    2.5,
                    12
                  ),
                  new Series(
                    15,
                    3.75,
                    12
                  )
                ]
              ),
              new ExerciseSession(
                14,
                [
                  new Series(
                    40,
                    2.5,
                    12
                  ),
                  new Series(
                    41,
                    3.75,
                    12
                  ),
                  new Series(
                    42,
                    5,
                    12
                  )
                ]
              )
            ]
          ),
          new Exercise(
            6,
            "Uginanie ramion",
            [
              new ExerciseSession(
                6,
                [
                  new Series(
                    16,
                    1.25,
                    12
                  ),
                  new Series(
                    17,
                    2.5,
                    12
                  ),
                  new Series(
                    18,
                    3.75,
                    12
                  )
                ]
              ),
              new ExerciseSession(
                15,
                [
                  new Series(
                    43,
                    2.5,
                    10
                  ),
                  new Series(
                    44,
                    3.75,
                    10
                  ),
                  new Series(
                    45,
                    5,
                    10
                  )
                ]
              )
            ]
          )
        ],
        [
          new Training(
            2,
            new Date(2016, 9, 11)
          ),
          new Training(
            5,
            new Date(2016, 9, 18)
          )
        ]
      ),
      new Set(
        3,
        "Legs",
        [
          new Exercise(
            7,
            "Przysiady",
            [
              new ExerciseSession(
                7,
                [
                  new Series(
                    19,
                    1.25,
                    12
                  ),
                  new Series(
                    20,
                    2.5,
                    12
                  ),
                  new Series(
                    21,
                    3.75,
                    12
                  )
                ]
              ),
              new ExerciseSession(
                16,
                [
                  new Series(
                    46,
                    8,
                    12
                  ),
                  new Series(
                    47,
                    10,
                    12
                  ),
                  new Series(
                    48,
                    15,
                    12
                  )
                ]
              )
            ]
          ),
          new Exercise(
            8,
            "Martwy na prostych",
            [
              new ExerciseSession(
                8,
                [
                  new Series(
                    22,
                    1.25,
                    12
                  ),
                  new Series(
                    23,
                    2.5,
                    12
                  ),
                  new Series(
                    24,
                    3.75,
                    12
                  )
                ]
              ),
              new ExerciseSession(
                17,
                [
                  new Series(
                    49,
                    2.5,
                    12
                  ),
                  new Series(
                    50,
                    3.75,
                    12
                  ),
                  new Series(
                    51,
                    5,
                    12
                  )
                ]
              )
            ]
          ),
          new Exercise(
            9,
            "Wypady",
            [
              new ExerciseSession(
                9,
                [
                  new Series(
                    25,
                    11.25,
                    12
                  ),
                  new Series(
                    26,
                    12.5,
                    12
                  ),
                  new Series(
                    27,
                    13.75,
                    12
                  )
                ]
              ),
              new ExerciseSession(
                18,
                [
                  new Series(
                    52,
                    12.5,
                    12
                  ),
                  new Series(
                    53,
                    13.75,
                    12
                  ),
                  new Series(
                    54,
                    15,
                    12
                  )
                ]
              )
            ]
          )
        ],
        [
          new Training(
            3,
            new Date(2016, 9, 13)
          ),
          new Training(
            6,
            new Date(2016, 9, 20)
          )
        ]
      )
    ],
    new Date(2016, 9, 1),
    new Date(2016, 9, 30)
  ),
  new Cycle(
    2,
    [
      new Set(
        4,
        "Push",
        [
          new Exercise(
            10,
            "Wyciskanie leżąc hantli",
            [
              new ExerciseSession(
                19,
                [
                  new Series(
                    55,
                    2.5,
                    10
                  ),
                  new Series(
                    56,
                    3.75,
                    10
                  ),
                  new Series(
                    57,
                    5,
                    10
                  )
                ]
              ),
              new ExerciseSession(
                28,
                [
                  new Series(
                    82,
                    3.75,
                    10
                  ),
                  new Series(
                    83,
                    5,
                    10
                  ),
                  new Series(
                    84,
                    6.25,
                    10
                  )
                ]
              )
            ]
          ),
          new Exercise(
            11,
            "Wyciskanie w skosie hantli",
            [
              new ExerciseSession(
                20,
                [
                  new Series(
                    58,
                    2.5,
                    10
                  ),
                  new Series(
                    59,
                    3.75,
                    10
                  ),
                  new Series(
                    60,
                    5,
                    10
                  )
                ]
              ),
              new ExerciseSession(
                29,
                [
                  new Series(
                    85,
                    2.5,
                    10
                  ),
                  new Series(
                    86,
                    3.75,
                    10
                  ),
                  new Series(
                    87,
                    5,
                    10
                  )
                ]
              )
            ]
          ),
          new Exercise(
            12,
            "Wznosy boczne",
            [
              new ExerciseSession(
                21,
                [
                  new Series(
                    61,
                    3.75,
                    10
                  ),
                  new Series(
                    62,
                    5,
                    10
                  ),
                  new Series(
                    63,
                    6.25,
                    10
                  )
                ]
              ),
              new ExerciseSession(
                30,
                [
                  new Series(
                    88,
                    5,
                    10
                  ),
                  new Series(
                    89,
                    6.25,
                    10
                  ),
                  new Series(
                    90,
                    7.5,
                    10
                  )
                ]
              )
            ]
          )
        ],
        [
          new Training(
            7,
            new Date(2016, 10, 1)
          ),
          new Training(
            10,
            new Date(2016, 10, 8)
          )
        ]
      ),
      new Set(
        5,
        "Pull",
        [
          new Exercise(
            13,
            "Wiosłowanie hantli",
            [
              new ExerciseSession(
                22,
                [
                  new Series(
                    64,
                    2.5,
                    10
                  ),
                  new Series(
                    65,
                    3.75,
                    10
                  ),
                  new Series(
                    66,
                    5,
                    10
                  )
                ]
              ),
              new ExerciseSession(
                31,
                [
                  new Series(
                    91,
                    3.75,
                    10
                  ),
                  new Series(
                    92,
                    5,
                    10
                  ),
                  new Series(
                    93,
                    6.25,
                    10
                  )
                ]
              )
            ]
          ),
          new Exercise(
            14,
            "Podciąganie na drążku",
            [
              new ExerciseSession(
                23,
                [
                  new Series(
                    67,
                    2.5,
                    10
                  ),
                  new Series(
                    68,
                    3.75,
                    10
                  ),
                  new Series(
                    69,
                    5,
                    10
                  )
                ]
              ),
              new ExerciseSession(
                32,
                [
                  new Series(
                    94,
                    3.75,
                    10
                  ),
                  new Series(
                    95,
                    3.75,
                    10
                  ),
                  new Series(
                    96,
                    5,
                    10
                  )
                ]
              )
            ]
          ),
          new Exercise(
            15,
            "Uginanie ramion na modlitewniku",
            [
              new ExerciseSession(
                24,
                [
                  new Series(
                    70,
                    3.75,
                    10
                  ),
                  new Series(
                    71,
                    5,
                    10
                  ),
                  new Series(
                    72,
                    6.25,
                    10
                  )
                ]
              ),
              new ExerciseSession(
                33,
                [
                  new Series(
                    97,
                    5,
                    10
                  ),
                  new Series(
                    98,
                    7,
                    10
                  ),
                  new Series(
                    99,
                    10,
                    10
                  )
                ]
              )
            ]
          )
        ],
        [
          new Training(
            8,
            new Date(2016, 10, 3)
          ),
          new Training(
            15,
            new Date(2016, 10, 10)
          )
        ]
      ),
      new Set(
        6,
        "Legs",
        [
          new Exercise(
            16,
            "Przysiad front",
            [
              new ExerciseSession(
                25,
                [
                  new Series(
                    73,
                    2.5,
                    10
                  ),
                  new Series(
                    74,
                    3.75,
                    10
                  ),
                  new Series(
                    75,
                    5,
                    10
                  )
                ]
              ),
              new ExerciseSession(
                34,
                [
                  new Series(
                    100,
                    3.75,
                    10
                  ),
                  new Series(
                    101,
                    5,
                    10
                  ),
                  new Series(
                    102,
                    6.25,
                    10
                  )
                ]
              )
            ]
          ),
          new Exercise(
            17,
            "Martwy na prostych (sztanga)",
            [
              new ExerciseSession(
                26,
                [
                  new Series(
                    76,
                    5,
                    10
                  ),
                  new Series(
                    77,
                    7.5,
                    10
                  ),
                  new Series(
                    78,
                    10,
                    10
                  )
                ]
              ),
              new ExerciseSession(
                35,
                [
                  new Series(
                    103,
                    6,
                    10
                  ),
                  new Series(
                    104,
                    9,
                    10
                  ),
                  new Series(
                    105,
                    12,
                    10
                  )
                ]
              )
            ]
          ),
          new Exercise(
            18,
            "Wypad ze sztangą na barkach",
            [
              new ExerciseSession(
                27,
                [
                  new Series(
                    73,
                    2.5,
                    10
                  ),
                  new Series(
                    74,
                    3.75,
                    10
                  ),
                  new Series(
                    75,
                    5,
                    10
                  )
                ]
              ),
              new ExerciseSession(
                36,
                [
                  new Series(
                    106,
                    3.75,
                    10
                  ),
                  new Series(
                    107,
                    5,
                    10
                  ),
                  new Series(
                    108,
                    6.25,
                    10
                  ),
                  new Series(
                    109,
                    7.5,
                    10
                  )
                ]
              )
            ]
          )
        ],
        [
          new Training(
            9,
            new Date(2016, 10, 5)
          ),
          new Training(
            12,
            new Date(2016, 10, 12)
          )
        ]
      )
    ],
    new Date(2016, 10, 1)
  )
];
