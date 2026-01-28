const profile = {
    username: "Pratik",
    follow: true,
    followers: 1000,
    following: 600,
    posts: 20,
};

profile.username = "Pratik123";
profile.followers += 300;
profile.posts += 10;

console.log(profile);



const result = {
    name: "pratik",
    rollNo: 108,
    division: "A",
    totalMarks: 400,
    grade: "A",
    result: "Pass"
};

result.totalMarks = result.totalMarks + 50;
console.log("tatalMarks = ",result.totalMarks);