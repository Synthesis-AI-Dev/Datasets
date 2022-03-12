
const saiGithubUserName = "Synthesis-AI-Dev"
const repoName = "test-gh-pages"
const saiGithubIOURL = `https://${saiGithubUserName.toLocaleLowerCase()}.github.io`

module.exports = {
    repoName,
    saiGithubUserName,
    saiGithubIOURL,
    saiGithubURL: `https://github.com/${saiGithubUserName}`,
    mainPageURL: `${saiGithubIOURL}/${repoName}`,
    title: "Synthesis AI Open Dataset",
}