import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const UserData = atom({
	key: "UserData",
	default: {} | null,
	effects_UNSTABLE: [persistAtom],
});
