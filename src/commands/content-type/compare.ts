import Command from '../command'
import {flags} from '@contentstack/cli-command'
import buildOutput from '../../core/content-type/compare'

export default class CompareCommand extends Command {
  static description = 'compare two Content Type versions';

  static examples = [
    '$ csdx content-type:compare -s "xxxxxxxxxxxxxxxxxxx" -c "home_page"',
    '$ csdx content-type:compare -s "xxxxxxxxxxxxxxxxxxx" -c "home_page" -l # -r #',
    '$ csdx content-type:compare -a "management token" -c "home_page" -l # -r #',
  ];

  static flags = {
    stack: flags.string({
      char: 's',
      description: 'stack uid',
      required: false,
      exclusive: ['token-alias'],
    }),

    'token-alias': flags.string({
      char: 'a',
      description: 'management token alias',
      hidden: false,
      multiple: false,
      required: false,
    }),

    'content-type': flags.string({
      char: 'c',
      description: 'Content Type UID',
      required: true,
    }),

    left: flags.integer({
      char: 'l',
      description: 'Content Type version',
      required: true,
    }),

    right: flags.integer({
      char: 'r',
      description: 'Content Type version',
      required: true,
    }),
  }

  async run() {
    try {
      const {flags} = this.parse(CompareCommand)
      this.setup(flags)

      const [stack, previous, current] = await Promise.all([
        this.client.getStack(this.apiKey),
        this.client.getContentType(this.apiKey, flags['content-type'], true, flags.left),
        this.client.getContentType(this.apiKey, flags['content-type'], true, flags.right),
      ])

      const output = await buildOutput(flags['content-type'], previous, current)
      this.printOutput(output, 'changes', flags['content-type'], stack.name)
    } catch (error) {
      this.error(error, {exit: 1, suggestions: error.suggestions})
    }
  }
}
