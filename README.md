# What's done / will be done

- trying to author cfn template samples. (don't deploy stack if not free tier)
- setting up a git pre-commit hook with precommit(a Python pkg) for checking CFN template validility. [aws article](https://aws.amazon.com/ru/blogs/mt/git-pre-commit-validation-of-aws-cloudformation-templates-with-cfn-lint/)
  - traditionally this is done with AWS::CloudFormation::ValidateTemplate API to check YAML/JSON syntax. But it does not check actual CFN specific syntax.
  - With [cfn_nag](https://github.com/stelligent/cfn_nag), if needed, security and best practices will also be checked.
  - To make this work, you need:
    - Python3.7+
    - `pip install -r requirements.txt` (you may create a venv before running this. But it's up to you)
    - `pre-commit install`
    - Try to add a cfn template in `cfn-templates` folder and make a commit to see if it works.
