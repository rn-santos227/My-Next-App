"use client"
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import { useState } from "react";

import { mintToken } from "@/services/SolanaServices";

const Form: React.FC = () => {
    const [sender, setSender] = useState<string>('');
    const [reciever, setReciever] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    
    const handleChangeSender = (value: string) => {
      setSender(value);
    }

    const handleChangeReciever = (value: string) => {
      setReciever(value);
    }

    const handleChangeAmount = (value: string) => {
      setAmount(parseInt(value))
    }

    const mint = async () => {
      const msg = await mintToken()
       alert(msg);
    }

    return(
      <div>
        <TextField value={sender} onChange={handleChangeSender} placeholder="Sender Address" />
        <TextField value={reciever} onChange={handleChangeReciever} placeholder="Sender Reciever" />
        <TextField value={amount} onChange={handleChangeAmount} placeholder="Set Amount" type="number" />
        <br />
        <Button label="Mint Token" onClick={mint} />
      </div>
    )
}
export default Form;