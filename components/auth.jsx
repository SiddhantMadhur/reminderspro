import React from "react";
import { supabase } from "../server";

function AuthPage() {


  async function logInWithProvder (provider) {
    const user = supabase.auth.user()
    if(user==null){
      const {user, data, error} =  await supabase.auth.signIn({provider: provider})
    }
  }

  return (
    <div className="grid h-screen place-items-center bg-gray-100">
      <div className="flex gap-y-5 flex-col bg-white shadow-md px-10 py-8 rounded-lg">
        <div className="text-3xl">Sign In</div>
        <button onClick={()=>logInWithProvder('google')}>
          <div className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition">
            Sign in With Google
          </div>
        </button>
      </div>
    </div>
  );
}

export default AuthPage;
