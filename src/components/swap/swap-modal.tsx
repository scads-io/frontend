import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/ui/dialog";
import ScadsForm from "./scads-form";
import TwineForm from "./twine-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

const SwapModal = ({ navigation }: { navigation?: boolean }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {navigation ? (
          <span className="button-primary relative cursor-pointer rounded-lg border border-[#8a6cff] px-6 py-1 text-sm font-semibold transition hover:bg-transparent hover:bg-none hover:text-[#B4BCD0] md:border-none md:bg-none md:px-0 md:py-0 md:font-normal md:shadow-none">
            Invest
          </span>
        ) : (
          <Button className="px-10">Invest</Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[360px] rounded-3xl border-none bg-dark-blue md:max-w-lg">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-semibold text-white">
            Swap
          </DialogTitle>
          <DialogDescription>
            <Tabs defaultValue="scads">
              <TabsList className="flex w-fit justify-start gap-x-2 rounded-3xl border border-white/10 bg-white/[.02]">
                <TabsTrigger
                  value="scads"
                  className="rounded-3xl px-4 py-1 text-sm text-white"
                >
                  Scads
                </TabsTrigger>
                <TabsTrigger
                  value="twine"
                  className="rounded-3xl px-4 py-1 text-sm text-white"
                >
                  Twine
                </TabsTrigger>
              </TabsList>
              <TabsContent value="scads">
                <ScadsForm panel="scads" />
              </TabsContent>
              <TabsContent value="twine">
                <TwineForm panel="twine" />
              </TabsContent>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SwapModal;
