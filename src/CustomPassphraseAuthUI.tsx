import React, { useState } from "react";
import { usePassphraseAuth } from "jazz-tools/react";

interface CustomPassphraseAuthUIProps {
  children: React.ReactNode;
  wordlist: string[];
  appName: string;
}

export function CustomPassphraseAuthUI({ children, wordlist, appName }: CustomPassphraseAuthUIProps) {
  const auth = usePassphraseAuth({ wordlist });
  const [loginPassphrase, setLoginPassphrase] = useState("");
  const [error, setError] = useState<string | null>(null);

  if (auth.state === "signedIn") {
    return <>{children}</>;
  }

  const handleSignUp = async () => {
    setError(null);
    try {
      await auth.signUp();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleLogIn = async () => {
    setError(null);
    try {
      await auth.logIn(loginPassphrase);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-2">{appName}</h2>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="signup-passphrase" className="font-medium">Votre phrase de récupération</label>
        <textarea
          id="signup-passphrase"
          readOnly
          value={auth.passphrase}
          rows={3}
          className="border rounded p-2 w-full text-sm bg-gray-100"
        />
        <button
          onClick={handleSignUp}
          className="bg-blue-600 text-white rounded px-4 py-2 mt-2 hover:bg-blue-700"
        >
          Créer son compte
        </button>
      </div>
      <div className="w-full flex flex-col gap-2 mt-4">
        <label htmlFor="login-passphrase" className="font-medium">Se connecter avec votre phrase de récupération</label>
        <textarea
          id="login-passphrase"
          value={loginPassphrase}
          onChange={e => setLoginPassphrase(e.target.value)}
          rows={3}
          className="border rounded p-2 w-full text-sm"
          placeholder="Entrez votre phrase de récupération"
        />
        <button
          onClick={handleLogIn}
          className="bg-gray-800 text-white rounded px-4 py-2 mt-2 hover:bg-gray-900"
        >
          Se connecter
        </button>
      </div>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
} 