// terminal.test.js

const { executeCommand } = require('./main'); // Assuming your main.js exports executeCommand function

describe('Terminal', () => {
  let terminal;

  beforeEach(() => {
    terminal = document.createElement('div');
    terminal.id = 'terminal';
    document.body.appendChild(terminal);
  });

  afterEach(() => {
    document.body.removeChild(terminal);
  });
console.log("hello world");
  test('executes command and displays response', () => {
    const command = 'test command';
    executeCommand(command);

    const output = terminal.querySelector('div');
    expect(output.textContent).toBe('Command executed: ' + command);
  });
});
