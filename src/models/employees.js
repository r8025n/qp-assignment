const employees = [
    {
      id: 1,
      name: "Alice Johnson",
      positionId: 1, // CTO
      email: "alice.johnson@company.com"
    },
    {
      id: 2,
      name: "Bob Smith",
      positionId: 2, // Senior Software Engineer
      email: "bob.smith@company.com"
    },
    {
      id: 3,
      name: "Carol White",
      positionId: 2, // Senior Software Engineer
      email: "carol.white@company.com"
    },
    {
      id: 4,
      name: "David Brown",
      positionId: 3, // Software Engineer
      email: "david.brown@company.com"
    },
    {
      id: 5,
      name: "Eve Davis",
      positionId: 3, // Software Engineer
      email: "eve.davis@company.com"
    },
    {
      id: 6,
      name: "Frank Miller",
      positionId: 3, // Software Engineer
      email: "frank.miller@company.com"
    },
    {
      id: 7,
      name: "Grace Lee",
      positionId: 3, // Software Engineer
      email: "grace.lee@company.com"
    }
  ];

const positions = {
    "cto" : 1,
    "senior software engineer": 2,
    "software engineer": 3
}
  
module.exports = {
    positions,
    employees
};
  