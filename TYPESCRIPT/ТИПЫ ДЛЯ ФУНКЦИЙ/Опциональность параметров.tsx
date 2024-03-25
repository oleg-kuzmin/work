//# Опциональность параметров
// Указываются через '?:'

function log(name: string, userId?: string): void {
  console.log('Hello', name, 'with ID', userId || 'anonim');
}
