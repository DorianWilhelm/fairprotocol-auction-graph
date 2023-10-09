import { legitTokens } from "../legitTokens";

function getIsStableCoin(address: string, chainId: i32): bool {
    if (!legitTokens.has(chainId)) {
        return false
    }
    if (legitTokens.get(chainId).usdc && address.toLowerCase().includes(legitTokens.get(chainId).usdc.toLowerCase())) {
        return true
    }
    if (legitTokens.get(chainId).usdt && address.toLowerCase().includes(legitTokens.get(chainId).usdt.toLowerCase())) {
        return true
    }
    if (legitTokens.get(chainId).dai && address.toLowerCase().includes(legitTokens.get(chainId).dai.toLowerCase())) {
        return true
    }
	return false;
}

export { getIsStableCoin };