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
    new Input(
        'graphDFS',
        [
            'First line will contain two space separated integers V, E.',
            'V is no. of vertex and E is no. of edges in graph.',
            'The description of E lines follows. Each edge consists of single line containing two integers, u and v. representing edge between vertex u and vertex v',
            'last line will consist of single integer s(start vertex of graph)'
        ],
        [
            'Output will contain only a single line with V space separated integers.'
        ],
        [
            ' 1 <= V, E <= 10^5',
            ' 0 <= u, v <= V',
            ' s in V'
        ]
    ),
    new Input(
        'graphBFS',
        [
            'First line will contain two space separated integers V, E.',
            'V is no. of vertex and E is no. of edges in graph.',
            'The description of E lines follows. Each edge consists of single line containing two integers, u and v. representing edge between vertex u and vertex v',
            'last line will consist of single integer s(start vertex of graph)'
        ],
        [
            'Output will contain only a single line with V space separated integers.'
        ],
        [
            ' 1 <= V, E <= 10^5',
            ' 0 <= u, v <= V',
            ' s in V'
        ]
    )
]