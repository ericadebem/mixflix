import { Button } from "../components/Button";


export const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form> 
        <label htmlFor="username">Username/E-mail:</label>
        <input type="text" name="username" id="username" />

        <label htmlFor="password">Passwort:</label>
        <input type="password" name="password" id="password" />

        <Button text="Weiter" />
        
        <p>Neue hier?</p>
        <Button text="Registrieren kostenlos" />
      </form>
    </div>
  );
};
