module.exports = async () => {
  const title = process.env.TITLE;
  if (title.startsWith('octocat')) {
    console.log("Title starts with 'octocat'");
  } else {
    console.error("Title did not start with 'octocat'");
  }
}
