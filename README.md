# React + TypeScript + Vite

Steps to use this app:

1) Clone the repository to local
```
git clone https://github.com/drakkomaximo/employees-app.git
```
2) Rebuild node_modules file
```
yarn
```
3) Start the app in local
```
yarn run dev
```

## Notes

- The app is in English by default.
- The app starts with fake information, but you can edit or delete it as needed.
- **Validations:**
  - **Address:** The address has a validation rule: You can add a new address if it starts with ['calle', 'avenida', 'transversal']. The rest of the address doesn't matter.
  - **Telephone:** Telephone numbers are validated according to Colombian phone number formats.
  - **Location City:** Location City has a validation with approximately 71,830 cities from around the world. If a specific city doesn't appear, you can add it to the `cities.ts` file in the `additionalCities` array, in lowercase.
  - **Birth date:** Birth date is validated to ensure it's at least 18 years ago.
  - **Hire date:** The hire date depends on the birth date.
  - **Time in position:** Time in position depends on the hire date.
  - **Salary:** Salary is validated to ensure it's a number greater than 0.
  - All fields are required except middlename (in my case, I don't have a middlename).
- And more...
