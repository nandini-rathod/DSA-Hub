export const problemsData = {
  Beginner: [
    {
      title: "Arrays 🔢",
      problems: [
        { name: "Reverse an array", description: "Reverse the given array in place or return a new reversed array." },
        { name: "Find the max/min", description: "Find the maximum and minimum values in the array." },
        { name: "Kadane's Algorithm (easy version)", description: "Find the maximum sum subarray (easy constraints)." }
      ]
    },
    {
      title: "Strings ✂️",
      problems: [
        { name: "Palindromes", description: "Check if a string is a palindrome." },
        { name: "Substrings", description: "Generate all possible substrings of a string." },
        { name: "Anagrams", description: "Check if two strings are anagrams." },
        { name: "String reversal", description: "Reverse the characters in a string." }
      ]
    },
    {
      title: "Hashing ⚡",
      problems: [
        { name: "Frequency count", description: "Count frequency of each element in an array." },
        { name: "Finding duplicates", description: "Find duplicate elements in an array or string." },
        { name: "Two Sum problem", description: "Find pairs that sum to a target value." }
      ]
    },
    {
      title: "Recursion 🔁",
      problems: [
        { name: "Factorial", description: "Compute factorial of a number using recursion." },
        { name: "Fibonacci", description: "Generate nth Fibonacci number using recursion." },
        { name: "Tower of Hanoi (easy)", description: "Solve Tower of Hanoi with 3 rods and n disks." }
      ]
    },
    {
      title: "Searching 🔍",
      problems: [
        { name: "Linear Search", description: "Find an element in an array using linear search." },
        { name: "Binary Search (sorted arrays)", description: "Find an element in a sorted array using binary search." }
      ]
    },
    {
      title: "Sorting 📊",
      problems: [
        { name: "Bubble Sort", description: "Sort an array using bubble sort algorithm." },
        { name: "Selection Sort", description: "Sort an array using selection sort algorithm." },
        { name: "Insertion Sort", description: "Sort an array using insertion sort algorithm." }
      ]
    },
    {
      title: "Stacks & Queues 🥞",
      problems: [
        { name: "Valid parentheses", description: "Check if a string of parentheses is valid." },
        { name: "Next Greater Element", description: "Find next greater element for each array element." },
        { name: "Queue reversal", description: "Reverse a queue using recursion or stack." }
      ]
    },
    {
      title: "Linked Lists 🔗",
      problems: [
        { name: "Traversing", description: "Traverse a linked list and print all elements." },
        { name: "Insertion/deletion", description: "Insert or delete nodes in a linked list." },
        { name: "Reversing a linked list", description: "Reverse a singly linked list." }
      ]
    },
    {
      title: "Math & Bit Manipulation 🔢",
      problems: [
        { name: "GCD/LCM", description: "Calculate GCD and LCM of two numbers." },
        { name: "Prime numbers", description: "Check if a number is prime or generate prime numbers." },
        { name: "Bitwise AND/OR/XOR basics", description: "Perform basic bitwise operations." }
      ]
    },
    {
      title: "Graphs 🌐",
      problems: [
        { name: "Basic traversal", description: "Traverse a graph using BFS or DFS." },
        { name: "BFS", description: "Breadth First Search traversal." },
        { name: "DFS", description: "Depth First Search traversal." }
      ]
    }
  ],

  Advanced: [
    {
      title: "Arrays 🔢",
      problems: [
        { name: "Kadane's Algorithm (hard)", description: "Find the maximum sum subarray with large constraints." },
        { name: "Sliding Window Problems", description: "Solve problems using sliding window technique." },
        { name: "Trapping Rain Water", description: "Compute water trapped after raining given an array of heights." }
      ]
    },
    {
      title: "Strings ✂️",
      problems: [
        { name: "Pattern matching", description: "Find occurrences of a pattern in a string." },
        { name: "KMP Algorithm", description: "Use Knuth-Morris-Pratt algorithm for string matching." },
        { name: "Longest Palindromic Substring", description: "Find the longest palindromic substring in a string." }
      ]
    },
    {
      title: "Hashing ⚡",
      problems: [
        { name: "Subarray sum equals K", description: "Count subarrays with sum equal to K using hashing." },
        { name: "Two Sum with HashMap", description: "Find pairs that sum to target using hashmap." },
        { name: "Anagram grouping", description: "Group anagrams together." }
      ]
    },
    {
      title: "Recursion 🔁",
      problems: [
        { name: "N-Queens", description: "Place N queens on NxN board so that no two attack each other." },
        { name: "Subset generation", description: "Generate all subsets of a set." },
        { name: "Word Break Problem", description: "Check if a string can be segmented into valid dictionary words." }
      ]
    },
    {
      title: "Searching 🔍",
      problems: [
        { name: "Binary Search on rotated array", description: "Search an element in a rotated sorted array." },
        { name: "Search in 2D matrix", description: "Search element in a sorted 2D matrix efficiently." }
      ]
    },
    {
      title: "Sorting 📊",
      problems: [
        { name: "Merge Sort", description: "Sort an array using merge sort." },
        { name: "Quick Sort", description: "Sort an array using quick sort." },
        { name: "Heap Sort", description: "Sort an array using heap sort." }
      ]
    },
    {
      title: "Stacks & Queues 🥞",
      problems: [
        { name: "Evaluate Reverse Polish Notation", description: "Evaluate RPN expression using stack." },
        { name: "Sliding Window Maximum", description: "Find maximum in every sliding window of size k." }
      ]
    },
    {
      title: "Linked Lists 🔗",
      problems: [
        { name: "Detect cycle", description: "Detect if a linked list has a cycle." },
        { name: "Merge K sorted lists", description: "Merge K sorted linked lists into one." },
        { name: "Reverse in groups", description: "Reverse linked list in groups of size k." }
      ]
    },
    {
      title: "Math & Bit Manipulation 🔢",
      problems: [
        { name: "XOR tricks", description: "Solve problems using XOR properties." },
        { name: "Count set bits", description: "Count the number of set bits in a number." },
        { name: "Modular arithmetic", description: "Perform arithmetic operations under modulo." }
      ]
    },
    {
      title: "Graphs 🌐",
      problems: [
        { name: "Dijkstra's Algorithm", description: "Find shortest path from a source node." },
        { name: "Topological Sort", description: "Perform topological sort on a DAG." },
        { name: "Minimum Spanning Tree", description: "Find MST of a graph using Prim's or Kruskal's algorithm." }
      ]
    }
  ],

  "All-in-one": [
    ...[
      {
    title: "Arrays 🔢",
    problems: [
      { name: "Reverse an array", description: "Reverse the given array in place or return a new reversed array." },
      { name: "Find the max/min", description: "Find the maximum and minimum values in the array." },
      { name: "Kadane's Algorithm (easy version)", description: "Find the maximum sum subarray (easy constraints)." },
      { name: "Kadane's Algorithm (hard)", description: "Find the maximum sum subarray with large constraints." },
      { name: "Sliding Window Problems", description: "Solve problems using sliding window technique." },
      { name: "Trapping Rain Water", description: "Compute water trapped after raining given an array of heights." }
    ]
  },
  {
    title: "Strings ✂️",
    problems: [
      { name: "Palindromes", description: "Check if a string is a palindrome." },
      { name: "Substrings", description: "Generate all possible substrings of a string." },
      { name: "Anagrams", description: "Check if two strings are anagrams." },
      { name: "String reversal", description: "Reverse the characters in a string." },
      { name: "Pattern matching", description: "Find occurrences of a pattern in a string." },
      { name: "KMP Algorithm", description: "Use Knuth-Morris-Pratt algorithm for string matching." },
      { name: "Longest Palindromic Substring", description: "Find the longest palindromic substring in a string." }
    ]
  },
  {
    title: "Hashing ⚡",
    problems: [
      { name: "Frequency count", description: "Count frequency of each element in an array." },
      { name: "Finding duplicates", description: "Find duplicate elements in an array or string." },
      { name: "Two Sum problem", description: "Find pairs that sum to a target value." },
      { name: "Subarray sum equals K", description: "Count subarrays with sum equal to K using hashing." },
      { name: "Two Sum with HashMap", description: "Find pairs that sum to target using hashmap." },
      { name: "Anagram grouping", description: "Group anagrams together." }
    ]
  },
  {
    title: "Recursion 🔁",
    problems: [
      { name: "Factorial", description: "Compute factorial of a number using recursion." },
      { name: "Fibonacci", description: "Generate nth Fibonacci number using recursion." },
      { name: "Tower of Hanoi (easy)", description: "Solve Tower of Hanoi with 3 rods and n disks." },
      { name: "N-Queens", description: "Place N queens on NxN board so that no two attack each other." },
      { name: "Subset generation", description: "Generate all subsets of a set." },
      { name: "Word Break Problem", description: "Check if a string can be segmented into valid dictionary words." }
    ]
  },
  {
    title: "Searching 🔍",
    problems: [
      { name: "Linear Search", description: "Find an element in an array using linear search." },
      { name: "Binary Search (sorted arrays)", description: "Find an element in a sorted array using binary search." },
      { name: "Binary Search on rotated array", description: "Search an element in a rotated sorted array." },
      { name: "Search in 2D matrix", description: "Search element in a sorted 2D matrix efficiently." }
    ]
  },
  {
    title: "Sorting 📊",
    problems: [
      { name: "Bubble Sort", description: "Sort an array using bubble sort algorithm." },
      { name: "Selection Sort", description: "Sort an array using selection sort algorithm." },
      { name: "Insertion Sort", description: "Sort an array using insertion sort algorithm." },
      { name: "Merge Sort", description: "Sort an array using merge sort." },
      { name: "Quick Sort", description: "Sort an array using quick sort." },
      { name: "Heap Sort", description: "Sort an array using heap sort." }
    ]
  },
  {
    title: "Stacks & Queues 🥞",
    problems: [
      { name: "Valid parentheses", description: "Check if a string of parentheses is valid." },
      { name: "Next Greater Element", description: "Find next greater element for each array element." },
      { name: "Queue reversal", description: "Reverse a queue using recursion or stack." },
      { name: "Evaluate Reverse Polish Notation", description: "Evaluate RPN expression using stack." },
      { name: "Sliding Window Maximum", description: "Find maximum in every sliding window of size k." }
    ]
  },
  {
    title: "Linked Lists 🔗",
    problems: [
      { name: "Traversing", description: "Traverse a linked list and print all elements." },
      { name: "Insertion/deletion", description: "Insert or delete nodes in a linked list." },
      { name: "Reversing a linked list", description: "Reverse a singly linked list." },
      { name: "Detect cycle", description: "Detect if a linked list has a cycle." },
      { name: "Merge K sorted lists", description: "Merge K sorted linked lists into one." },
      { name: "Reverse in groups", description: "Reverse linked list in groups of size k." }
    ]
  },
  {
    title: "Math & Bit Manipulation 🔢",
    problems: [
      { name: "GCD/LCM", description: "Calculate GCD and LCM of two numbers." },
      { name: "Prime numbers", description: "Check if a number is prime or generate prime numbers." },
      { name: "Bitwise AND/OR/XOR basics", description: "Perform basic bitwise operations." },
      { name: "XOR tricks", description: "Solve problems using XOR properties." },
      { name: "Count set bits", description: "Count the number of set bits in a number." },
      { name: "Modular arithmetic", description: "Perform arithmetic operations under modulo." }
    ]
  },
  {
    title: "Graphs 🌐",
    problems: [
      { name: "Basic traversal", description: "Traverse a graph using BFS or DFS." },
      { name: "BFS", description: "Breadth First Search traversal." },
      { name: "DFS", description: "Depth First Search traversal." },
      { name: "Dijkstra's Algorithm", description: "Find shortest path from a source node." },
      { name: "Topological Sort", description: "Perform topological sort on a DAG." },
      { name: "Minimum Spanning Tree", description: "Find MST of a graph using Prim's or Kruskal's algorithm." }
    ]
  }
]
  ]
};