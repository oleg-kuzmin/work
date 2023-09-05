//# установка пакета в той же директории
//* npx create-next-app .

//# вопросы при установке
/*
- Would you like to use TypeScript?                    / No
- Would you like to use ESlint?                        / Yes
- Would you like to use Tailwind CSS?                  / No
- Would you like to use `src/` directory?              / Yes
- Would you like to use App Router?                    / Yes
- Would you like to customize the default import alias / No
*/

//# в результате установлено
/*
//* Package.json
{
  "name": "template-next-react",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",         // webpack
    "dev": "next dev --turbo", // turbopack
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "eslint": "8.48.0",
    "eslint-config-next": "13.4.19",
    "next": "13.4.19",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
*/


