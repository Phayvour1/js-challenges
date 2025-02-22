const student = {
    name: "Dan Dan",
    age: 26,
    scores: {
      math: 90,
      english: 85,
      science: 80
    }
  };
  
  const scores = Object.values(student.scores);
  const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  const status = averageScore >= 50 ? "Passed" : "Failed";
  
  console.log(`Student: ${student.name}`);
  console.log(`Average Score: ${averageScore}`);
  console.log(`Status: ${status}`);
  