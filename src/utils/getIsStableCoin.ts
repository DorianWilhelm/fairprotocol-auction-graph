import { legitTokens } from "../legitTokens";

function getIsStableCoin(address: string, chainId: i32): bool {
    if (address.toLowerCase().includes(legitTokens.get(chainId).usdc.toLowerCase())) {
        return true
    }
    if (address.toLowerCase().includes(legitTokens.get(chainId).usdt.toLowerCase())) {
        return true
    }
    if (address.toLowerCase().includes(legitTokens.get(chainId).dai.toLowerCase())) {
        return true
    }
	return false;
}

export { getIsStableCoin };