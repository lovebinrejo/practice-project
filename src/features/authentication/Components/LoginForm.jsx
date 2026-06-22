import { User, KeyRound, Building2 } from "lucide-react";
import Input from "../../../components/inputs/Input";
import Button from "../../../components/Buttons/Button";

function LoginForm({
    email,
    password,
    masterEntity,
    setEmail,
    setPassword,
    setMasterEntity,
    onLogin
}) {
    return (
        <div className="w-full max-w-sm">
            <div className="space-y-4">
                <Input
                    name="email"
                    placeholder="Username"
                    value={email}
                    onchange={(e) => setEmail(e.target.value)}
                    icon={<User size={18} />}
                    className="bg-[#e8edf8] rounded-full"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onchange={(e) => setPassword(e.target.value)}
                    icon={<KeyRound size={18} />}
                    className="bg-[#fdf6e3] rounded-full"
                />
                <Input
                    name="masterEntity"
                    placeholder="Master entity"
                    value={masterEntity}
                    onchange={(e) => setMasterEntity(e.target.value)}
                    icon={<Building2 size={18} />}
                    className="bg-white border border-gray-300 rounded-full"
                />
            </div>
            <Button
                text="LOGIN"
                onclick={onLogin}
                type="button"
                className="mt-6 w-full py-3 rounded-full tracking-widest bg-[#397db9]! hover:bg-[#2c6291]!"
            />
        </div>
    );
}

export default LoginForm;

