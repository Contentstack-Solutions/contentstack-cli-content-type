contentstack-cli-content-type
===

Retrieve information about Content Types in a Stack.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/evo.svg)](https://npmjs.org/package/evo)
[![Downloads/week](https://img.shields.io/npm/dw/evo.svg)](https://npmjs.org/package/evo)
[![License](https://img.shields.io/npm/l/evo.svg)](https://github.com/Garbage/evo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g contentstack-cli-content-type
$ csdx COMMAND
running command...
$ csdx (-v|--version|version)
contentstack-cli-content-type/1.0.0 darwin-x64 node-v12.16.1
$ csdx --help [COMMAND]
USAGE
  $ csdx COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`csdx `](#csdx-)
* [`csdx command`](#csdx-command)
* [`csdx content-type:audit`](#csdx-content-typeaudit)
* [`csdx content-type:compare`](#csdx-content-typecompare)
* [`csdx content-type:details`](#csdx-content-typedetails)
* [`csdx content-type:list`](#csdx-content-typelist)

## `csdx `

```
USAGE
  $ csdx
```

_See code: [src/commands/index.ts](https://github.com/Contentstack-Solutions/contentstack-cli-content-type/blob/v1.0.0/src/commands/index.ts)_

## `csdx command`

```
USAGE
  $ csdx command
```

_See code: [src/commands/command.ts](https://github.com/Contentstack-Solutions/contentstack-cli-content-type/blob/v1.0.0/src/commands/command.ts)_

## `csdx content-type:audit`

display audit logs for recent changes to a Content Type

```
USAGE
  $ csdx content-type:audit

OPTIONS
  -a, --token-alias=token-alias    management token alias
  -c, --content-type=content-type  (required) Content Type UID
  -s, --stack=stack                stack uid

EXAMPLES
  $ csdx content-type:audit -s "xxxxxxxxxxxxxxxxxxx" -c "home_page"
  $ csdx content-type:audit -a "management token" -c "home_page"
```

_See code: [src/commands/content-type/audit.ts](https://github.com/Contentstack-Solutions/contentstack-cli-content-type/blob/v1.0.0/src/commands/content-type/audit.ts)_

## `csdx content-type:compare`

compare two Content Type versions

```
USAGE
  $ csdx content-type:compare

OPTIONS
  -a, --token-alias=token-alias    management token alias
  -c, --content-type=content-type  (required) Content Type UID
  -l, --left=left                  (required) previous Content Type version
  -r, --right=right                (required) current Content Type version
  -s, --stack=stack                stack uid

EXAMPLES
  $ csdx content-type:compare -s "xxxxxxxxxxxxxxxxxxx" -c "home_page"
  $ csdx content-type:compare -s "xxxxxxxxxxxxxxxxxxx" -c "home_page" -left # -right #
  $ csdx content-type:compare -a "management token" -c "home_page" -left # -right #
```

_See code: [src/commands/content-type/compare.ts](https://github.com/Contentstack-Solutions/contentstack-cli-content-type/blob/v1.0.0/src/commands/content-type/compare.ts)_

## `csdx content-type:details`

display Content Type details

```
USAGE
  $ csdx content-type:details

OPTIONS
  -a, --token-alias=token-alias    management token alias
  -c, --content-type=content-type  (required) Content Type UID
  -s, --stack=stack                stack uid

EXAMPLES
  $ csdx content-type:details -s "xxxxxxxxxxxxxxxxxxx" -c "home_page"
  $ csdx content-type:details -a "management token" -c "home_page"
```

_See code: [src/commands/content-type/details.ts](https://github.com/Contentstack-Solutions/contentstack-cli-content-type/blob/v1.0.0/src/commands/content-type/details.ts)_

## `csdx content-type:list`

list all Content Types in a Stack

```
USAGE
  $ csdx content-type:list

OPTIONS
  -a, --token-alias=token-alias  management token alias
  -o, --order=title|modified     [default: title] order by column
  -s, --stack=stack              stack uid

EXAMPLES
  $ csdx content-type:list -s "xxxxxxxxxxxxxxxxxxx"
  $ csdx content-type:list -a "management token"
  $ csdx content-type:list -a "management token" -o modified
```

_See code: [src/commands/content-type/list.ts](https://github.com/Contentstack-Solutions/contentstack-cli-content-type/blob/v1.0.0/src/commands/content-type/list.ts)_
<!-- commandsstop -->
