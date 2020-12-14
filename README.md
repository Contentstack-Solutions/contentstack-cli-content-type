contentstack-cli-content-type
===

## Description
This is a plugin for [Contentstack's](https://www.contentstack.com/) CLI.
It allows you to quickly retrieve information about Content Types in a Stack.

## How to install this plugin

```shell
$ csdx plugins:install contentstack-cli-content-type
```

## How to use this plugin
This plugin requires you to be authenticated using `csdx auth:login`.
Several commands, such as `csdx content-type:compare` support management token aliases a input flag.
These commands only use the **Stack API Key**. 
They are provided as a convenience, so the Stack API Key's do not have to be re-typed. 
The management token associated with the Stack API Key is ignored.

<!-- toc -->
* [Commands](#commands)
<!-- tocstop -->

<!-- usagestop -->
# Commands
<!-- commands -->
* [`csdx content-type:audit`](#csdx-content-typeaudit)
* [`csdx content-type:compare`](#csdx-content-typecompare)
* [`csdx content-type:compare-remote`](#csdx-content-typecompare-remote)
* [`csdx content-type:details`](#csdx-content-typedetails)
* [`csdx content-type:list`](#csdx-content-typelist)

## `csdx content-type:audit`

display recent changes to a Content Type

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
  -l, --left=left                  Content Type version, i.e. prev version
  -r, --right=right                Content Type version, i.e. later version
  -s, --stack=stack                stack uid

EXAMPLES
  $ csdx content-type:compare -s "xxxxxxxxxxxxxxxxxxx" -c "home_page"
  $ csdx content-type:compare -s "xxxxxxxxxxxxxxxxxxx" -c "home_page" -l # -r #
  $ csdx content-type:compare -a "management token" -c "home_page" -l # -r #
```

_See code: [src/commands/content-type/compare.ts](https://github.com/Contentstack-Solutions/contentstack-cli-content-type/blob/v1.0.0/src/commands/content-type/compare.ts)_

## `csdx content-type:compare-remote`

compare two Content Types on different stacks

```
USAGE
  $ csdx content-type:compare-remote

OPTIONS
  -c, --content-type=content-type  (required) Content Type UID
  -o, --origin-stack=origin-stack  origin stack uid
  -r, --remote-stack=remote-stack  remote stack uid

EXAMPLE
  $ csdx content-type:compare-remote -o "xxxxxxxxxxxxxxxxxxx" -r "xxxxxxxxxxxxxxxxxxx" -c "home_page"
```

_See code: [src/commands/content-type/compare-remote.ts](https://github.com/Contentstack-Solutions/contentstack-cli-content-type/blob/v1.0.0/src/commands/content-type/compare-remote.ts)_

## `csdx content-type:details`

display Content Type details

```
USAGE
  $ csdx content-type:details

OPTIONS
  -a, --token-alias=token-alias    management token alias
  -c, --content-type=content-type  (required) Content Type UID
  -p, --[no-]path                  show path column
  -s, --stack=stack                stack uid

EXAMPLES
  $ csdx content-type:details -s "xxxxxxxxxxxxxxxxxxx" -c "home_page"
  $ csdx content-type:details -a "management token" -c "home_page"
  $ csdx content-type:details -a "management token" -c "home_page" --no-path
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
