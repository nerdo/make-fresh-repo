# make-fresh-repo
A utility for creating a fresh copy of a repository.

The intended use case is to run this on a boilerplate repository to begin working on a new project.

## usage
Change to the direcotry of the repository you want to copy, then run this command:

`npx make-fresh-repo ../destination/repo/path`

...where `../destination/repo/path` is a relative or absolute path to where the new, fresh copy of the repository should go.

The target directory and any missing sub-directories don't need to exist and will be created for you.
