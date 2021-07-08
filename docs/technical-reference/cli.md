# CLI

* [`zenith branch`](#branch)
* [`zenith help`](#help)
* [`zenith init`](#init)
* [`zenith pg`](#pg)
* [`zenith push`](#push)
* [`zenith remote`](#remote)
* [`zenith restart`](#restart)
* [`zenith start`](#start)
* [`zenith status`](#status)
* [`zenith stop`](#stop)

---

:::caution
TODO: need to come back and re-do content for each command. Right now just dumping out the help output for each command to get started
:::

### `zenith branch{#branch}`
```bash
Create a new branch

USAGE:
    zenith branch [ARGS]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

ARGS:
    <branchname>
    <start-point>
```

### `zenith help`{#help}
```bash
Zenith CLI

USAGE:
    zenith [SUBCOMMAND]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    branch     Create a new branch
    help       Prints this message or the help of the given subcommand(s)
    init       Initialize a new Zenith repository
    pg         Manage postgres instances
    push       Push timeline to remote pageserver
    remote     Manage remote pagerservers
    restart    Restart local pageserver
    start      Start local pageserver
    status
    stop       Stop local pageserver
```

### `zenith init`{#init}
```bash
Initialize a new Zenith repository

USAGE:
    zenith init [OPTIONS]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
        --remote-pageserver <pageserver-url>
```

### `zenith pg`{#pg}
```bash
Manage postgres instances

USAGE:
    zenith pg [SUBCOMMAND]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    create
    help      Prints this message or the help of the given subcommand(s)
    list
    start
    stop
```

### `zenith push`{#push}
```bash
Push timeline to remote pageserver

USAGE:
    zenith push <timeline> <remote>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

ARGS:
    <timeline>
    <remote>
```

### `zenith remote`{#remote}
```bash
Manage remote pagerservers

USAGE:
    zenith remote [SUBCOMMAND]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    add     Add a new remote pageserver
    help    Prints this message or the help of the given subcommand(s)
```

### `zenith restart`{#restart}
```bash
Restart local pageserver

USAGE:
    zenith restart

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information
```

### `zenith start`{#start}
```bash
Start local pageserver

USAGE:
    zenith start

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information
```

### `zenith status`{#status}
```bash
USAGE:
    zenith status

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information
```

### `zenith stop`{#stop}
```bash
Stop local pageserver

USAGE:
    zenith stop

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information
```