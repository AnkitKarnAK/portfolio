// pages/api/github.js

import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.post(
        'https://api.github.com/graphql',
        { query },
        {
          headers: {
            'Authorization': `Bearer ${process.env.GITHUB_ACCESS_TOKEN_ANKIT_PERSONAL}`,
          },
        }
      );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
}

const query =
  /* GraphQL */
  `
    {
      user(login: "ankitkarnak") {
        name
        login
        contributionsCollection {
          totalCommitContributions
          totalPullRequestReviewContributions
        }
        repositoriesContributedTo(
          first: 1
          contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
        ) {
          totalCount
        }
        pullRequests(first: 1) {
          totalCount
        }
        mergedPullRequests: pullRequests(states: MERGED) {
          totalCount
        }
        openIssues: issues(states: OPEN) {
          totalCount
        }
        closedIssues: issues(states: CLOSED) {
          totalCount
        }
        followers {
          totalCount
        }
        repositoryDiscussions {
          totalCount
        }
        repositoryDiscussionComments(onlyAnswers: true) {
          totalCount
        }
      }
    }
  `;
