// Marks filled fields green and records the events they receive, so it is
// visible whether the extension dispatched what a framework needs to notice a
// value it did not set itself.
const log = document.getElementById('log');
const fields = document.querySelectorAll('input, textarea, select');

let lines = [];

const write = (message) => {
  lines.push(message);
  log.textContent = lines.slice(-200).join('\n');
  log.scrollTop = log.scrollHeight;
};

document.getElementById('clear').onclick = () => {
  lines = [];
  log.textContent = 'cleared';
};

for (const field of fields) {
  // Unmarked fields have no autocomplete attribute to name them by.
  const name = field.getAttribute('autocomplete') || field.name || field.id;

  for (const type of ['focus', 'input', 'change', 'blur']) {
    field.addEventListener(type, () => {
      field.classList.toggle('filled', field.value !== '');

      const value = type === 'input' || type === 'change' ? JSON.stringify(field.value) : '';
      write(`${type.padEnd(6)} ${name.padEnd(20)} ${value}`);
    });
  }
}

write(`listening for focus / input / change / blur on ${fields.length} fields`);
