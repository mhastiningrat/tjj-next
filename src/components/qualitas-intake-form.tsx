import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"

export function QualitasIntakeForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="grid lg:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Qualitas Intake</CardTitle>
          <CardDescription>
            
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-2">
                <Label htmlFor="email">NO</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=" "
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">REV</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="grid gap-2">
                <Label htmlFor="email">NAMA</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=" "
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">GROUP</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=" "
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">SHIFT</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=" "
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="email">KETERANGAN</Label>
                <Textarea
                  id="keterangan"
                  placeholder=""
                  required
                />
              </div>
          </div>
          
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl"></CardTitle>
          <CardDescription>
            
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">JAM</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=" "
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">STOPLOG PENSTOCK 
                    <span className="text-xs ms-3 text-blue-600">140-180 (DI ISI 1X PER SHIFT)</span>
                    </Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="">FLOW METER FIT 2101</Label>
                <div className="grid lg:grid-cols-3 gap-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">m3/h<span className="text-xs ms-3 text-blue-600">(4 Digit)</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder=" "
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">m3<span className="text-xs ms-3 text-blue-600">(8 Digit)</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder=" "
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">meter <span className="text-xs ms-3 text-blue-600">3-4,5</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder=" "
                      required
                    />
                  </div>
                
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="">QUALITAS</Label>
                <div className="grid lg:grid-cols-3 gap-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Ntu<span className="text-xs ms-3 text-blue-600">0-1000</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder=" "
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Ph <span className="text-xs ms-3 text-blue-600">6,8-8,0</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder=" "
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">NH4 <span className="text-xs ms-3 text-blue-600">0-600</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder=" "
                      required
                    />
                  </div>
                
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">PIT 2207(BAR)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=" "
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Submit
              </Button>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      </div>
     
    </div>
  )
}
