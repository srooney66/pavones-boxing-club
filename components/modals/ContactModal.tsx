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
import MapIframe from '../global/MapIframe'

export default function ContactModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="default">
          Contact Us
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-h-[200px] w-[90%] lg:w-[50%]">
        <AlertDialogHeader className="flex w-full flex-row justify-between">
          <AlertDialogTitle className="text-xl">Contact Us Today!</AlertDialogTitle>
          <AlertDialogCancel className="w-40px !mt-0">X</AlertDialogCancel>
        </AlertDialogHeader>

        <AlertDialogDescription className="text-lg">
          {/* <ul>
            <li>Lead Trainer & Coach: Pierre</li>
            <li>WhatsApp #: 1234567890</li>
          </ul> */}
          Trainer & Coach: Pierre (+506 8747-4573)
          <br />
          Schedule: Coming soon
          <br />
          <br />
          <em>Contact directly for pricing and private training details.</em>
        </AlertDialogDescription>
        <AlertDialogFooter>
          <MapIframe />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
