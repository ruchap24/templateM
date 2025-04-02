import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Copy, X } from "lucide-react";

function ViewHtmlDialog({ openDialog, htmlCode, closeDialog }) {
  const CopyCode = () => {
    navigator.clipboard.writeText(htmlCode);
  };

  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle asChild>
              <h2>HTML Email Template</h2>
            </DialogTitle>
            <div className="flex gap-2">
              <Copy
                className="p-2 bg-gray-100 rounded-full h-9 w-9 cursor-pointer"
                onClick={CopyCode}
              />
              {/* Close button */}
              <button onClick={closeDialog} className="p-2">
                <X className="h-9 w-9" />
              </button>
            </div>
          </div>
          <DialogDescription asChild>
            <div className="max-h-[400px] overflow-auto bg-black text-white rounded-lg p-5">
              <pre className="whitespace-pre-wrap break-all">
                <code>{htmlCode}</code>
              </pre>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ViewHtmlDialog;