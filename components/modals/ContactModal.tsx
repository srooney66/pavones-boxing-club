import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '../ui/button'

export default function ContactModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="default">
          Contact Us
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-h-[200px] w-[50%]">
        <AlertDialogHeader className="flex w-full flex-row justify-between">
          <AlertDialogTitle>Contact Us Today</AlertDialogTitle>
          <AlertDialogCancel className="w-40px !mt-0">X</AlertDialogCancel>
        </AlertDialogHeader>
        {/* <AlertDialogFooter> */}
        <AlertDialogDescription>
          {/* <ul>
            <li>Lead Trainer & Coach: Pierre</li>
            <li>WhatsApp #: 1234567890</li>
          </ul> */}
          Lead Trainer & Coach: Pierre
          <br />
          Schedule: TBD
          <br />
          Contact directly for private training session pricing and details.
        </AlertDialogDescription>
        {/* </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  )
}
