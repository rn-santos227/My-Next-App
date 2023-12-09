import { createMint,  } from '@solana/spl-token';
import { clusterApiUrl, Connection, Keypair, PublicKey } from '@solana/web3.js';
import base58 from "bs58";

const secretKey = process.env.SECRET_KEY?.toString() ?? '';

const decoded = base58.decode(secretKey) 
const payer = Keypair.fromSecretKey(decoded)

const connection = new Connection(
    clusterApiUrl('devnet'),
    'confirmed'
);




export async function mintToken(): Promise<string> {
    const mint = await createMint(
        connection,
        payer,
        payer.publicKey,
        null,
        9
    );
    const message = `Mint Address: ${mint.toBase58()}`
    return message;
};