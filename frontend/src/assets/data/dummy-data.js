import Input from "../model/input";

export const INPUT = [
    new Input(
        'sum',
        [
            'First line will contain N, size of an Array.',
            'Second line will contain N space separated integers.'
        ],
        [
            'Output will contain only a single line with total sum.'
        ],
        [
            ' 1 <= N <= 10^5',
            ' -10^5 <= A_i <= 10^5'
        ]
    ),
    new Input(
        'max',
        [
            'First line will contain N, size of an Array.',
            'Second line will contain N space separated integers.'
        ],
        [
            'Output will contain only a single line with maximum value.'
        ],
        [
            ' 1 <= N <= 10^5',
            ' -10^5 <= A_i <= 10^5'
        ]
    ),
]