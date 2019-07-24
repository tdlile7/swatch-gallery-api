const colors = [
  {
    hexCode: "#7b241c",
    category: "red"
  },
  {
    hexCode: "#922b21",
    category: "red"
  },
  {
    hexCode: "#a93226",
    category: "red"
  },
  {
    hexCode: "#c0392b",
    category: "red"
  },
  {
    hexCode: "#cd6155",
    category: "red"
  },
  {
    hexCode: "#d98880",
    category: "red"
  },
  {
    hexCode: "#e74c3c",
    category: "red"
  },
  {
    hexCode: "#ec7063",
    category: "red"
  },
  {
    hexCode: "#f1948a",
    category: "red"
  },
  {
    hexCode: "#f5b7b1",
    category: "red"
  },
  {
    hexCode: "#fadbd8",
    category: "red"
  },
  {
    hexCode: "#641e16",
    category: "red"
  },
  {
    hexCode: "#76448a",
    category: "purple"
  },
  {
    hexCode: "#884ea0",
    category: "purple"
  },
  {
    hexCode: "#9b59b6",
    category: "purple"
  },
  {
    hexCode: "#af7ac5",
    category: "purple"
  },
  {
    hexCode: "#d7bde2",
    category: "purple"
  },
  {
    hexCode: "#c39bd3",
    category: "purple"
  },
  {
    hexCode: "#8e44ad",
    category: "purple"
  },
  {
    hexCode: "#a569bd",
    category: "purple"
  },
  {
    hexCode: "#bb8fce",
    category: "purple"
  },
  {
    hexCode: "#d2b4de",
    category: "purple"
  },
  {
    hexCode: "#512e5f",
    category: "purple"
  },
  {
    hexCode: "#633974",
    category: "purple"
  },
  {
    hexCode: "#1f618d",
    category: "blue"
  },
  {
    hexCode: "#2471a3",
    category: "blue"
  },
  {
    hexCode: "#2980b9",
    category: "blue"
  },
  {
    hexCode: "#5499c7",
    category: "blue"
  },
  {
    hexCode: "#7fb3d5",
    category: "blue"
  },
  {
    hexCode: "#a9cce3",
    category: "blue"
  },

  {
    hexCode: "#3498db",
    category: "blue"
  },
  {
    hexCode: "#5dade2",
    category: "blue"
  },
  {
    hexCode: "#85c1e9",
    category: "blue"
  },
  {
    hexCode: "#aed6f1",
    category: "blue"
  },
  {
    hexCode: "#154360",
    category: "blue"
  },
  {
    hexCode: "#1a5276",
    category: "blue"
  },
  {
    hexCode: "#148f77",
    category: "green"
  },
  {
    hexCode: "#17a589",
    category: "green"
  },
  {
    hexCode: "#1abc9c",
    category: "green"
  },
  {
    hexCode: "#48c9b0",
    category: "green"
  },
  {
    hexCode: "#76d7c4",
    category: "green"
  },
  {
    hexCode: "#a3e4d7",
    category: "green"
  },
  {
    hexCode: "#16a085",
    category: "green"
  },
  {
    hexCode: "#45b39d",
    category: "green"
  },
  {
    hexCode: "#73c6b6",
    category: "green"
  },
  {
    hexCode: "#a2d9ce",
    category: "green"
  },
  {
    hexCode: "#0e6251",
    category: "green"
  },
  {
    hexCode: "#117864",
    category: "green"
  },
  {
    hexCode: "#1e8449",
    category: "green"
  },
  {
    hexCode: "#229954",
    category: "green"
  },
  {
    hexCode: "#27ae60",
    category: "green"
  },
  {
    hexCode: "#52be80",
    category: "green"
  },
  {
    hexCode: "#7dcea0",
    category: "green"
  },
  {
    hexCode: "#a9dfbf",
    category: "green"
  },
  {
    hexCode: "#2ecc71",
    category: "green"
  },
  {
    hexCode: "#58d68d",
    category: "green"
  },
  {
    hexCode: "#82e0aa",
    category: "green"
  },
  {
    hexCode: "#abebc6",
    category: "green"
  },
  {
    hexCode: "#145a32",
    category: "green"
  },
  {
    hexCode: "#196f3d",
    category: "green"
  },

  {
    hexCode: "#b7950b",
    category: "yellow"
  },
  {
    hexCode: "#d4ac0d",
    category: "yellow"
  },
  {
    hexCode: "#f1c40f",
    category: "yellow"
  },
  {
    hexCode: "#f4d03f",
    category: "yellow"
  },
  {
    hexCode: "#f7dc6f",
    category: "yellow"
  },
  {
    hexCode: "#f9e79f",
    category: "yellow"
  },
  {
    hexCode: "#b9770e",
    category: "orange"
  },
  {
    hexCode: "#d68910",
    category: "orange"
  },
  {
    hexCode: "#f39c12",
    category: "orange"
  },
  {
    hexCode: "#f5b041",
    category: "orange"
  },
  {
    hexCode: "#f8c471",
    category: "orange"
  },
  {
    hexCode: "#fad7a0",
    category: "orange"
  },
  {
    hexCode: "#af601a",
    category: "orange"
  },
  {
    hexCode: "#ca6f1e",
    category: "orange"
  },
  {
    hexCode: "#e67e22",
    category: "orange"
  },
  {
    hexCode: "#eb984e",
    category: "orange"
  },
  {
    hexCode: "#f0b27a",
    category: "orange"
  },
  {
    hexCode: "#f5cba7",
    category: "orange"
  },
  {
    hexCode: "#a04000",
    category: "orange"
  },
  {
    hexCode: "#ba4a00",
    category: "orange"
  },
  {
    hexCode: "#d35400",
    category: "orange"
  },
  {
    hexCode: "#dc7633",
    category: "orange"
  },
  {
    hexCode: "#e59866",
    category: "orange"
  },
  {
    hexCode: "#edbb99",
    category: "orange"
  },
  {
    hexCode: "#909497",
    category: "gray"
  },
  {
    hexCode: "#a6acaf",
    category: "gray"
  },
  {
    hexCode: "#bdc3c7",
    category: "gray"
  },
  {
    hexCode: "#cacfd2",
    category: "gray"
  },
  {
    hexCode: "#d7dbdd",
    category: "gray"
  },
  {
    hexCode: "#e5e7e9",
    category: "gray"
  },
  {
    hexCode: "#95a5a6",
    category: "gray"
  },
  {
    hexCode: "#aab7b8",
    category: "gray"
  },
  {
    hexCode: "#bfc9ca",
    category: "gray"
  },
  {
    hexCode: "#d5dbdb",
    category: "gray"
  },
  {
    hexCode: "#626567",
    category: "gray"
  },
  {
    hexCode: "#797d7f",
    category: "gray"
  },
  {
    hexCode: "#616a6b",
    category: "gray"
  },
  {
    hexCode: "#707b7c",
    category: "gray"
  },
  {
    hexCode: "#7f8c8d",
    category: "gray"
  },
  {
    hexCode: "#99a3a4",
    category: "gray"
  },
  {
    hexCode: "#b2babb",
    category: "gray"
  },
  {
    hexCode: "#515a5a",
    category: "gray"
  },
  {
    hexCode: "#424949",
    category: "gray"
  },
  {
    hexCode: "#5d6d7e",
    category: "gray"
  },
  {
    hexCode: "#85929e",
    category: "gray"
  },
  {
    hexCode: "#aeb6bf",
    category: "gray"
  },
  {
    hexCode: "#616a6b",
    category: "gray"
  },
  {
    hexCode: "#5d4037",
    category: "brown"
  },
  {
    hexCode: "#6d4c41",
    category: "brown"
  },
  {
    hexCode: "#795548",
    category: "brown"
  },
  {
    hexCode: "#8d6e63",
    category: "brown"
  },
  {
    hexCode: "#a1887f",
    category: "brown"
  },
  {
    hexCode: "#bcaaa4",
    category: "brown"
  },
  {
    hexCode: "#FF3333",
    category: "red"
  },
  {
    hexCode: "#FF3300",
    category: "red"
  },
  {
    hexCode: "#FF0033",
    category: "red"
  },
  {
    hexCode: "#FF0000",
    category: "red"
  },
  {
    hexCode: "#d84315",
    category: "red"
  },
  {
    hexCode: "#bf360c",
    category: "red"
  }
];

module.exports = colors;
