import { useState } from "react";
import FloatingShape from "./components/FloatingShape";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="min-h-screen bg-gradient-to-br
    from-[#4B0050] via-[#4f0e85] to-[#580a99] flex items-center justify-center relative overflow-hidden"
    >
      <FloatingShape
        color="bg-[#7A3E9D]"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-[#6A2F8D]"
        size="w-48 h-48"
        top="20%"
        left="30%"
        delay={5}
      />
      <FloatingShape
        color="bg-[#5A207D]"
        size="w-72 h-72"
        top="50%"
        left="70%"
        delay={2}
      />
      <FloatingShape
        color="bg-[#4B126D]"
        size="w-40 h-40"
        top="70%"
        left="15%"
        delay={8}
      />
      <FloatingShape
        color="bg-[#3B005D]"
        size="w-56 h-56"
        top="10%"
        left="80%"
        delay={3}
      />
    </div>
  );
}

export default App;
