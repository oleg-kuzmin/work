//# Применение interface
interface Car {
  wheels: number;
  brand: string;
  type?: string;
  isNew?: boolean;
}

const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'Sedan',
  isNew: false,
};
