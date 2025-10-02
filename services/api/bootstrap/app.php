<?php

use App\Http\Responses\SingleResponse;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->render(function (NotFoundHttpException $exception) {
            $response = new SingleResponse();
            return $response
                ->setStatus(false)
                ->setData($exception->getMessage())
                ->setMessage("Le model n'a pas été trouvé");
        });

        $exceptions->render(function (\Illuminate\Validation\ValidationException $exception) {
            $response = new SingleResponse();
            return $response
                ->setStatus(false)
                ->setData($exception->errors())
                ->setMessage("La Validation du formulaire à échoué");
        });

        $exceptions->render(function (Throwable $exception) {
            $response = new SingleResponse();
            return $response
                ->setStatus(false)
                ->setData([
                    "message" => $exception->getMessage(),
                    "trace" =>$exception->getTrace()
                ])
                ->setMessage("Oups, une erreur est survenue");
        });
    })->create();
